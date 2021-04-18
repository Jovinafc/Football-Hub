import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Teams.css';
import TeamItem from './TeamItem';

const Teams = ({match}) => {
    const [teams, setTeams] = useState([]);
    const [country, setCountry] = useState('');
    
    useEffect(() => {
        const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
        axios.defaults.headers.common['X-Auth-Token'] = API_KEY
        axios.get(`https://api.football-data.org/v2/competitions/${match.params.league_id}/teams`)
        .then(res => {
            console.log(res.data);
            setTeams(res.data.teams);
            setCountry(res.data.competition.area.name);
        })
        .catch(err => console.log(err));
    }, []);

    console.log(teams);

    return (
        <div>
            <div className="teams__header">
            <h3 className="teams__name">
                Teams
            </h3> 
            <p>Country: {country}</p>   
            </div>
            {
            teams.length === 0 ? 
            <div>Loading</div> : 
            <div className="teamsList">
                { teams.map(team => (
                    <TeamItem team={team}/>
                ))}
            </div>
            } 
        </div>
    )
}

export default Teams
