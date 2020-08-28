import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from './style'
function Header() {
    const key = localStorage.getItem('token');
    return (
        <Navigation className="menu">
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/About" exact>About</NavLink>
            </li>
            {
                key && <li>
                    <NavLink to="/Admin" exact>Admin</NavLink>
                </li>
            }
            
        </Navigation>
    )
}

export default Header;