import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function GuestNavbarLinks() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.manager}>
        <Link to="/">
          <Button
            color={window.innerWidth > 959 ? "transparent" : "white"}
            className={classes.buttonLink}
          >
            Login
          </Button>
        </Link>
      </div>
      <div className={classes.manager}>
        <Link className={classes.linkText} to="/register">
          <Button
            color={window.innerWidth > 959 ? "transparent" : "white"}
            className={classes.buttonLink}
          >
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}
