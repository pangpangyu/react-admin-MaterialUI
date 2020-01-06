import {
  drawerWidth,
  transition,
  // container
} from "./material-react.js";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    padding: "90px 15px 30px 15px",
    minHeight: "calc(100vh - 120px)"
  },
  container:{
    [theme.breakpoints.up("md")]: {
      marginLeft: `265px`
    },
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto"
  },
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
