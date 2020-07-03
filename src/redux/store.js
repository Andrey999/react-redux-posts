// import {createStore, compose, applyMiddleware } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import  {postsReducerSlice}  from './postsReducer'
import  {createFetchPostSlice}  from './asyncActions'
// import { forbiddenWordsMiddleware } from './middleware'

export const store = configureStore({
  reducer: {
    posts: postsReducerSlice.reducer,
    fetchPosts: createFetchPostSlice.reducer
  }
})

// export const store = createStore(rootReducer, compose(
//     applyMiddleware(thunk, forbiddenWordsMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   ))