import React from 'react'
import {onMessage, emitMessage, joinChat, loadChat, clearChat} from '../api/node/api'
import {Form, Card} from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as currentUserActions from '../actions/currentUserActions'
import * as chatActions from '../actions/chatActions'
import {View, Text} from 'react-desktop/windows'
import equal from 'deep-equal'

class SocketTest extends React.Component {

  constructor(props){
    super(props)

    loadChat((message) => {
      let sender = ''
      if(message.user !== this.props.user.name){
        sender = 'from-them'
      } else {
        sender = 'from-me'
      }
      let chat = {user: message.user, content: message.content, sender}
      this.setState({
        message: [...this.state.message, chat]
      })
    })

    clearChat((message) => {
      this.setState({
        message
      })
    })

    onMessage((message) => {
      console.log(message)
      let audio = document.getElementById('audio')
      let sender = ''
      if(message.user !== this.props.user.name){
        sender = 'from-them'
      } else {
        sender = 'from-me'
      }
      let chat = {user: message.user, content: message.content, sender}
      this.setState({
        message: [...this.state.message, chat]
      },() => {
        if(message.user !== this.props.user.name){
          audio.play()
        }
      })
    })

    this.state = {
      message: [],
      content: ''
    }
  }

  componentDidMount(){
    this.props.actions.loadCurrentUser()
    console.log('SocketTest has mounted!!!')
    if(!!this.props.rehydrate.persistedState){
      this.props.chatActions.joinChat(this.props.rehydrate.persistedState.chat)
    } else if(!!this.props.chat) {
      this.props.chatActions.joinChat(this.props.chat)
    }
    this.scrollToBottom()
  }

  componentDidUpdate(){
    this.scrollToBottom()
  }

  updateMessage = event => {
    this.setState({
      content: event.target.value
    })
  }

  submitMessage = event => {
    event.preventDefault()
    emitMessage(this.props.user.name, this.state.content, Date.now(), this.props.chat)
    this.setState({
      content: ''
    })
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollTop = this.messagesEnd.scrollHeight
  }

  render(){
    console.log(this.props)
    return (
      <Card style={{minHeight: '30vh', maxHeight: '30vh', minWidth: '290px', marginTop: 0, position: 'relative', backgroundColor: '#EDEEEF'}}>
        <audio id={'audio'} src={require('../img/bing.ogg')}></audio>
        <div style={{ minWidth: '100%', minHeight: '86.5%', maxHeight: '86.5%', overflowY: 'auto', position: 'absolute' }} ref={el => { this.messagesEnd = el }}>
          <section>
            <center>
              {this.state.message.length !== 0 &&
                this.state.message.map((element, i) => {
                  return (
                    <div key={'key-' + i} id={'chat-container-div'}>
                      <div className={element.sender}>
                        <p>{element.content}</p>
                      </div>
                      <div className={"clear"}></div>
                    </div>
                  )
                })
              }
              </center>
            <div style={{float: "left", clear: "both"}}>
            </div>
          </section>
        </div>
        <Form onSubmit={this.submitMessage} style={{minHeight: '13.5%', maxHeight: '13.5%', minWidth: '100%', position: 'absolute', bottom: 0}}>
          <Form.Input type={'text'} onChange={this.updateMessage} value={this.state.content} />
          <Form.Button type={'submit'} style={{background: 'transparent', border: 'none !important', fontSize: 0}}>Submit</Form.Button>
        </Form>
      </Card>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.currentUser,
    chat: state.chat,
    rehydrate: state.rehydrate
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(currentUserActions, dispatch),
    chatActions: bindActionCreators(chatActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SocketTest);
