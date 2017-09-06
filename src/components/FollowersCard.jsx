import React from 'react'
import {Card, Button, Segment, Image, Divider} from 'semantic-ui-react'
import UserFeed from './UserFeed'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as followerActions from '../actions/followerActions'
import equal from 'deep-equal'

class FollowersCard extends React.Component {

  shouldComponentUpdate(nextProps, nextState){
    return !equal(this.props, nextProps)
  }

  pollCurrentFollowers(){
    let test
    if(!!sessionStorage.jwt){
      // console.log('pollCurrentFollowers fuck you')
      this.props.actions.loadCurrentFollowers()
      test = setTimeout(() => this.pollCurrentFollowers(), 5000)
    } else {
      clearTimeout(test)
    }
  }

  componentDidUpdate(){
    // console.log('updating FollowersCard')
    this.pollCurrentFollowers()
  }

  componentDidMount(){
    this.props.actions.loadCurrentFollowers()
  }

  render() {
    console.log(this.props)
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            <h1>Followers</h1>
            <Divider />
          </Card.Header>
          <div className={'followers-card-content'}>
            {this.props.followers.map((follow, index) => {
              return(
                <UserFeed key={'follower-' + (index + 1)} user={follow.name} followers={follow.followers} following={follow.following} userId={follow.user_id} />
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
    followers: state.followers,
    session: state.session
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(followerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowersCard);
