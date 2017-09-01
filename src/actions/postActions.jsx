import PostApi from '../api/postApi'
import * as types from './actionTypes'

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
             console.log(json)
             if(json.error === undefined){
               dispatch(loadPostsSuccess(json))
             } else {
               dispatch(loadPostsFailure(json))
             }
           })
  }
}
