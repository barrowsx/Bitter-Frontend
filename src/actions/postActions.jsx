import PostApi from '../api/postApi'
import * as types from './actionTypes'

export function loadPostsSuccess(posts){
  return {type: types.POST_FETCH_SUCCESS, posts}
}

export function fetchPosts(){
  return dispatch => {
    return PostApi.grabPosts()
           .then(response => response.json())
           .then(json => dispatch(loadPostsSuccess(json)))
  }
}
