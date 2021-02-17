import React from 'react';
import { NavLink } from 'react-router-dom';
import"./Navbar.css"


function Navbar() {

 

    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/plant-owner" activeClassName="selected" className="navLink">I am a Plant Owner</NavLink></li>
                <li><NavLink to="/plant-sitter" activeClassName="selected" className="navLink">I am a Plant Sitter</NavLink></li>
                <li><NavLink to="/" exact activeClassName="selected" className="navLink" >About</NavLink></li>
                {/* <li><NavLink to="/test" activeClassName="selected">test</NavLink></li> */}
            </ul>
        </nav>
    );
}

export default Navbar;