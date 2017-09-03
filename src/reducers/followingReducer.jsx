import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function followingReducer(state = initialState.following, action){
  switch(action.type){
    case types.FOLLOWING_FETCH_SUCCESS:
      return action.users
    default:
      return state
  }
}
