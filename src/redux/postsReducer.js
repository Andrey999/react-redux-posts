// import { CREATE_POST, CREATE_FETCH_POST } from "./types"
import {createSlice} from '@reduxjs/toolkit'

// export const postsReducer = (state = initialState, action)=> {
//     switch(action.type) {
//         case CREATE_POST: {
//             // return { ...state, posts: state.posts.concat(action.payload)}
//             return { ...state, posts: [...state.posts, action.payload] }
//         }

//         case CREATE_FETCH_POST: {
//             // return { ...state, fetchPosts: state.fetchPosts.concat(action.payload)}
//             return { ...state, fetchPosts: action.payload }
//         }

//         default: return state
//     }
// }

const initialState = {
    posts: []
}

export const postsReducerSlice = createSlice({
    name: 'postsReducer',
    initialState,
    reducers: {
        createPost(state, action) {
            state.posts.push(action.payload)
        }
    }
  })

export const { createPost } = postsReducerSlice.actions


// export const createFetchPost = () => {
//     return async dispatch => { // redux-thunk
//        try {
//         dispatch(loaderShow()) // пока данные грузятся добавляем лоадер
            
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//         const json = await response.json() // получили данные
//         dispatch({ type: CREATE_FETCH_POST, payload: json }) // диспатчим в редьюсер

//         dispatch(loaderHide()) // получили данные грузятся удаляем лоадер
//        }
//        catch(e) {
//            dispatch(alertShow('Что то пошло не так'))
//            dispatch(loaderHide())
//        }
//     }
// }