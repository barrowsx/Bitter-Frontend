import * as types from '../actions/actionTypes'
import initialState from './initialState'
// import {BrowserRouter} from 'react-router-dom'

export default function userReducer(state = initialState.users, action){
  switch(action.type){
    case types.LOAD_USER_SUCCESS:
      return action.user
    case types.LOAD_USERS_SUCCESS:
      return action.users
    case types.CREATE_USER_SUCCESS:
      return action.user
    default:
      return state
  }
}
