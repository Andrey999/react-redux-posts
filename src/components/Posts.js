import React from 'react';
import Post from './Post';
import { connect } from 'react-redux'

const Posts = ({ posts }) => {
    if(!posts.length) {
        return <div>Постов нет</div>
    }
    return posts.map((post) => {
        return <div>
            <Post key={post} post={post} />
        </div>
    })
}

const mapStateToProps = (state) => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps)(Posts)