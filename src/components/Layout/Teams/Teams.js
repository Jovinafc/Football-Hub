import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Teams.css';
import TeamItem from './TeamItem';
import Loader from "react-loader-spinner";



const Teams = ({match}) => {
    const [teams, setTeams] = useState([]);
    
    useEffect(() => {
        const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
        axios.defaults.headers.common['X-Auth-Token'] = API_KEY
        axios.get(`https://api.football-data.org/v2/competitions/${match.params.league_id}/teams`)
        .then(res => {
            setTeams(res.data.teams);
        })
        .catch(err => console.log(err));
    }, [match.params.league_id]);


    return (
        <div>
            <div className="teams__header">
            <h3>Teams</h3>
            </div>
            {
            teams.length === 0 ? 
            <div><Loader type="Oval" color="#111827" height={80} width={80}/></div> : 
            <div className="teamsList">
                { teams.map(team => (
                    <TeamItem key={team.name} team={team}/>
                ))}
            </div>
            } 
        </div>
    )
}

export default Teams
