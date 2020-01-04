import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layout/layout.js";
import Login from "./views/login.js";
import './assets/css/app.css';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Layout} />
      <Route path="/login" component={Login} />
      <Redirect from="/" to="/admin" />
    </Switch>
  </Router>, document.getElementById('root'))

