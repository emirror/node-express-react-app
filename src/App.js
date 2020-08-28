import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllPosts from './components/AllPosts';
import SinglePost from './components/SinglePost';
import NotFound from './components/NotFound';
import Header from './components/Header';
import { Main } from './style';

function App() {
  return (
    <Main>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <AllPosts />
          </Route>
          <Route path="/blog/single-post" component={SinglePost} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Main>
  )

}

export default App;
