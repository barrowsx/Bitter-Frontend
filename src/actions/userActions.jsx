import * as types from './actionTypes'
import UserApi from '../api/userApi'

export function loadUserSuccess(user){
  return {type: types.LOAD_USER_SUCCESS, user}
}

export function createUserSuccess(user){
  return {type: types.CREATE_USER_SUCCESS, user}
}

export function deleteUserSuccess(user){
  return {type: types.DELETE_USER_SUCCESS, user}
}

export function loadUser(user){
  return dispatch => {
    return UserApi.loadUser(user).then(response => {
      dispatch(loadUserSuccess(response))
    })
  }
}

export function loadUserByName(user){
  return dispatch => {
    return UserApi.loadUserByName(user).then(response => {
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

export function clearUserStore(){
  return dispatch => {
    return dispatch(loadUserSuccess([]))
  }
}

export function createUser(user){
  return dispatch => {
    return UserApi.createUser(user).then(response => {
      // console.log(response)
      dispatch(createUserSuccess(response))
    })
  }
}
