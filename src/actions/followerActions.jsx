import * as types from './actionTypes'
import UserApi from '../api/userApi'

export function loadFollowersSuccess(users){
  return {type: types.FOLLOWERS_FETCH_SUCCESS, users}
}

export function loadCurrentFollowers(){
  return dispatch => {
    return UserApi.loadCurrentFollowers().then(response => {
      dispatch(loadFollowersSuccess(response))
    })
  }
}
