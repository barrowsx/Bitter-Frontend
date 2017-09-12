import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function chatReducer(state = initialState.chat, action){
  switch(action.type){
    case types.JOIN_CHAT_SUCCESS:
      return action.chatRoom || state
    case types.CREATE_CHAT_SUCCESS:
      return action.chatRoom
    default:
      return state
  }
}
