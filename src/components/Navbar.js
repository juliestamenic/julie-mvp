import React from 'react';
import { NavLink } from 'react-router-dom';
import"./Navbar.css"


function Navbar() {

 

    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/" exact activeClassName="selected" className="navLink" >Home</NavLink></li>
                <li><NavLink to="/plant-sitter" activeClassName="selected" className="navLink">I am a Plant Sitter</NavLink></li>
                <li><NavLink to="/plant-owner" activeClassName="selected" className="navLink">I am a Plant Owner</NavLink></li>
                {/* <li><NavLink to="/dashboard-users" activeClassName="selected">Dashboard Users</NavLink></li> */}
            </ul>
        </nav>
    );
}

export default Navbar;