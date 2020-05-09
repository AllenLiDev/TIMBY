import React, { Component } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Search from './Search';
import Bookings from './Bookings';
import Listings from './Listings';
import Profile from './Profile';


export default function BottomNav() {
  const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/bookings">
            <Bookings />
          </Route>
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          {/* <Route path="/products" component={Products} /> */}
          { /* you can specify that a route must match specifically with the exact attribute */ }
          {/* <Route path="/" exact component={Home} /> */}
        </Switch>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
          >
          <BottomNavigationAction component={Link} to="/search" label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction component={Link} to="/bookings" label="Bookings" icon={<ListIcon />} />
          <BottomNavigationAction component={Link} to="/listings" label="Listings" icon={<ListIcon />} />
          <BottomNavigationAction component={Link} to="/profile" label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Router>
    </>
  );
}