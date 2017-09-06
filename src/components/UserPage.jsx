import React from 'react'
import {Card, Button, Segment, Image} from 'semantic-ui-react'
import UserPostFeed from './UserPostFeed'
import UserPageHeader from './UserPageHeader'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../actions/userActions'

class UserPage extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className={'main-page-wrapper'}>
        <div className={'user-page-user-info'}>
          <UserPageHeader userId={this.props.match.params} />
        </div>
        <div className={'main-page-pane-wrapper'}>
          <div className={'main-page-left-pane'}>
          </div>
          <div className={'user-page-feed'} style={{overflow: 'auto'}}>
            <Segment>
              <UserPostFeed />
            </Segment>
          </div>
          <div className={'main-page-right-pane'}>
          </div>
        </div>
      </div>)
  }
}

function mapStateToProps(state){
  return {active: state}
}

export default connect(mapStateToProps, null)(UserPage);
