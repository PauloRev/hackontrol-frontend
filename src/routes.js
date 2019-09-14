import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './App'
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} render={props => (
          <Layout><Home /></Layout>
        )} />
      </Switch>
    </BrowserRouter>
  );
}
