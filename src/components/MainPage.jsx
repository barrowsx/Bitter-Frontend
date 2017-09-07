import React from 'react'
import {Card, Button, Segment, Image, Loader, Dimmer, Sidebar, Menu, Icon} from 'semantic-ui-react'
import PostFeed from './PostFeed'
import CurrentUserCard from './CurrentUserCard'
import FollowersCard from './FollowersCard'
import FollowedCard from './FollowedCard'
import {Redirect, withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as sessionActions from '../actions/sessionActions'
import equal from 'deep-equal'

class MainPage extends React.Component {

  state = {
    visible: false
  }

  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (!equal(nextProps, this.props) || !equal(this.state, nextState))
  }

  render() {
    if (!!!sessionStorage.jwt) {
      window.location = 'https://bitter-negwork.herokuapp.com/'
      return (
        <Dimmer active inverted>
          <Loader size={'massive'}>Loading</Loader>
        </Dimmer>
      )
    } else {
      return (
        <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation={'push'} direction={'top'} visible={this.state.visible} inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='users' onClick={() => {window.location = 'https://bitter-negwork.herokuapp.com/all'}}>
              <Icon name='users' />
              All Cries
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <div>
              <div className={'main-page-wrapper'}>
                <div className={'main-page-header'}>
                  <center><Image className={'sign-in-logo'} src='./bitter-icon.png' width={50} height={50} onClick={this.toggleVisibility} /></center>
                </div>
                <div className={'main-page-pane-wrapper'}>
                  <div className={'main-page-left-pane'}>
                    <center>
                      <CurrentUserCard/>
                    </center>
                  </div>
                  <div className={'main-page-feed'}>
                    <Segment>
                      <PostFeed/>
                    </Segment>
                  </div>
                  <div className={'main-page-right-pane'}>
                    <center>
                      <div className={'main-page-followers-card'}>
                        <FollowersCard history={this.props.history}/>
                      </div>
                      <br></br>
                      <div className={'main-page-followed-card'}>
                        <FollowedCard history={this.props.history}/>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {active: state}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
