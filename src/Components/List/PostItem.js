import React from 'react';

const PostItem = ({post}) => {
    return (
        <div>
            {post.name}/{post.description}
        </div>
    );
}

export default PostItem;
