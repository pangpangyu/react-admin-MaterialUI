import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Layout from './layout/layout';
import Login from './views/login';

import './assets/css/app.css';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Layout} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>, 
  document.getElementById('root')
);
