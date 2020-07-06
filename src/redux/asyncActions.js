// import { CREATE_POST, CREATE_FETCH_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types"
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading: 'idle',
    alert: null,
    fetchedPost: []
}

export const createFetchPostSlice = createSlice({
  name: 'createFetchPost',
  initialState,
  reducers: {

    alertShow(state, action) {
      state.alert = action.payload
    },

    alertHide(state) {
      state.alert = false
    },

    postLoading(state) {
      if (state.loading === 'idle') state.loading = 'pending'
    },

    postLoadingHide(state) {
      if (state.loading === 'pending') state.loading = 'idle'
    },

    fetchedPost(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.fetchedPost = action.payload
      }
    }
  }
})
  
export const { alertShow, alertHide, postLoading, postLoadingHide, fetchedPost } = createFetchPostSlice.actions

export const showAlert = (payload) => {
  return dispatch => {
      dispatch(alertShow(payload))
      setTimeout(() => {
          dispatch(alertHide())
      }, 3000)
  }
}

export const createFetchPost = () => async dispatch => {
    dispatch(postLoading())
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        dispatch(fetchedPost(json))
    } catch (e) {
        dispatch(alertShow('Что то пошло не так'))
        dispatch(postLoadingHide())
    }
}

// export const createPost = (post) => ({ // аргумент это event.target
//     type: CREATE_POST,
//     payload: post
// })

// export const alertShow = (warning) => {
//     return dispatch => {
//         dispatch({
//             type: SHOW_ALERT,
//             payload: warning
//         })
//         setTimeout(() => {
//             dispatch(alertHide())
//         }, 3000)
//     }
// }

// export const createFetchPost = () => {
    
//     return async dispatch => { // redux-thunk
//        try {
//         dispatch(loaderShow()) // пока данные грузятся добавляем лоадер
            
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//         console.log(response)
//         const json = await response.json() // получили данные
        
//         dispatch(fetchedPost(json)) // диспатчим в редьюсер

//         // dispatch(loaderHide()) // получили данные грузятся удаляем лоадер
//        }
//        catch(e) {
//            dispatch(alertShow('Что то пошло не так'))
//            dispatch(loaderHide())
//        }
//     }
// }

// export const posts = () => async dispatch => { // redux-thunk
//     try {
//         dispatch(loaderShow()) // пока данные грузятся добавляем лоадер

//         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//         const json = await response.json() // получили данные
//         console.log(json)
//         dispatch({
//             type: createFetchPostSlice.fetchedPost,
//             payload: json
//         }) // диспатчим в редьюсер

//         dispatch(loaderHide()) // получили данные грузятся удаляем лоадер
//     } catch (e) {
//         dispatch(alertShow('Что то пошло не так'))
//         dispatch(loaderHide())
//     }
// }