import React from "react";
import { useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { logout } from "actions";
import { set_loading } from "actions";
import { end_loading } from "actions";

const useStyles = makeStyles(styles);

export default function UserNavbarLinks() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(set_loading('Logging Out...'));
    setTimeout(() => {
      dispatch(logout());
      dispatch(end_loading());
    }
      , 1000);
  }

  const classes = useStyles();
  return (
    <div>
      <div className={classes.manager}>
        <Button
          round
          color="primary"
          className={classes.buttonLink}
          onClick={logoutHandler}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
