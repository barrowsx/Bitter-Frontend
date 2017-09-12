import * as types from './actionTypes'
import * as chatApi from '../api/node/api'

export function joinChatSuccess(chatRoom){
  return {type: types.JOIN_CHAT_SUCCESS, chatRoom}
}

export function createChatSuccess(chatRoom){
  return {type: types.CREATE_CHAT_SUCCESS, chatRoom}
}

export function joinChat(chatRoom){
  return dispatch => {
    chatApi.joinChat(chatRoom)
    dispatch(joinChatSuccess(chatRoom))
  }
}

export function createChat(user, currentUser){
  return dispatch => {
    let temp = chatApi.createChat(user, currentUser)
    dispatch(createChatSuccess(temp))
  }
}
