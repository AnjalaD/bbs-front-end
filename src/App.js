import React from 'react';
import logo from './logo.svg';
import bgImage from "assets/img/sidebar-2.jpg";
import './App.css';

import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from 'components/Sidebar/Sidebar';
import Navbar from 'components/Navbars/Navbar';
import { userRoutes, guestRoutes } from 'routes';

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const useStyles = makeStyles(styles);

function App() {
  const createRoute = (routes) => (
    routes.map((route, key) => (
      <Route path={route.path} component={route.component} key={key} exact />
    ))
  );

  const isLoggedIn = useSelector(state => state.currentUser.isLoggedIn);
  console.log('isloggedIn', isLoggedIn);

  const classes = useStyles();

  const mainPanel = React.createRef();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.log('drower toggle', mobileOpen);
    setMobileOpen(!mobileOpen);
  };

  const guestView = (
    <div className={classes.Wrapper}>
      <Navbar
        routes={guestRoutes}
        handleDrawerToggle={handleDrawerToggle}
      />

      <div className={classes.content}>
        <div className={classes.container}>
          <Switch>
            {createRoute(guestRoutes)}
            <Redirect from="/" to="/" />
          </Switch>
        </div>
      </div>
    </div>
  );

  const userView = (
    <div className={classes.wrapper} styles={{ overflow: false }}>
      <Sidebar
        routes={userRoutes}
        logoText="BBS"
        logo={logo}
        open={mobileOpen}
        image={bgImage}
        handleDrowerToggle={handleDrawerToggle}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={userRoutes}
          handleDrawerToggle={handleDrawerToggle}
        />

        <div className={classes.content}>
          <div className={classes.container}>
            <Switch>
              {createRoute(userRoutes)}
              <Redirect from="/" to="/requests" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      {isLoggedIn ? userView : guestView}
    </BrowserRouter >
  );
}

export default App;
