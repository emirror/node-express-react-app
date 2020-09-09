import React, { useRef } from 'react';
import {  useHistory  } from 'react-router-dom';
import { AppContext } from '../../App'
import Axios from 'axios';
function Login() {
    const emailVal = useRef(null);
    const passVal = useRef(null);
    const history = useHistory();
    const { setToken } = React.useContext(AppContext);
    function userLogin(e) {
        e.preventDefault();
        Axios
            .post(`http://localhost:3000/api/users/login`,
                {
                    "user": {
                        "email": emailVal.current.value,
                        "password": passVal.current.value
                    }
                } 
            )
            .then(     
                res => {
                    if (res.status == 200) {
                        setToken(res.data.user.token);
                        return history.push("/");
                    }
                }
            )
            .catch(
                error => console.log(error)
            );
    }



    return (
        <div>
            <h1>Login to your Account</h1>
            <form>
                <input type="email" placeholder="type your email" defaultValue="" ref={emailVal} />
                <input type="password" placeholder="type your password" defaultValue="" ref={passVal} />
                <button type="submit" onClick={userLogin}>Sign In</button>
            </form>
        </div>

    )
}

export default Login;