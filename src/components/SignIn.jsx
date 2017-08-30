import React from 'react'
import {Card, Form, Divider, Button, Segment, Image} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class SignIn extends React.Component {

  state = {
    clickedLogin: false,
    username: '',
    password: ''
  }

  handleLogin = event => {
    console.log('login button clicked')
    console.log('username:', this.state.username)
    console.log('password:', this.state.password)
    this.setState({
      clickedLogin: false,
      username: '',
      password: ''
    })
  }

  handleSignUp = event => {
    console.log('sign up button clicked')
    console.log('username:', this.state.username)
    console.log('password:', this.state.password)
    this.setState({
      username: '',
      password: ''
    })
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }


  render() {
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
                    <input placeholder={'Username'} value={this.state.username} onChange={this.handleUsernameChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input type={'password'} placeholder={'Password'} value={this.state.password} onChange={this.handlePasswordChange}/>
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
              <h3>a social network for negativity</h3>
            </center>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;
