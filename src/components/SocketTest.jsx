import React from 'react'
import {onMessage, emitMessage} from '../api/node/api'
import {Form, Card} from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../actions/userActions'

let bitch = null

class SocketTest extends React.Component {

  constructor(props){
    super(props)

    onMessage((err, msg) => {
      let chat = msg
      this.setState({
        message: [...this.state.message, chat]
      })
    })

    this.state = {
      message: [],
      content: ''
    }
  }

  componentDidMount(){
    this.props.actions.loadCurrentUser()
  }

  updateMessage = event => {
    this.setState({
      content: event.target.value
    })
  }

  submitMessage = event => {
    bitch = this.props.user.name
    emitMessage(this.props.user.name, this.state.content)
    this.setState({
      content: ''
    })
  }

  render(){
    return (
      <Card style={{minHeight: '100vh'}}>
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
