import * as types from '../actions/actionTypes'
import UserApi from '../api/userApi'
import initialState from './initialState'
import {BrowserRouter as Router, Redirect} from 'react-router-dom'

export default function sessionReducer(state = initialState.session, action){
  switch(action.type){
    case types.LOG_IN_SUCCESS:
      UserApi.testAuth()
      return !!sessionStorage.jwt
    case types.LOG_IN_FAILURE:
      alert('Unable to log in. Check your username and password.')
      return false
    default:
      return state
  }
}
