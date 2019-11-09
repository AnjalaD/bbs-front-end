import React from "react";
import { Link } from "react-router-dom";
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const linkStyles = {
  textDecoration: 'none',
  margin: '10px'
}

export default function GuestNavbarLinks() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.manager}>
        <Link to="/" style={linkStyles}>
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
        <Link to="/register" style={linkStyles}>
          <Button
            color="primary"
            round
          >
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}
