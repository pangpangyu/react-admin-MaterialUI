import React from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/sidebarStyle.js";

import { NavLink } from "react-router-dom";

import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(styles);

export default function Sidebar(props){
  const classes = useStyles();
  const { routes, color } = props;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }
  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}></div>
      { routes.map((route,key) => {
          var activePro = " ";
          var listItemClasses;
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(route.path)
          });
          const whiteFontClasses = classNames({
            [" " + classes.whiteFont]: activeRoute(route.path)
          });
          if(route.child && route.child.length > 0){
            return (
              <div key={key}>
                <ListItem button onClick={handleClick}>
                  <ListItemIcon className={classes.icon}>
                    <InboxIcon/>
                  </ListItemIcon>
                  <ListItemText primary={route.name} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  { route.child.map((r,i) => {
                    return (
                      <NavLink 
                      to={r.path}
                      className={activePro + classes.item}
                      activeClassName="active"
                      key={'son_' + key + "_" + i}>
                        <ListItem button className={classes.sonnav}>
                          <ListItemText primary={r.name} />
                        </ListItem>
                      </NavLink>
                      // <List component="div" disablePadding>
                      //   <ListItem button className={classes.sonnav}>
                      //     <ListItemText primary={r.name} />
                      //   </ListItem>
                      // </List>
                    )
                  }) }
                </Collapse>
              </div>
            )
          }else{
            return (
              <NavLink 
                to={route.path}
                className={activePro + classes.listItemClasses}
                activeClassName="active"
                key={key}>
                <ListItem button>
                  <ListItemIcon className={classes.icon}>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary={route.name} />
                </ListItem>
              </NavLink>
            )
          }
        }) }
    </div>
  )
}

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.string,
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
};
