import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar(props) {
    return (
      
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <ul className="nav navbar-nav">
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="/"  activeClassName = "active" exact = {true}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/workshops" exact = {true} activeClassName = "active">Workshops</NavLink>
                    </li>
                </ul>
            </nav>
       
    );
}

export default Navbar;