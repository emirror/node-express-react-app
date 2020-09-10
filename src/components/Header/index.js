import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navigation } from './style';
import { AppContext } from '../../App';


function Header(props) {
    
const { setToken } = React.useContext(AppContext);

    function Logout() {
        localStorage.removeItem('token');
        setToken(false);
    }

    return (
        <Navigation className="menu">
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/About" exact>About</NavLink>
            </li>
            {
                props.getToken && <li>
                    <NavLink to="/Admin" exact>Admin</NavLink>
                </li>
            }
            {
                props.getToken && <li>
                    <Link to="/login" exact onClick={Logout}>Logout</Link>
                </li>
            }

        </Navigation>
    )
}

export default Header;