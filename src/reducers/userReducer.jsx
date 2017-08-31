import * as types from '../actions/actionTypes'
import initialState from './initialState'
import {BrowserRouter} from 'react-router-dom'

export default function userReducer(state = initialState.users, action){
  switch(action.type){
    case types.LOAD_USERS_SUCCESS:
      return action.users
    case types.CREATE_USER_SUCCESS:
      return [
        ...state.filter(user => {
          user.id !== action.user.id
        }),
        Object.assign({}, action.user)
      ]
    case types.DELETE_USER_SUCCESS:
      const newState = Object.assign([], state)
      const indexOfUserToDelete = state.findIndex(user => {
        return user.id == action.user.id
      })
      newState.splice(indexOfUserToDelete, 1)
      return newState
    default:
      return state
  }
}
