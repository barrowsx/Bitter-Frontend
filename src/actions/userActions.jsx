import * as types from './actionTypes'
import UserApi from '../api/userApi'

export function loadUserSuccess(user){
  return {type: types.LOAD_USER_SUCCESS, user}
}

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

export function loadUser(user){
  return dispatch => {
    return UserApi.loadUser(user).then(response => {
      dispatch(loadUserSuccess(response))
    })
  }
}

export function loadCurrentUser(){
  return dispatch => {
    return UserApi.loadCurrentUser().then(response => {
      dispatch(loadUserSuccess(response))
    })
  }
}
