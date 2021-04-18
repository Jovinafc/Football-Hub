import React from 'react'
import './ScoreItem.css';

const ScoreItem = ({score}) => {
    return (
        <div className="scoreItem">
            <p>{score.player.name}</p>
            <p>{score.player.position}</p>
            <p>{score.team.name}</p>
            <p>{score.numberOfGoals}</p> 
        </div>
    )
}

export default ScoreItem
