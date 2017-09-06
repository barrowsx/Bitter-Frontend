import * as types from './actionTypes'
import UserApi from '../api/userApi'

export function followUserSuccess(user){
  return {type: types.FOLLOW_USER_SUCCESS, user}
}

export function followUserFailure(message){
  return {type: types.FOLLOW_USER_FAILURE, message}
}

export function isFollowingTrue(message){
  return {type: types.IS_FOLLOWING_TRUE, message}
}

export function isFollowingFalse(message){
  return {type: types.IS_FOLLOWING_FALSE, message}
}

export function followUser(user){
  return dispatch => {
    return UserApi.followUser(user).then(response => {
      if(!!response.error){
        dispatch(followUserFailure(response))
      } else {
        dispatch(followUserSuccess(response))
      }
    })
  }
}

export function isFollowingUser(user){
  return dispatch => {
    return UserApi.isFollowingUser(user).then(response => {
      if(response.relationship){
        dispatch(isFollowingTrue(response))
      } else {
        dispatch(isFollowingFalse(response))
      }
    })
  }
}
