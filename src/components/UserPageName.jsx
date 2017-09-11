import React from 'react'
import {Card, Button, Segment, Image, Sidebar, Menu, Icon} from 'semantic-ui-react'
import UserPostFeed from './UserPostFeed'
import UserPageHeader from './UserPageHeader'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../actions/userActions'
import equal from 'deep-equal'

class UserPageName extends React.Component {

  state = {
    visible: false
  }

  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    return (!equal(this.props, nextProps) || !equal(this.state, nextState))
  }

  componentDidMount(){
    this.props.actions.loadUserByName(this.props.match.params.username)
  }

  render() {
    console.log("thingsgs", this.props)
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation={'push'} direction={'top'} visible={this.state.visible} inverted>
          <Menu.Item name='home' onClick={() => {window.location = 'https://bitter-negwork.herokuapp.com/home'}}>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item name='users' onClick={() => {window.location = 'https://bitter-negwork.herokuapp.com/all'}}>
            <Icon name='users' />
            All Cries
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <div className={'main-page-wrapper'}>
            <div className={'main-page-header'}>
              <center><Image className={'sign-in-logo'} src={require('../img/bitter-icon.png')} width={50} height={50} onClick={this.toggleVisibility} /></center>
            </div>
            <div className={'user-page-user-info'}>
            </div>
            <div className={'main-page-pane-wrapper'}>
              <div className={'main-page-left-pane'}>
              </div>
              <div className={'user-page-feed'}>
                <Segment>
                  <UserPageHeader userId={this.props.user.id === undefined ? 0 : this.props.user.id} />
                  <br></br>
                  <div className={'user-page-feed-actual'}>
                    <UserPostFeed />
                  </div>
                </Segment>
              </div>
              <div className={'main-page-right-pane'}>
              </div>
            </div>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      )
  }
}

function mapStateToProps(state){
  return {user: state.users}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageName);
