import React from 'react'
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { Route, Switch } from 'react-router-dom';
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
        </div>
)
}

export default Layout
