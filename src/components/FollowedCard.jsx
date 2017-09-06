import React from 'react'
import {Card, Button, Segment, Image, Divider} from 'semantic-ui-react'
import UserFeed from './UserFeed'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as followingActions from '../actions/followingActions'
import equal from 'deep-equal'

class FollowedCard extends React.Component {

  shouldComponentUpdate(nextProps, nextState){
    return !equal(this.props, nextProps)
  }

  pollCurrentFollowing(){
    let test
    if(!!sessionStorage.jwt){
      // console.log('pollCurrentFollowing fuck you')
      this.props.actions.loadCurrentFollowing()
      test = setTimeout(() => this.pollCurrentFollowing(), 5000)
    } else {
      clearTimeout(test)
    }
  }

  componentDidUpdate(){
    // console.log('updating FollowedCard')
    this.pollCurrentFollowing()
  }

  componentDidMount(){
    this.props.actions.loadCurrentFollowing()
  }

  render() {
    console.log("FollowedCard props:", this.props)
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            <h1>Following</h1>
            <Divider />
          </Card.Header>
          <div className={'followed-card-content'}>
            {this.props.following.map((follow, index) => {
              return(
                <UserFeed key={'following-' + (index + 1)} user={follow.name} followers={follow.followers} following={follow.following} userId={follow.user_id} />
              )
            })}
          </div>
        </Card.Content>
      </Card>
    )
  }
}

function mapStateToProps(state){
  return {
    following: state.following,
    session: state.session
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(followingActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowedCard);
