import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Layout from 'Layout/Layout';

import Home from 'pages/Home';
import Badges from 'pages/Badges';
import BadgeNew from 'pages/BadgeNew';
import NotFound from 'pages/NotFound'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/badges" component={ Badges } />
          <Route exact path="/badges/new" component={ BadgeNew } />
          <Route component={ NotFound } />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App