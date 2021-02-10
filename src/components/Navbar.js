import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/" exact activeClassName="selected">Home</NavLink></li>
                <li><NavLink to="/plant-sitter" activeClassName="selected">I am a Plant Sitter</NavLink></li>
                <li><NavLink to="/plant-owner" activeClassName="selected">I am a Plant Owner</NavLink></li>
                {/* <li><NavLink to="/dashboard-users" activeClassName="selected">Dashboard Users</NavLink></li> */}
            </ul>
        </nav>
    );
}

export default Navbar;