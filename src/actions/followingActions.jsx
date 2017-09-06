import * as types from './actionTypes'
import UserApi from '../api/userApi'

export function loadFollowingSuccess(users){
  return {type: types.FOLLOWING_FETCH_SUCCESS, users}
}

export function loadCurrentFollowing(){
  return dispatch => {
    return UserApi.loadCurrentFollowing().then(response => {
      dispatch(loadFollowingSuccess(response))
    })
  }
}
