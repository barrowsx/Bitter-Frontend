import React from 'react'
import {Card, Button, Segment, Image} from 'semantic-ui-react'
import UserPostFeed from './UserPostFeed'

class UserPage extends React.Component {

  render() {
    return (
      <div className={'main-page-wrapper'}>
        <div className={'main-page-header'}>
          <center><Image className={'sign-in-logo'} src={require('../img/bitter-icon.png')} width={50} height={50}/></center>
        </div>
        <div className={'main-page-pane-wrapper'}>
          <div className={'main-page-left-pane'}>
          </div>
          <div className={'main-page-feed'}>
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

export default UserPage;
