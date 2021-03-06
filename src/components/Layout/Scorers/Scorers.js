import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Scorers.css';
import ScoreItem from './ScoreItem';
import Loader from "react-loader-spinner";


//https://api.football-data.org/v2/competitions/SA/scorers

const Scorers = ({match}) => {
    const [scorerList, setScorerList] = useState([]);

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
        axios.defaults.headers.common['X-Auth-Token'] = API_KEY
        axios.get(`https://api.football-data.org/v2/competitions/${match.params.league_id}/scorers`)
        .then(res => {
            setScorerList(res.data.scorers);
        })
        .catch(err => console.log(err));
    }, [match.params.league_id]);

    return (
        <div>
            <div>
                <h3>Top Scorers</h3>
                {
                    scorerList.length === 0 ? 
                    <div><Loader type="Oval" color="#111827" height={80} width={80}/></div> :
                    <div className="scoreItemCont">
                        <div className="scoreItemTop">
                            <p>Name</p>
                            <p>Positon</p>
                            <p>Team</p>
                            <p>Goals</p> 
                        </div>
                        { scorerList.map((score) => (
                            <ScoreItem key={score.player.id} score={score}/>
                        )) }
                    </div>
                }
            </div>
        </div>
    )
}

export default Scorers
