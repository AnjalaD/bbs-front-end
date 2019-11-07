import React from "react";
import { useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { logout } from "actions";

const useStyles = makeStyles(styles);

export default function UserNavbarLinks() {
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <div>
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          className={classes.buttonLink}
          onClick={e => dispatch(logout())}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
