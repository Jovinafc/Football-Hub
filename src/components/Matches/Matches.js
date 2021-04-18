import React, { useEffect } from 'react';
import axios from 'axios';

//https://api.football-data.org/v2/matches?dateFrom=2021-04-18&dateTo=2021-04-18

//https://api.football-data.org/v2/competitions/PL/matches?dateFrom=2021-04-18&dateTo=2021-04-18

//https://api.football-data.org/v2/competitions/PL/standings

const Matches = () => {
    const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
    axios.defaults.headers.common['X-Auth-Token'] = API_KEY
    useEffect(() => {
        axios.get('https://api.football-data.org/v2/PL/matches/dateFrom=2021-04-16/dateTo=2021-04-18')
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            Today's Matches
        </div>        
    )
}

export default Matches;