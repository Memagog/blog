import { Paper } from '@material-ui/core';
import React, { useContext,useEffect } from 'react';
import { Context } from '../../App';
import Avatar from '@material-ui/core/Avatar';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: "70px",
    height: "70px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    width: "100px",
    height: "100px",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    padding: "30px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    paddingLeft: "60px",
    paddingRight: "60px",
    marginLeft: "85px",
    backgroundColor: theme.palette.secondary.main,
  },
}));
const PostPage = () => {
  const classes = useStyles(); 
  const {state} = useContext(Context)
  useEffect(() => {    
      console.log(state.selectedPost)    
    
  }, [])
    return (
        <div>
                        
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <ImportContactsIcon className={classes.icon} />
                    </Avatar>                    
                    {state.selectedPost.map((item)=> 
                        <div>
                          <Typography  variant="h2">Title: {item.title}</Typography>
                          <Typography  variant="h3"></Typography>
                          <Typography  variant="h2">Description:</Typography>
                          <Typography  variant="h3">{item.description}</Typography>
                        </div> 
                    )}
                    
                                    
                   
                 
                </Paper>      
                </Container>
      
         
        </div>
    );
}

export default PostPage;
