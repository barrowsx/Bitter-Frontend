import PostApi from '../api/postApi'
import * as types from './actionTypes'

export function loadAllPostsSuccess(posts){
  return {type: types.POSTS_FETCH_SUCCESS, posts}
}

export function loadAllPostsFailure(posts){
  return {type: types.POSTS_FETCH_FAILURE, posts}
}

export function loadPostsSuccess(posts){
  return {type: types.POST_FETCH_SUCCESS, posts}
}

export function loadPostsFailure(posts){
  return {type: types.POST_FETCH_FAILURE, posts}
}

export function fetchPosts(){
  return dispatch => {
    return PostApi.grabPosts()
           .then(json => {
             console.log("fetchPosts()",json.length)
             if(json.error === undefined){
               if(json.length === 0){
                 dispatch(loadPostsSuccess([{id: 0, content: "you have nobody...", created_at: "2017-09-01T18:37:00.256Z", user: "system"}]))
               } else {
                 dispatch(loadPostsSuccess(json))
               }
             } else {
               dispatch(loadPostsFailure(json))
             }
           })
  }
}

export function fetchAllPosts(){
  return dispatch => {
    return PostApi.grabAllPosts()
           .then(json => {
             console.log("fetchAllPosts()",json)
             if(json.error === undefined){
               dispatch(loadAllPostsSuccess(json))
             } else {
               dispatch(loadAllPostsFailure(json))
             }
           })
  }
}

export function clearPosts(){
  return dispatch => {
    return dispatch(loadPostsSuccess([]))
  }
}
