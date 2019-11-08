import React from "react";
import { Link } from "react-router-dom";
// import classNames from "classnames";
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
            color="primary"
            className={classes.buttonLink}
            round
          >
            Login
          </Button>
        </Link>
      </div>
      <div className={classes.manager}>
        <Link className={classes.linkText} to="/register">
          <Button
            color="primary"
            className={classes.buttonLink}
            round
          >
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}
