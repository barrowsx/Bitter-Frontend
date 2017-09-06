import React from 'react'
import {Feed, Divider, Transition, Icon} from 'semantic-ui-react'

class UserFeed extends React.Component {
  render(){
    return(
      <Transition transitionOnMount={true} animation={'fade'} duration={1500}>
        <div>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <img alt='profile-pic' src='./test-avatar.png' style={{
                  width: '50px',
                  height: '50px'
                }}/>
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User href={'/users/' + this.props.userId}>{this.props.user}</Feed.User>
                </Feed.Summary>
                <Feed.Meta as={'string'}>
                  <Icon name='users' /> {this.props.followers}
                  <Icon name='bell' /> {this.props.following}
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
          <Divider/>
        </div>
      </Transition>
    )
  }
}

export default UserFeed;
