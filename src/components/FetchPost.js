import React from 'react';
import { createFetchPost } from '../redux/asyncActions'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Loader } from './Loader'

const FetchPost = () => {
    const { fetchPost, loading } = useSelector(state => ({
        fetchPost: state.fetchPosts.fetchedPost,
        loading: state.fetchPosts.loading
    }), shallowEqual)

    const dispatch = useDispatch()

    if(loading === 'pending') {
        return <Loader />
    }

    if(!fetchPost.length) {
        return <button className="btn btn-primary" onClick={() => dispatch(createFetchPost())}>Загрузить</button>
    }

    const postsFetch = fetchPost.map((fetchPost) => {
        return <li key={fetchPost.id} >
                    <h2>{fetchPost.title}</h2>
                    { fetchPost.body }
                </li>
            
    })
        return(
            <ul>
                { postsFetch }
            </ul>
        )
}

// const mapStateToProps = (state) => ({  // для классовых компонент
//     fetchPost: state.posts.fetchPosts
// })

// const mapDispatchToProps = (dispatch) => ({
//    createFetchPost: () => dispatch(createFetchPost())
// })

export default FetchPost
// export default connect(null, mapDispatchToProps)(FetchPost)