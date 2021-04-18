import React from 'react'
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Teams from '../Layout/Teams/Teams';
import './Layout.css';
import Home from './Home/Home';

const Layout = () => {
    return (
        <div className="layoutContainer">
            <Navbar />
            <Switch>
            <Route exact path="/" component={Home}/>   
            <Route path="/competion/:league_id" component={Main}/>    
            </Switch>
            {/* <Footer /> */}
        </div>
)
}

export default Layout
