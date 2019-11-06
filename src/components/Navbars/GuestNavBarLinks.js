import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function GuestNavbarLinks() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          className={classes.buttonLink}
        >
          <Link className={classes.linkText} href={"/"}>Login</Link>
        </Button>
      </div>
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          className={classes.buttonLink}
        >
          <Link className={classes.linkText} href={"/register"}>Register</Link>
        </Button>
      </div>
    </div>
  );
}
