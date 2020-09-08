import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props) {
    const key = localStorage.getItem('token');
    return key ? <Route {...props} /> : <Redirect to="/login" />;
}

export default PrivateRoute;