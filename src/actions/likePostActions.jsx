import * as types from './actionTypes'
import PostApi from '../api/postApi'

export function loadPostLikesSuccess(likes){
  return {type: types.LOAD_POST_LIKES_SUCCESS, likes}
}

export function loadPostLikes(postId){
  return dispatch => {
    return PostApi.grabPostLikes(postId).then(json => {
      if(json.error === undefined){
        dispatch(loadPostLikesSuccess(json))
      } else {
        dispatch(loadPostLikesSuccess({message: 'wut'}))
      }
    })
  }
}
