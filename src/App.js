import React from 'react';
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


  return (
    <Main>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/admin" component={CreatePost} exact />
          <PrivateRoute path="/" component={AllPosts} />
          <Route path="/api/articles/:slug" component={SinglePost} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Main>
  )

}

export default App;
