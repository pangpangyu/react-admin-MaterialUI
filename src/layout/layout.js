import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../config/routes.js";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/header.js";
import Sidebar from "../components/sidebar.js";

import styles from "../assets/layout.js";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/index" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Layout({ ...rest }) {
  const classes = useStyles();
  const [color] = React.useState("blue");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  if(window.sessionStorage.getItem('token')){
    return (
      <div className={classes.wrapper}>
        <Header />
        <div className={classes.content}>
          <Sidebar
            routes={routes}
            logoText={"Creative Tim"}
            // logo={logo}
            // image={image}
            handleDrawerToggle={handleDrawerToggle}
            open={mobileOpen}
            color={color}
            {...rest}
          />
          <div className={classes.container}>{switchRoutes}</div>
        </div>
      </div>
    );
  }else{
    return (<Redirect to="/login" />)
  }
}
