import { Grid, makeStyles, Typography } from '@material-ui/core';
import React,{useContext} from 'react';
import { Context } from '../../App';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection: "column",
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        margin: "10px",
        padding: "10px",
      },
      title:{
          display: 'flex',
      }, 
          
  }));
const PostList = () => {
    const classes = useStyles();
    const {state,dispatch} = useContext(Context)
    let history = useHistory();

    function handleClick(data) {
        history.push(`/post/${data}`);
        dispatch({type:"SELECTED_POST", payload: data})
    }

    return (      
        <div className={classes.root}>  

          <Grid container spacing={3}>
            <Grid item xs={4}>            
            </Grid>

            <Grid item xs={4}>
            {state.posts.map((post) => (
            <Card key={post.id} onClick={()=>handleClick(post.id)} className={classes.root}>
                <CardActionArea>                    
                    <CardContent className={classes.cont}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Read
                    </Button>                   
                </CardActions>
            </Card>
          ))}          
            </Grid>

            <Grid item xs={4}>            
            </Grid>
            
         </Grid>         
        </div>
    );
}

export default PostList;
