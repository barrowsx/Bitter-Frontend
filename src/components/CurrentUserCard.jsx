import React from 'react'
import {Card, Button, Segment, Image, Icon} from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../actions/userActions'
import * as sessionActions from '../actions/sessionActions'

class CurrentUserCard extends React.Component {

  componentDidMount(){
    this.props.actions.loadCurrentUser()
  }

  handleLogOut = () => {
    console.log(this.props)
    this.props.actions.clearUserStore()
    this.props.sessionActions.logOutUser()
  }

  handleNewPost = () => {

  }

  render() {
    console.log(this.props)
    return(
      <Card>
        <Image src={'./sample-cover.jpg'} fluid />
        <Card.Content style={{paddingLeft: 0, paddingRight: 0}}>
          <Card.Header>
            <div className={'user-card-header'}>
              <div className={'user-card-header-image'}>
                <Image shape={'circular'} alt={'profile-pic'} src={'./test-avatar.png'} style={{
                  width: '75px',
                  height: '75px'
                }}/>
              </div>
              <div className={'user-card-header-name'}>
                <h1>{this.props.user.name}</h1>
              </div>
            </div>
          </Card.Header>
        </Card.Content>
        <Card.Content className={'user-card-footer'} style={{paddingLeft: 0, paddingRight: 0}} extra>
          <div className={'user-card-followers-count'}>
            <Icon name='users' /> Followers: {this.props.user.followers}
          </div>
          <div className={'user-card-following-count'}>
            <Icon name='bell' /> Following: {this.props.user.following}
          </div>
        </Card.Content>
        <Card.Content>
          <Button content={'Post Cry'} compact size={'mini'} primary icon={'write'} labelPosition={'left'} />
          <Button compact size={'mini'} color={'yellow'} onClick={this.handleLogOut}>Log Out</Button>
        </Card.Content>
      </Card>
    )
  }
}

function mapStateToProps(state){
  return {user: state.users}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions, dispatch),
    sessionActions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserCard);
