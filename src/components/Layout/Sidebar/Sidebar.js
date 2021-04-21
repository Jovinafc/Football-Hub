import React from 'react'
import './Sidebar.css';
import NavLink from '../Navbar/NavLink';

const Sidebar = ({open, toggle, closed}) => {
    
    return (
        <div className={`sidebar ${open ? "active" : ""}`}>
            <div className="close" onClick={closed} >Close</div>
            Sidebar Content
            <NavLink closed={closed}/>
        </div>
    )
}

export default Sidebar
