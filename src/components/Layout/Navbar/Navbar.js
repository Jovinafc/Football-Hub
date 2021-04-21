import React, { useState } from 'react'
import './Navbar.css';
import NavLink from './NavLink';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => { 
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => {
        setOpen(!open);
    }

    const sideDrawerClosed = () => {
        setOpen(false);
    }

    console.log(open);
    return (
        <nav>
            <div className="navHeader flex p-4 justify-between">
                <h1 className="navHeader__head">FootballHub</h1>
                <div className="navHeader__content">
                    <NavLink />
                </div>
                <div onClick={() => toggleSidebar()} className="navHeader__toggle">
                    <div className="tog">a</div>
                    <div className="tog">a</div>
                    <div className="tog">a</div>
                </div>
                <Sidebar closed={sideDrawerClosed} open={open} />
            </div>
        </nav>
    )
}

export default Navbar
