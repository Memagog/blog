import { TextField } from '@material-ui/core';
import React, { useContext} from 'react';
import { useForm } from "react-hook-form";
import {Context} from '../../App'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Paper from '@material-ui/core/Paper'


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
const CreatePost = () => {
    const classes = useStyles(); 
    const {state, dispatch} = useContext(Context)
    const { register, handleSubmit,setValue} = useForm({ defaultValues: {},shouldFocusError: true,});

    const addPost = (data, e ) => {        
        dispatch({type:'ADD_POST', payload: data});
        console.log(`object`, state, e )         
        setValue("title","")  
        setValue("description","")     
    }
    
    return (
        <div>          
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <PostAddIcon className={classes.icon} />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                     Create your Post
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit((data, e) => addPost(data, e))}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="Title"                       
                        fullWidth                    
                        autoFocus             
                        {...register("title")}
                    />
                     <TextField
                        id="outlined"
                        label="Description"
                        multiline
                        fullWidth 
                        rows={8}                       
                        // defaultValue="Текст вашего поста"
                        variant="outlined"
                        {...register("description")}
                        />                 
                    <Button
                        type="submit"                       
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >         
                       Create
                    </Button>   
                   
                    </form>
                </Paper>      
                </Container>
        </div>
    );
}

export default CreatePost;
