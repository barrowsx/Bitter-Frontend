import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function createPostReducer(state = initialState.createPost, action){
  switch(action.type){
    case types.POST_CREATE_SUCCESS:
      return {}
    case types.POST_CREATE_FAILURE:
      return action.response
    default:
      return state
  }
}
