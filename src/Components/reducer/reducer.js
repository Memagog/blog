export const initialState = {    
    posts:[
    { id: 4,name: "Ivan", description: "tutututruururu"},
    { id: 3,name: "Peter", description: "tutututruururu"},
    { id: 2,name: "Coin", description: "tutututruururu"},
    { id: 1,name: "Lambuga", description: "tutututruururu"},
    ],
    selectedPost: [],
}
export default function reducer(state, action) {
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
        case "SELECTED_POST":            
            state.selectedPost = state.posts.filter((item)=>
                item.id == action.payload                              
            ) 
            console.log('selectedPost :>> ',  state.selectedPost);
           
        default:
            break;
    }
}

