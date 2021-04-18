import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MatchItem from './MatchItem';
import './Matches.css';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { FcNext } from 'react-icons/fc';

const Matches = ({match}) => {
    const [currentGW, setcurrentGW] = useState();
    const [matchesList, setMatchesList] = useState([]);
    const [totalGW, setTotalGW] = useState('');
    const [totalGWArray, setTotalGWArray] = useState([]);
    // const [selectGw, setSelectGW] = useState();

    const getMatches = (matchDay) => {
        const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
        axios.defaults.headers.common['X-Auth-Token'] = API_KEY
        axios.get(`https://api.football-data.org/v2/competitions/${match.params.league_id}/matches?matchday=${matchDay}`)
        .then(res => {
            setMatchesList(res.data.matches);
        })
        .catch(err => {
            console.log(err);
        }) 
    }

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
        axios.defaults.headers.common['X-Auth-Token'] = API_KEY
        axios.get(`https://api.football-data.org/v2/competitions/${match.params.league_id}/matches?limit=10`)
        .then(res => {
            let totalGW = res.data.count / 10;
            setTotalGW(totalGW);
            let ss = Array.from(Array(totalGW).keys())
            setTotalGWArray(ss);
            setcurrentGW(res.data.matches[1].season.currentMatchday);
            let currentGW = res.data.matches[1].season.currentMatchday;
            return currentGW;
        }).then(res => {
            getMatches(res);
         })
        .catch(err => console.log(err));
    },[]);

    const changeBeforeGW = (currentGW) => {
        let newGw = parseInt(currentGW) - 1;
        setcurrentGW(newGw);
        getMatches(newGw);
    }

    const changeAfterGW = (currentGW) => {
        let newGw = parseInt(currentGW) + 1;
        setcurrentGW(newGw);
        getMatches(newGw);
    }

    const onselectchange = (e) => {
        e.preventDefault();
        setcurrentGW(e.target.value);
        getMatches(e.target.value);
    }


    return (
        <div>
            Matches
            {
                matchesList.length === 0 ?
                <div>Loading...</div> :
                <div>
                <div className="matchHeader">
                <button onClick={() => changeBeforeGW(currentGW)}><GrLinkPrevious /></button>
                <p>
                GameWeek {currentGW}
                </p>
                <button onClick={() => changeAfterGW(currentGW)}> <GrLinkNext /></button>
                {/* Select GW: */}
                <div className="selectCont">
                <p>Select GW</p>
                <select 
                placeholder="Select a GW"
                className="selectDiv"
                onChange={(e) => onselectchange(e)}
                value={currentGW}>
                    {
                        totalGWArray.map(x => (
                            <option key={x} value={x}>{x}</option>
                        ))
                    }
                </select>
                </div>
                </div>
                <div>
                    {
                        matchesList.map((mat) => (
                            <MatchItem key={mat.id} mat={mat} />
                        ))
                    }
                </div>
                </div>
            }
        </div>
    )
}

export default Matches
