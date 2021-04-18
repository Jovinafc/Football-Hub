import React from 'react'
import './StandItem.css';

const StandItem = (props) => {
    return (
        // <tr className="standItem" key={props.standing.position}>
        //     <td className="standItemRank">{props.standing.position}</td>
        //     <td className="standItemName">{props.standing.team.name}</td>
        //     <td className="standItemName">{props.standing.points}</td>            
        // </tr>

        <div className="standItem" key={props.standing.position}>
        <div className="standItemRank">
            {props.standing.position}
        </div>
        <div className="standItemName">
            <img src={props.standing.team.crestUrl} alt="Team Crest"/>
            {props.standing.team.name}
        </div>
        <div className="standItemPlayed">{props.standing.playedGames}</div>
        <div className="standItemWon">{props.standing.won}</div>
        <div className="standItemDraw">{props.standing.draw}</div>
        <div className="standItemLoss">{props.standing.lost}</div>
        <div className="standItemGF">{props.standing.goalsFor}</div>
        <div className="standItemGA">{props.standing.goalsAgainst}</div>
        <div className="standItemGD">{props.standing.goalDifference}</div>
        <div className="standItemPoints">{props.standing.points}</div>
        </div>
        
    )
}

export default StandItem
