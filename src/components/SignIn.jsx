import React from 'react'
import {Card, Form, Divider, Button, Segment, Image, Transition} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as sessionActions from '../actions/sessionActions'
import * as userActions from '../actions/userActions'

class SignIn extends React.Component {

  state = {
    dividerText: 'BITTER',
    toggle: true,
    clickedLogin: false,
    clickedSignUp: false,
    credentials: {
      name: '',
      password: ''
    }
  }

  handleLogin = event => {
    if(this.state.credentials.name === '' || this.state.credentials.password === ''){
      this.setState({
        dividerText: "FIELDS CAN'T BE BLANK",
        toggle: !this.state.toggle,
        clickedLogin: false,
        credentials: this.state.credentials
      }, () => {
        setTimeout(() => {
          this.setState({
            dividerText: 'BITTER'
          })
        }, 2000)
      })
    } else {
      this.props.actions.logInUser(this.state.credentials)
      this.state.credentials.name = ''
      this.state.credentials.password = ''
      setTimeout(() => {
        this.setState({
          dividerText: 'INCORRECT CREDENTIALS',
          toggle: !this.state.toggle,
          clickedLogin: false,
          credentials: this.state.credentials
        }, () => {
          setTimeout(() => {
            this.setState({
              dividerText: 'BITTER'
            })
          }, 2000)
        })
      }, 15000)
    }
  }

  handleSignUp = event => {
    let credentials = this.state.credentials
    credentials.password_confirmation = this.state.credentials.password
    if(this.state.credentials.name === '' || this.state.credentials.password === ''){
      this.setState({
        dividerText: "FIELDS CAN'T BE BLANK",
        toggle: !this.state.toggle,
        clickedSignUp: false,
        credentials: this.state.credentials
      }, () => {
        setTimeout(() => {
          this.setState({
            dividerText: 'BITTER'
          })
        }, 2000)
      })
    } else {
      this.props.userActions.createUser(credentials)
      setTimeout(() => {
        if(this.props.user.length === 0){
          this.state.credentials.name = ''
          this.state.credentials.password = ''
          this.setState({
            dividerText: 'INCORRECT CREDENTIALS',
            toggle: !this.state.toggle,
            clickedSignUp: false,
            credentials: this.state.credentials
          }, () => {
            setTimeout(() => {
              this.setState({
                dividerText: 'BITTER'
              })
            }, 10000)
          })
        } else {
          if(typeof this.props.user.message === 'string'){
            this.state.credentials.name = ''
            this.state.credentials.password = ''
            this.setState({
              dividerText: "NAME ALREADY TAKEN",
              toggle: !this.state.toggle,
              clickedSignUp: false,
              credentials: this.state.credentials
            }, () => {
              setTimeout(() => {
                this.setState({
                  dividerText: 'BITTER'
                })
              }, 2000)
            })
          } else {
            this.props.actions.logInUser(credentials)
            this.state.credentials.name = ''
            this.state.credentials.password = ''
            this.setState({
              clickedSignUp: false,
              credentials: this.state.credentials
            })
          }
        }
      }, 15000)
    }
  }

  handleUsernameChange = event => {
    this.state.credentials.name = event.target.value
    this.forceUpdate()
  }

  handlePasswordChange = event => {
    this.state.credentials.password = event.target.value
    this.forceUpdate()
  }

  componentDidMount(){
    this.props.userActions.clearUserStore()
  }

  render() {
    // console.log(this.props)
    if(!!sessionStorage.jwt){
      return(<Redirect to='/home' />)
    } else {
      return (
        <div className={'sign-in-wrapper'}>
          <div className={'sign-in-left-pane'}>
            <center>
              <Card>
                <Segment padded>
                  <Image className={'sign-in-logo'} src={'./bitter-icon.png'} width={50} height={50} />
                  <Transition visible={this.state.toggle} animation={'flash'} duration={500}>
                    <Divider horizontal>{this.state.dividerText}</Divider>
                  </Transition>
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
                    <Button type={'submit'} secondary fluid loading={this.state.clickedSignUp} onClick={() => {this.setState({clickedSignUp: true})}}>Sign Up</Button>
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
  return {
    session: state.session,
    user: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
