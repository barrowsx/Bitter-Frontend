import openSocket from 'socket.io-client'
import UserApi from '../userApi'

const socket = openSocket('http://localhost:3002')

// function subscribeToTimer(cb){
//   socket.on('chat message', timestamp => cb(null, timestamp))
//   emitMessage(msg)
// }

function onMessage(cb){
  socket.on('chat', msg => {
    cb(null, msg)
  })
}

function emitMessage(msg){
  socket.emit('chat', msg)
}

export {onMessage, emitMessage}
