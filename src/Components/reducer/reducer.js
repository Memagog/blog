export const initialState = {    
    posts:[
    { id: 4,title: "Post4", description: "description4"},
    { id: 3,title: "Peter3", description: "description3"},
    { id: 2,title: "Coin2", description: "description2"},
    { id: 1,title: "Post1", description: "description1"},
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
                    title: action.payload.title, 
                    description: action.payload.description,                   
                  },
                  ...state.posts,                
                ]
            }  

        case "SELECTED_POST":
            return{                        
                ...state,
                selectedPost: state.posts.filter((item) => item.id == action.payload)            
            }            
           
           
        default:
            break;
    }
}

