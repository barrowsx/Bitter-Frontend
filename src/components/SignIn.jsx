import React from 'react'
import {Card, Form, Divider, Button, Segment, Image} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as sessionActions from '../actions/sessionActions'

class SignIn extends React.Component {

  state = {
    clickedLogin: false,
    credentials: {
      name: '',
      password: ''
    }
  }

  handleLogin = event => {
    this.props.actions.logInUser(this.state.credentials)
    this.state.credentials.name = ''
    this.state.credentials.password = ''
    this.setState({
      clickedLogin: false,
      credentials: this.state.credentials
    })
  }

  handleSignUp = event => {
    this.state.credentials.name = ''
    this.state.credentials.password = ''
    this.forceUpdate()
  }

  handleUsernameChange = event => {
    this.state.credentials.name = event.target.value
    this.forceUpdate()
  }

  handlePasswordChange = event => {
    this.state.credentials.password = event.target.value
    this.forceUpdate()
  }


  render() {
    if(this.props.active.session){
      return(<Redirect to='/home' />)
    } else {
      return (
        <div className={'sign-in-wrapper'}>
          <div className={'sign-in-left-pane'}>
            <center>
              <Card>
                <Segment padded>
                  <Image className={'sign-in-logo'} src={'./bitter-icon.png'} width={50} height={50} />
                  <Divider horizontal>bitter</Divider>
                  <br></br>
                  <Form onSubmit={event => {
                      if(this.state.clickedLogin){
                        this.handleLogin(event)
                      } else {
                        this.handleSignUp(event)
                      }
                    }}>
                    <Form.Field>
                      <label>Username</label>
                      <input placeholder={'Username'} value={this.state.credentials.name} onChange={this.handleUsernameChange}/>
                    </Form.Field>
                    <Form.Field>
                      <label>Password</label>
                      <input type={'password'} placeholder={'Password'} value={this.state.credentials.password} onChange={this.handlePasswordChange}/>
                    </Form.Field>
                    <br></br>
                    <Button type={'submit'} color={'yellow'} fluid onClick={() => {this.setState({clickedLogin: true})}}>Login</Button>
                    <Divider horizontal>or</Divider>
                    <Button type={'submit'} secondary fluid>Sign Up</Button>
                  </Form>
                </Segment>
              </Card>
            </center>
          </div>
          <div className={'sign-in-right-pane'}>
            <div className={'sign-in-right-pane-image'}></div>
            <div className={'sign-in-right-pane-text'}>
              <center>
                <h2>welcome to bitter</h2>
              </center>
              <center>
                <h3>the first social negwork</h3>
              </center>
            </div>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return{
    active: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
