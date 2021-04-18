import React from 'react'
import FootballImage from '../../../images/Football1.jpg'
import './Home.css';

const Home = () => {
    return (
        <div>
            <img className="image" src={FootballImage} alt="Image"/>
            {/* <p className="welcomeCont__content">
            Welcome to the <strong>
            Football Hub</strong>, get quick access to the Top 5 Leagues in Europe. Access of the teams, matches, current standings, top scorers, etc. 
            </p>
            <p>Leagues such as the Premier League, Serie A, La Liga, Bundesliga, Ligue 1 aka Farmer's League</p> */}
        </div>
    )
}

export default Home
