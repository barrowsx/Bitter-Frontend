import * as types from './actionTypes'
import UserApi from '../api/userApi'

export function loadUsersSuccess(users){
  return {type: types.LOAD_USERS_SUCCESS, users}
}

export function createUserSuccess(user){
  return {type: types.CREATE_USER_SUCCESS, user}
}

export function deleteUserSuccess(user){
  return {type: types.DELETE_USER_SUCCESS, user}
}

export function loadUsers(){
  return dispatch => {
    return UserApi.testAuth().then(users => {
      console.log(users)
    })
  }
}
