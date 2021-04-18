import React from 'react'
import './MatchItem.css';

const MatchItem = ({mat}) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let utcDate = mat.utcDate;
    let localDate = new Date(utcDate);
    let day = localDate.getDate();
    let month = months[localDate.getMonth()];
    let hour = localDate.getHours();
    let min = localDate.getMinutes();

    
    return (
        <div className={`matchItem 
        ${mat.status === "POSTPONED" ? 'postponed' : ''}
        ${mat.status === "FINISHED" ? 'finished' : 'notFinished'}
        `}>
            <div className="matchItem__timedate">
                <h6>{day}-{month}</h6>
                <p>{hour}:{min} IST</p>
            </div>
            <p className={`${mat.score.winner === "AWAY_TEAM" ? 'faway_team' : mat.score.winner === "HOME_TEAM" ? 'fhome_team' : mat.score.winner === "DRAW" ? 'draw' : ''}`}
            >{mat.homeTeam.name}</p> 
            <p>{mat.score.fullTime.homeTeam === null ? '0' : mat.score.fullTime.homeTeam} - {mat.score.fullTime.awayTeam === null ? '0' : mat.score.fullTime.awayTeam}</p> 
            <p className={`${mat.score.winner === "AWAY_TEAM" ? 'saway_team' : mat.score.winner === "HOME_TEAM" ? 'shome_team' : mat.score.winner === "DRAW" ? 'draw' : ''}`}>{mat.awayTeam.name}</p>
        </div>
    )
}

export default MatchItem
