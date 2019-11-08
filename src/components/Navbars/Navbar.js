import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import GuestNavbarLinks from "components/Navbars/GuestNavBarLinks";
import UserNavbarLinks from "components/Navbars/UserNavbarLinks";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
import { useSelector } from "react-redux";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();

  const isLoggedIn = useSelector(state => state.currentUser.isLoggedIn);

  // function makeBrand() {
  //   var name;
  //   props.routes.map(prop => {
  //     if (window.location.href.indexOf(prop.path) !== -1) {
  //       name = prop.name;
  //     }
  //     return name = "BBS";
  //   });
  //   return name;
  // }
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  // console.log(window.location.href);
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        {/* Here we create navbar brand, based on route name */}
        <div className={classes.flex}>
          <h1 className={classes.title}>
            Welcome!
          </h1>
        </div>
        <Hidden smDown implementation="css">
          {!isLoggedIn ? <GuestNavbarLinks /> : <UserNavbarLinks />}
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};
