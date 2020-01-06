import React from "react";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Poppers from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import styles from "../assets/header.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickNotification = event => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const logout = () => {
    setOpenProfile(null);
    window.sessionStorage.setItem('token','')
    window.location.href = '/'
  };
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  return (
    <div className={classes.header}>
      <div className={classes.main}>
        {/* header
        <Button type="button" color="primary" onClick={logout}>退出登录</Button> */}
      </div>
      <div className={classes.manager}>
        <IconButton onClick={handleClickNotification}>
          <Notifications/>
        </IconButton>
        <span className={classes.notifications}>5</span>
        <Poppers
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className={classes.NotificationPoppers}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu" className={classes.NotificationMenuList}>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      <a href="/">
                        通知消息通知消息通知消息通知消息通知消息通知消息通知消息通知消息
                      </a>
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      通知消息通知消息通知消息通知消息通知消息通知消息通知消息通知消息
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      通知消息通知消息通知消息通知消息通知消息通知消息通知消息通知消息
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      通知消息通知消息通知消息通知消息通知消息通知消息通知消息通知消息
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      通知消息通知消息通知消息通知消息通知消息通知消息通知消息通知消息
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      通知消息通知消息通知消息通知消息通知消息通知消息通知消息通知消息
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
      <div className={classes.person}>
        <IconButton onClick={handleClickProfile}>
          <Person/>
        </IconButton>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={classNames({ [classes.popperClose]: !openProfile }) + " " + classes.popperNav }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      个人信息
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      设置
                    </MenuItem>
                    <MenuItem
                      onClick={logout}
                      className={classes.dropdownItem}
                    >
                      退出登录
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
      <Hidden mdUp implementation="css" className={classes.minimenu}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerToggle}
        >
          <Menu />
        </IconButton>
      </Hidden>
    </div>
  )
}