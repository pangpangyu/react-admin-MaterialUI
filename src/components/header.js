import React from "react";
import Button from "../components/button.js";

import styles from "../assets/header.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function Header() {
  const classes = useStyles();
  function logout(){
    window.sessionStorage.setItem('token','')
    window.location.href = '/'
  }
  return (
    <div className={classes.header}>
      header
      <Button type="button" color="primary" onClick={logout}>退出登录</Button>
    </div>
  )
}