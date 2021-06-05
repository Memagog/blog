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
  import GitHubIcon from '@material-ui/icons/GitHub';
import CreatePost from './Create/CreatePost';
import PostList from './List/PostList';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import PostPage from './Post/PostPage';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(0),
    },
    menuButton1: {
        marginRight: theme.spacing(0),
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
                        <ImportContactsIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    <Link to="/" className={classes.link}><Typography variant="h6" className={classes.title}>MyBlog</Typography></Link>
                    </Typography>         
                    
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/list" className={classes.link}><Typography variant="h6" className={classes.title}>AllPosts</Typography></Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/create" className={classes.link}><Typography variant="h6" className={classes.title}>Create</Typography></Link>
                    </Typography> 

                                
                    <IconButton edge="start" className={classes.menuButton1} color="inherit" aria-label="menu">
                        <GitHubIcon/>
                    </IconButton>
                    <Typography variant="h6">                       
                        <a href="https://github.com/Memagog/blog" target='_blank' className={classes.link}><Typography variant="h6" className={classes.title}>Github</Typography></a>
                    </Typography>
                    </Toolbar>
                </AppBar>    
    
                <div>           
                    <Switch>
                    <Route path="/list">
                     <PostList/>  
                    </Route>
                    <Route path="/post">
                     <PostPage/>
                    </Route>
                    <Route path="/">
                    <CreatePost/>
                    </Route>
                    
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default Navbar;
