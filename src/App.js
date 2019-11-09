import React from 'react';
import logo from './logo.svg';
import bgImage from "assets/img/sidebar-2.jpg";
import './App.css';

import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from 'components/Sidebar/Sidebar';
import Navbar from 'components/Navbars/Navbar';
import { donorRoutes, viewerRoutes, guestRoutes } from 'routes';

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import { Hidden } from '@material-ui/core';
import LoadingModal from 'components/LoadingModal/LoadingModal';
import AdminLogin from 'views/Auth/AdminLogin';
import { adminRoutes } from 'routes';

const useStyles = makeStyles(styles);

function App() {
  const createRoute = (routes) => (
    routes.map((route, key) => (
      <Route path={route.path} component={route.component} key={key} exact />
    ))
  );

  const { isLoggedIn, user } = useSelector(state => state.currentUser);
  const admin = useSelector(state => state.admin);
  const isLoading = useSelector(state => state.isLoading);

  const classes = useStyles();

  const mainPanel = React.createRef();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.log('drower toggle', mobileOpen);
    setMobileOpen(!mobileOpen);
  };

  const guestView = (
    <div className={classes.Wrapper}>
      <Hidden mdUp>
        <Sidebar
          routes={guestRoutes}
          logoText="BBS"
          logo={logo}
          open={mobileOpen}
          image={bgImage}
          handleDrawerToggle={handleDrawerToggle}
        />

      </Hidden>
      <Navbar
        routes={guestRoutes}
        handleDrawerToggle={handleDrawerToggle}
      />

      <div className={classes.content}>
        <div className={classes.container}>
          <Switch>
            <Route path="/admin-login" component={AdminLogin} />
            {createRoute(guestRoutes)}
            <Redirect from="/" to="/" />
          </Switch>
        </div>
      </div>
    </div>
  );

  const userView = (userRoutes) => (
    <div className={classes.wrapper} styles={{ overflow: false }}>
      <Sidebar
        routes={userRoutes}
        logoText="BBS"
        logo={logo}
        open={mobileOpen}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
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
              <Redirect from="/" to="/sent-requests" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );

  const display = () => {
    if (admin === true) {
      return userView(adminRoutes);
    } else if (isLoggedIn === true && user.account_status === 1) {
      return userView(donorRoutes);
    } else if (isLoggedIn === true && user.account_status === 0) {
      return userView(viewerRoutes);
    } else {
      return guestView;
    }
  }

  return (
    <div>
      <LoadingModal
        isLoading={isLoading}
      />
      <BrowserRouter>
        {display()}
      </BrowserRouter >
    </div>
  );
}

export default App;
