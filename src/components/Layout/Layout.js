import React from 'react'
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { Route } from 'react-router-dom';
import Teams from '../Layout/Teams/Teams';
import './Layout.css';

const Layout = () => {
    return (
        <div className="layoutContainer">
            <Navbar />
            <Route path="/competion/:league_id" component={Main}/>
            {/* <Footer /> */}
        </div>
)
}

export default Layout
