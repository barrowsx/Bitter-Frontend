import * as types from './actionTypes'
import PostApi from '../api/postApi'

export function likePostSuccess(likes){
  console.log(likes)
  return {type: types.LIKE_POST_SUCCESS, likes}
}

export function likePost(postId){
  return dispatch => {
    return PostApi.likePost(postId).then(json => {
      if(json.error === undefined){
        dispatch(likePostSuccess(json))
      } else {
        dispatch(likePostSuccess({message: 'wut'}))
      }
    })
  }
}
