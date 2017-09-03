import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function followerReducer(state = initialState.followers, action){
  switch(action.type){
    case types.FOLLOWERS_FETCH_SUCCESS:
      return action.users
    default:
      return state
  }
}
