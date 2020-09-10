import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllPosts from './components/AllPosts';
import SinglePost from './components/SinglePost';
import CreatePost from './components/CreatePost';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Header from './components/Header';
import { Main } from './style';

function App() {

  const [token, tokenState] = useState(false);
  function setToken(token) {
    return tokenState(token);
  }

  return (
    <AppContext.Provider value={{ setToken }}>
      <Main>
        <BrowserRouter>
          <Header getToken={token} />
          <Switch>
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/admin" component={CreatePost} exact />
            <PrivateRoute path="/" component={AllPosts} exact />
            <Route path="/api/articles/:slug" component={SinglePost} />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </Main>
    </AppContext.Provider>
  )

}

export default App;
export const AppContext = React.createContext(null);

