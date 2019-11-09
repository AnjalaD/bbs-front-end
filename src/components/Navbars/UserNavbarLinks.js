import React from "react";
import { useDispatch, useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { logout } from "actions";
import { TESTING } from "config/config";
import { USER_LOGOUT } from "config/api";
import { DONOR_LOGOUT } from "config/api";
import { setHeaders } from "util";

const useStyles = makeStyles(styles);

export default function UserNavbarLinks() {
  const dispatch = useDispatch();
  const { user, token } = useSelector(state => state.currentUser.token);

  const logoutHandler = () => {
    if (TESTING) {
      dispatch(logout());
    } else {
      const link = [USER_LOGOUT, DONOR_LOGOUT];

      const options = {
        method: 'POST',
        headers: setHeaders(token)
      }

      fetch(link[user.account_status], options)
        .then(res => res.json())
        .then(res => {
          if (res) {

          } else {
            console.log("Logout failed!");
          }
        })
        .catch(err => console.log("logout error", err))
    }
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
