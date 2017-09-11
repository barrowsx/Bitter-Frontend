import openSocket from 'socket.io-client'
import UserApi from '../userApi'

const socket = openSocket('https://bitter-node-api.herokuapp.com')
// const socket = openSocket('http://localhost:3002')

function createChat(user, currentUser){
  // TODO: Create chatroom based on current user and selected user.
  // TODO: Figure out how to properly display chat message order (display goes oldest to newest right now)
  let numArray = [user, currentUser]
  numArray = numArray.sort((a, b) => {
    return a - b
  })
  socket.emit('create chat', numArray[0], numArray[1])
  return (numArray[0].toString() + '_' + numArray[1].toString())
}

function joinChat(chatRoom){
  socket.emit('room', chatRoom)
}

function onMessage(cb){
  console.warn('onMessage has been hit!!!')
  socket.on('chat', message => {
    cb(message)
  })
}

function loadChat(cb){
  socket.on('load chat', message => {
    cb(message)
  })
}

function emitMessage(usr, msg, date, chatRoom){
  socket.emit('chat', usr, msg, date, chatRoom)
}

export {onMessage, emitMessage, createChat, joinChat, loadChat}
