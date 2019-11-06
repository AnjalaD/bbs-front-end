import React from 'react';
import logo from './logo.svg';
import bgImage from "assets/img/sidebar-2.jpg";

import './App.css';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from 'components/Sidebar/Sidebar';
import Navbar from 'components/Navbars/Navbar';
import dashboardRoutes from 'routes';

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const useStyles = makeStyles(styles);

const createRoute = (user, routes) => (
  routes.map((route, key) => {
    if (user === route.user) {
      return (
        <Route path={route.path} component={route.component} exact />
      )
    }
  }));

function App() {
  const classes = useStyles();

  const mainPanel = React.createRef();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.log('drower toggle', mobileOpen);
    setMobileOpen(!mobileOpen);
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  // React.useEffect(() => {
  //   window.addEventListener("resize", resizeFunction);

  //   return function cleanup() {
  //     window.removeEventListener("resize", resizeFunction);
  //   };
  // }, [mainPanel]);

  const isLoggedIn = () => true;

  const guestView = (
    <div className={classes.Wrapper}>
      <Navbar routes={dashboardRoutes} />

      <div className={classes.content}>
        <div className={classes.container}>
          <Switch>
            {createRoute('guest', dashboardRoutes)}
          </Switch>
        </div>
      </div>
    </div>
  );

  const userView = (
    <div className={classes.wrapper} styles={{ overflow: false }}>
      <Sidebar
        routes={dashboardRoutes}
        logoText="BBS"
        logo={logo}
        open={mobileOpen}
        image={bgImage}
        handleDrowerToggle={handleDrawerToggle}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={dashboardRoutes}
          handleDrawerToggle={handleDrawerToggle}
        />

        <div className={classes.content}>
          <div className={classes.container}>
            <Switch>
              {createRoute('user', dashboardRoutes)}
              <Redirect from="/" to="/requests" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );

  console.log(dashboardRoutes);
  return (
    <BrowserRouter>
      {isLoggedIn() ? userView : guestView}
    </BrowserRouter >
  );
}

export default App;
