const io = require('socket.io')()
const mongo = require('mongodb').MongoClient

io.on('connection', socket => {
  console.log('a user connected')

  mongo.connect('mongodb://heroku_t3sxklnk:gb3bklkpgabn9pmp6m828j11rb@ds129394.mlab.com:29394/heroku_t3sxklnk', (err, db) => {
    let collection = db.collection('chat messages')
    let stream = collection.find().sort({_id: -1}).limit(10).stream()
    stream.on('data', chat => {
      socket.emit('chat', chat)
    })
  })

  socket.on('chat', msg => {
    mongo.connect('mongodb://heroku_t3sxklnk:gb3bklkpgabn9pmp6m828j11rb@ds129394.mlab.com:29394/heroku_t3sxklnk', (err, db) => {
      let collection = db.collection('chat messages')
      collection.insert({content: msg}, (err, o) => {
        if(err){
          console.warn(err.message)
        } else {
          console.log("chat message inserted into db: " + msg)
        }
      })
    })
    io.emit('chat', msg)
  })
  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })
})

const port = 3002
io.listen(port)
console.log('listening on port', port)
