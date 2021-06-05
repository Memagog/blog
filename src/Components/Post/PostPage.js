import React, { useContext,useEffect } from 'react';
import { Context } from '../../App';

const PostPage = () => {
  
  const {state} = useContext(Context)
  useEffect(() => {
    if(state == undefined)
      console.log(state)
    
    
  }, [])
    return (
        <div>
          {/* {state.selectedPost.map((item)=>
          <li>{item}</li>
          )} */}
        </div>
    );
}

export default PostPage;
