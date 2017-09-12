import * as types from './actionTypes'
import UserApi from '../api/userApi'

export function loadCurrentUserSuccess(user){
  return {type: types.LOAD_CURRENT_USER_SUCCESS, user}
}

export function loadCurrentUser(){
  return dispatch => {
    return UserApi.loadCurrentUser().then(response => {
      dispatch(loadCurrentUserSuccess(response))
    })
  }
}
