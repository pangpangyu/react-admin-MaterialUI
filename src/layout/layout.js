import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from '../config/routes';
import Sidebar from "../components/sidebar.js";

import styles from '../assets/jss/layoutStyle.js'

const useStyles = makeStyles(styles);

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    })}
    <Redirect from="/admin" to="/admin/index" />
  </Switch>
);

export default function Layout({ ...rest }){
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Sidebar 
        routes={routes}
        color={"red"}/>
      <div className={classes.container}>{switchRoutes}</div>
    </div>
  )
}
