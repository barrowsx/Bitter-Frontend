import React from 'react'
import {Card, Button, Segment, Image, Icon} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../actions/userActions'
import * as followActions from '../actions/followActions'
import * as followerActions from '../actions/followerActions'
import * as followingActions from '../actions/followingActions'

class UserPageHeader extends React.Component {

  state = {
    buttonText: 'Follow',
    buttonColor: 'yellow',
    disabled: false
  }

  componentDidMount() {
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
          <Card.Content extra style={{width: '40%'}}>
            <div className={'user-card-followers-count'} style={{float: 'left'}}>
              <Icon name='users' /> Followers: {this.props.user.followers}
            </div>
            <div className={'user-card-following-count'} style={{float: 'right'}}>
              <Icon name='bell' /> Following: {this.props.user.following}
            </div>
          </Card.Content>
          <Card.Content extra style={{width: '40%'}}>
            <Button disabled={this.state.disabled} onClick={this.clickFollow} content={this.state.buttonText} color={this.state.buttonColor} compact icon={'bell'} labelPosition={'left'} />
          </Card.Content>
        </Card>
      </center>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.users, follow: state.follow}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
    followActions: bindActionCreators(followActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageHeader);
