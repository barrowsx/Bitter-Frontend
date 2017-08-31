import * as types from './actionTypes'
import sessionApi from '../api/sessionApi'

export function loginSuccess(){
  return {type: types.LOG_IN_SUCCESS}
}

export function loginFailure(){
  return {type: types.LOG_IN_FAILURE}
}

export function logInUser(credentials){
  return dispatch => {
    return sessionApi.login(credentials).then(response => {
      if(!!response.jwt){
        sessionStorage.setItem('jwt', response.jwt)
        dispatch(loginSuccess())
      } else {
        dispatch(loginFailure())
      }
    })
  }
}
