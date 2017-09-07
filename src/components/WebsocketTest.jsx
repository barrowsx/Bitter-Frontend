import React from 'react'
import * as ActionCable from 'actioncable'

let test = ''

class WebsocketTest extends React.Component {

  bepis = ''

  setUpSockets(cable){
    let messages = cable.subscriptions.create('MessagesChannel', {
      received: data => {
        console.log(data.user, data.message)
        this.bepis = `${this.bepis}${data.user}: ${data.message}\r\n`
        this.forceUpdate()
      },

      renderMessage: data => {

        // return (<h1>data.user + ": " + data.message</h1>)
      }
    })
  }

  componentDidMount(){
    let cable = ActionCable.createConsumer('ws://localhost:3000/cable?token=' + sessionStorage.jwt)
    this.setUpSockets(cable)
  }

  render(){
    return(
      <p>{this.bepis}</p>
    )
  }
}

export default WebsocketTest;
