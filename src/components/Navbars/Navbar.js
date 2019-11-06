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
import UserNavbarLinks from "components/Navbars/UserNavbarLinks";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
import GuestNavbarLinks from "components/Navbars/GuestNavBarLinks";

const useStyles = makeStyles(styles);

export default function Header(props) {
  console.log('isGuest', props.isGuest);

  const classes = useStyles();

  function makeBrand() {
    var name;
    props.routes.map(prop => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = prop.name;
      }
      return null;
    });
    return name;
  }
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        {/* Here we create navbar brand, based on route name */}
        <div className={classes.flex}>
          {!props.isGuest ?
            <Button color="transparent" href="#" className={classes.title}>
              {makeBrand()}
            </Button>
            : null
          }
        </div>
        <Hidden smDown implementation="css">
          {props.isGuest ? <GuestNavbarLinks /> : <UserNavbarLinks />}
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
  isGuest: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};
