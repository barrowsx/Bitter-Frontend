import React from 'react'
import {onMessage, emitMessage, joinChat, loadChat} from '../api/node/api'
import {Form, Card} from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../actions/userActions'

class SocketTest extends React.Component {

  constructor(props){
    super(props)

    loadChat((message) => {
      let chat = message.user + ': ' + message.content
      this.setState({
        message: [...this.state.message, chat]
      })
    })

    onMessage((message) => {
      let audio = document.getElementById('audio')
      let chat = message.user + ': ' + message.content
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
    joinChat(this.props.location.state.chatRoom)
  }

  updateMessage = event => {
    this.setState({
      content: event.target.value
    })
  }

  submitMessage = event => {
    event.preventDefault()
    emitMessage(this.props.user.name, this.state.content, Date.now(), this.props.location.state.chatRoom)
    this.setState({
      content: ''
    })
  }

  render(){
    console.log(this.props)
    return (
      <Card style={{minHeight: '100vh'}}>
        <audio id={'audio'} src={require('../img/bing.ogg')}></audio>
        {this.state.message.length !== 0 &&
          this.state.message.map((element, i) => {
            return (<p key={'key-' + i}>{element}</p>)
          })
        }
        <Form onSubmit={this.submitMessage}>
          <Form.Input label={'Message'} type={'text'} onChange={this.updateMessage} value={this.state.content} />
          <Form.Button type={'submit'}>Submit</Form.Button>
        </Form>
      </Card>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.users
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SocketTest);
