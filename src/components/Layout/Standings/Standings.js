import React, { useEffect, useState } from 'react'
import StandItem from './StandItem';
import axios from 'axios';
import './Standings.css';
import Loader from "react-loader-spinner";


const Standings = ({match}) => {
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
        axios.defaults.headers.common['X-Auth-Token'] = API_KEY
        axios.get(`https://api.football-data.org/v2/competitions/${match.params.league_id}/standings`)
        .then(res => {
            setStandings(res.data.standings[0].table);
        })
        .catch(err => console.log(err));
    },[match.params.league_id]);

    return (
        <div>
            <div>
                <h3>Current League Standings</h3>
            </div>
            <div className="standingDiv">
            <div className="standItem">
                <div className="standItemRank">Position</div>
                <div className="standItemName">Team</div>
                <div className="standItemPlayed">Played</div>
                <div className="standItemWon">Won</div>
                <div className="standItemDraw">Draw</div>
                <div className="standItemLoss">Lost</div>
                <div className="standItemGF">GF</div>
                <div className="standItemGA">GA</div>
                <div className="standItemGD">GD</div>
                <div className="standItemPoints">Points</div>
            </div>

                {
                    standings.length > 0 
                    ?
                    standings.map((standing => (
                        <StandItem key={standing.position} standing={standing}/>
                    )))

                    : <div> 
                        <Loader type="Oval" color="#111827" height={80} width={80}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Standings
