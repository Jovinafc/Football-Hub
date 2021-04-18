import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const NavLink = ({closed}) => {
    return (
        <Fragment>
            <div onClick={closed}><Link to={`/competion/PL`}>Premier League</Link></div>
                    <div onClick={closed}><Link to={`/competion/PD`}>La Liga</Link></div>
                    <div onClick={closed}><Link to={`/competion/SA`}>Serie A</Link></div>
                    <div onClick={closed}><Link to={`/competion/BL1`}>Bundesliga</Link></div>
                    <div onClick={closed}><Link to={`/competion/FL1`}>Ligue 1</Link></div>
        </Fragment>
    )
}

export default NavLink
