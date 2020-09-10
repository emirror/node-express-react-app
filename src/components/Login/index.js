import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../App'
import Axios from 'axios';
import { LoginStyle } from './style';

function Login() {
    const emailVal = useRef(null);
    const passVal = useRef(null);
    const history = useHistory();
    const error = 'email or password is wrong';
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
                        localStorage.setItem('token', res.data.user.token);
                        setToken(true);
                        return history.push("/");
                    }
                }
            )
            .catch(
                error => { alert(error) }
            );
    }



    return (
        <LoginStyle>
            <h1>Login to your Account</h1>
            <form>
                <input type="email" placeholder="type your email" defaultValue="" ref={emailVal} />
                <input type="password" placeholder="type your password" defaultValue="" ref={passVal} />
                <button type="submit" onClick={userLogin}>Sign In</button>
            </form>
            <span className="error"></span>
        </LoginStyle>

    )
}

export default Login;