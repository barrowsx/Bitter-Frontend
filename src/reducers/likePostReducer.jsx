import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function likePostReducer(state = initialState.likePost, action){
  switch(action.type){
    case types.LOAD_POST_LIKES_SUCCESS:
      return action.likes
    default:
      return state
  }
}
