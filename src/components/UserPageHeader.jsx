import React from 'react'
import {Card, Button, Segment, Image, Icon} from 'semantic-ui-react'
import {Redirect, withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createChat, joinChat} from '../api/node/api'
import * as chatActions from '../actions/chatActions'
import * as userActions from '../actions/userActions'
import * as followActions from '../actions/followActions'
import * as followerActions from '../actions/followerActions'
import * as followingActions from '../actions/followingActions'
import * as currentUserActions from '../actions/currentUserActions'
import equal from 'deep-equal'

class UserPageHeader extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      buttonText: 'Follow',
      buttonColor: 'yellow',
      disabled: false
    }
  }



  shouldComponentUpdate(nextProps, nextState){
    return (!equal(this.props, nextProps) || !equal(this.state, nextState))
  }

  componentDidUpdate() {
    this.props.followActions.isFollowingUser(this.props.user)
    .then(() => {
      if(this.props.follow.relationship){
        this.setState({
          buttonText: 'Unfollow',
          buttonColor: 'blue'
        })
      } else {
        this.setState({
          buttonText: 'Follow',
          buttonColor: 'yellow'
        })
      }
    })
  }

  componentDidMount() {
    this.props.currentUserActions.loadCurrentUser()
    .then(() => {
      this.props.actions.loadUser(this.props.userId)
      .then(() => {
        this.props.followActions.isFollowingUser(this.props.user)
        .then(() => {
          if(this.props.follow.relationship){
            this.setState({
              buttonText: 'Unfollow',
              buttonColor: 'blue'
            })
          } else {
            this.setState({
              buttonText: 'Follow',
              buttonColor: 'yellow'
            })
          }
        })
        .then(() => {
          console.log("user", this.props.user)
          console.log("currentUser", this.props.currentUser)
          if(this.props.user.id !== this.props.currentUser.id){
            let chatRoom = createChat(this.props.user.id, this.props.currentUser.id)
            this.setState({
              chatRoom
            })
          }
        })
      })
    })

  }

  clickFollow = event => {
    this.props.followActions.followUser(this.props.user)
    .then(() => {
      console.log(this.props)
      if(this.props.follow.relationship_made){
        this.setState({
          buttonText: 'Unfollow',
          buttonColor: 'blue'
        })
      } else {
        this.setState({
          buttonText: 'Follow',
          buttonColor: 'yellow'
        })
      }
    })
  }

  clickChat = event => {
    this.props.chatActions.joinChat(this.state.chatRoom)
  }

  render() {
    console.log(this.props)
    return (
      <center>
        <Card fluid color={this.state.buttonColor}>
          <Image src={require('../img/sample-cover.jpg')} fluid />
          <Card.Content>
            <Card.Header>
              <h1>{this.props.user.name}</h1>
            </Card.Header>
          </Card.Content>
          <Card.Content extra style={{width: '50%'}}>
            <div className={'user-card-followers-count'} style={{float: 'left'}}>
              <Icon name='users' /> Followers: {this.props.user.followers}
            </div>
            <div className={'user-card-following-count'} style={{float: 'right'}}>
              <Icon name='bell' /> Following: {this.props.user.following}
            </div>
          </Card.Content>
          {this.props.user.id !== this.props.currentUser.id &&
            <Card.Content extra style={{width: '50%'}}>
              <Button disabled={this.state.disabled} onClick={this.clickFollow} content={this.state.buttonText} color={this.state.buttonColor} compact icon={'bell'} labelPosition={'left'} />
              <Button disabled={this.state.buttonText === 'Follow'} compact icon={'comments'} labelPosition={'left'} content={'Chat'} onClick={this.clickChat} />
            </Card.Content>
          }
        </Card>
      </center>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.users, follow: state.follow, currentUser: state.currentUser, chat: state.chat}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
    followActions: bindActionCreators(followActions, dispatch),
    currentUserActions: bindActionCreators(currentUserActions, dispatch),
    chatActions: bindActionCreators(chatActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPageHeader));
