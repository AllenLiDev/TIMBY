import React from 'react';
import './App.css';

import { Link, Route, Switch } from 'react-router-dom';
import Search from './Search/Search';
import Listings from './Listings/Listings';
import Profile from './Profile/Profile';
import Bookings from './Bookings/Bookings';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StoreIcon from '@material-ui/icons/Store';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    textDecoration: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  transparent: {
    backgroundColor: 'transparent',
    color: '#000',
    boxShadow: 'none',
  }
}));


export default function App() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const [title, setTitle] = React.useState('TIMBY');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <AppBar position="static">
          <Typography variant="h6" align="center" className={classes.title}>
            Welcome, userID: {localStorage.getItem('userID')}
            <img
            src="https://source.unsplash.com/random"
            alt=""
            className="user-pic"
          />
          </Typography>
        </AppBar>
      <List>
        <Link to="/profile" className={classes.link} >
          <ListItem button key='profile' onClick={() => { setTitle('Profile') }}>
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItem>
        </Link>
        <Link to="/search" className={classes.link} >
          <ListItem button key='search' onClick={() => { setTitle('Search') }}>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary='Search' />
          </ListItem>
        </Link>
        <Link to="/bookings" className={classes.link} >
          <ListItem button key='bookings' onClick={() => { setTitle('Bookings') }}>
            <ListItemIcon><BookmarkIcon /></ListItemIcon>
            <ListItemText primary='Bookings' />
          </ListItem>
        </Link>
        <Link to="/listings" className={classes.link} >
          <ListItem button key='listings' onClick={() => { setTitle('Listings') }}>
            <ListItemIcon><StoreIcon /></ListItemIcon>
            <ListItemText primary='Listings' />
          </ListItem>
        </Link>
        <Link to="/settings" className={classes.link} >
          <ListItem button key='settings' onClick={() => { setTitle('Settings') }}>
            <ListItemIcon><StoreIcon /></ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <main>
      <AppBar position="static" className={classes.transparent}>
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
          <Drawer open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <IconButton className={classes.menuButton}><PersonIcon /></IconButton>
          <IconButton className={classes.menuButton}><NotificationsIcon /></IconButton>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/listings" component={Listings} />
        <Route path="/profile" component={Profile} />
        <Route path="/" exact component={Search} />
        {/* <Route component={ErrorComponent} /> */}
      </Switch>
    </main>
  );
};
