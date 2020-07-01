import React from 'react';

const Post = ({ post }) => {
    return(
        <div className="card mt-1">
            <div className="card-body p-3">
                <div className="card-title">
                    { post.title }
                </div>
            </div>
        </div>
    )
}

export default Post