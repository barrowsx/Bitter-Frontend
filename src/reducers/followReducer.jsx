import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function followReducer(state = initialState.follow, action){
  switch(action.type){
    case types.FOLLOW_USER_SUCCESS:
      return action.user
    case types.FOLLOW_USER_FAILURE:
      return action.message
    case types.IS_FOLLOWING_TRUE:
      return action.message
    case types.IS_FOLLOWING_FALSE:
      return action.message
    default:
      return state
  }
}
