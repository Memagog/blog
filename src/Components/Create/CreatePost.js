import React, { useReducer } from 'react';
import { useForm } from "react-hook-form";
const initialState = {    
    posts:[
    { id: 4,name: "Ivan", description: "tutututruururu"},
    { id: 3,name: "Peter", description: "tutututruururu"},
    { id: 2,name: "Coin", description: "tutututruururu"},
    { id: 1,name: "Lambuga", description: "tutututruururu"},
    ]  
}
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_POST":            
            return {   
                ...state,             
                posts: [                 
                  { 
                    id: state.posts.length + 1,
                    name: action.payload.name, 
                    description: action.payload.description,                   
                  },
                  ...state.posts,                
                ]
            }  
        default:
            break;
    }
}
const CreatePost = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { register, handleSubmit } = useForm();
    const addPost = (data) => {
        dispatch({type:'ADD_POST', payload: data});
        console.log(`object`, state)
    }
    return (
        <div>          
            {state.posts.map((item)=> 
                <li key={item.id}>{item.id} / {item.name} / {item.description}</li>
            )}
           <form onSubmit={handleSubmit(addPost)}>
            <input {...register("name")} />
            <input {...register("description")}/>              
         
            <input type="submit" />
            </form>

        </div>
    );
}

export default CreatePost;
