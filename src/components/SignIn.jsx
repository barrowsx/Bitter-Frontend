import React from 'react'
import {Card, Form, Divider, Button, Segment, Image, Transition} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as sessionActions from '../actions/sessionActions'
import * as userActions from '../actions/userActions'

class SignIn extends React.Component {

  state = {
    toggle: true,
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
    setTimeout(() => {
      this.setState({
        toggle: !this.state.toggle,
        clickedLogin: false,
        credentials: this.state.credentials
      })
    }, 5000)
  }

  handleSignUp = event => {
    const credentials = this.state.credentials
    credentials.name = ''
    credentials.password = ''
    this.setState({
      toggle: !this.state.toggle,
      credentials: this.state.credentials
    })
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
    console.log(this.props)
    if(this.props.session){
      return(<Redirect to='/home' />)
    } else {
      return (
        <div className={'sign-in-wrapper'}>
          <div className={'sign-in-left-pane'}>
            <center>
              <Transition visible={this.state.toggle} animation={'shake'} duration={500}>
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
                      <Button type={'submit'} color={'yellow'} fluid loading={this.state.clickedLogin} onClick={() => {this.setState({clickedLogin: true})}}>Login</Button>
                      <Divider horizontal>or</Divider>
                      <Button type={'submit'} secondary fluid>Sign Up</Button>
                    </Form>
                  </Segment>
                </Card>
              </Transition>
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
  return {
    session: state.session,
    user: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
