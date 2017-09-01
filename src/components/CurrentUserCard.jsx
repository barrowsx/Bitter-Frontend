import React from 'react'
import {Card, Button, Segment, Image} from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../actions/userActions'

class CurrentUserCard extends React.Component {

  componentDidMount(){
    this.props.actions.loadCurrentUser()
  }

  render() {
    console.log(this.props)
    return(
      <Card>
        <Image className={'user-card-header'} src={'./sample-cover.jpg'} fluid />
        <Card.Content>
          <Card.Header>
            <h1>{this.props.user.name}</h1>
          </Card.Header>
        </Card.Content>
        <Card.Content className={'user-card-footer'} style={{paddingLeft: 0, paddingRight: 0}} extra>
          <div className={'user-card-followers-count'}>
            Followers: {this.props.user.followers}
          </div>
          <div className={'user-card-following-count'}>
            Following: {this.props.user.following}
          </div>
        </Card.Content>
        <Card.Content>
          <Button compact size={'mini'} color={'yellow'}>Log Out</Button>
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
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserCard);
