import React from 'react'
import {Card, Button, Segment, Image, Loader, Dimmer} from 'semantic-ui-react'
import PostFeed from './PostFeed'
import CurrentUserCard from './CurrentUserCard'
import FollowersCard from './FollowersCard'
import FollowedCard from './FollowedCard'
import {Redirect} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as sessionActions from '../actions/sessionActions'
import equal from 'deep-equal'

class MainPage extends React.Component {

  shouldComponentUpdate(nextProps, nextState){
    return !equal(nextProps, this.props)
  }

  render() {
    console.log('main page props', this.props.active)
    if(!!!sessionStorage.jwt){
      window.location = 'http://localhost:3001/'
      return(
        <Dimmer active inverted>
          <Loader size={'massive'}>Loading</Loader>
        </Dimmer>
      )
    } else {
      return (
        <div className={'main-page-wrapper'}>
          <div className={'main-page-header'}>
            <center><Image className={'sign-in-logo'} src='./bitter-icon.png' width={50} height={50}/></center>
          </div>
          <div className={'main-page-pane-wrapper'}>
            <div className={'main-page-left-pane'}>
              <center>
                <CurrentUserCard />
              </center>
            </div>
            <div className={'main-page-feed'}>
              <Segment>
                <PostFeed />
              </Segment>
            </div>
            <div className={'main-page-right-pane'}>
              <center>
                <div className={'main-page-followers-card'}>
                  <FollowersCard history={this.props.history} />
                </div>
                <br></br>
                <div className={'main-page-followed-card'}>
                  <FollowedCard history={this.props.history} />
                </div>
              </center>
            </div>
          </div>
        </div>)
    }
  }
}

function mapStateToProps(state){
  return {
    active: state
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
