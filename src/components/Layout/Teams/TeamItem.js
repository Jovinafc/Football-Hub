import React from 'react'
import './TeamItem.css';

const TeamItem = (props) => {
    return (
        <div className="teamItem">
            <img src={props.team.crestUrl} alt={props.team.crestUrl}/>
            <h4 className="teamName">{props.team.name}</h4>
        </div>
    )
}

export default TeamItem
