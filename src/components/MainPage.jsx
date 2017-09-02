import React from 'react'
import {Card, Button, Segment, Image} from 'semantic-ui-react'
import PostFeed from './PostFeed'
import CurrentUserCard from './CurrentUserCard'
import FollowersCard from './FollowersCard'
import FollowedCard from './FollowedCard'
import {Redirect} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as sessionActions from '../actions/sessionActions'

class MainPage extends React.Component {
  render() {
    if(!this.props.active.session){
      return(<Redirect to='/' />)
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
                  <FollowersCard />
                </div>
                <br></br>
                <div className={'main-page-followed-card'}>
                  <FollowedCard />
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
