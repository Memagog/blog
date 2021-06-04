import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { makeStyles } from '@material-ui/core/styles';
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';
  import IconButton from '@material-ui/core/IconButton';
  import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: "#e0f7fa",
      textDecoration: "none",
    }
  }));
const Navbar = () => {
    const classes = useStyles();
    return (            
        <div className={classes.root}>
            <Router>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>         
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}><Typography variant="h6" className={classes.title}>Home</Typography></Link>
                    </Typography>  
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/about" className={classes.link}><Typography variant="h6" className={classes.title}>About</Typography></Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/create" className={classes.link}><Typography variant="h6" className={classes.title}>Create</Typography></Link>
                    </Typography>                      
                    
                    </Toolbar>
                </AppBar>    
    
                <div>           
                    <Switch>
                    <Route path="/about">
                        {/* <About /> */}
                    </Route>
                    <Route path="/users">
                        {/* <Users /> */}
                    </Route>
                    <Route path="/">
                        {/* <Home /> */}
                    </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default Navbar;
