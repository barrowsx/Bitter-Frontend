import React from 'react'
import {Feed, Divider, Icon} from 'semantic-ui-react'

class Post extends React.Component {
  render() {
    return (
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src='./bitter-icon.png' style={{width: '50px', height: '50px'}}/>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>Not A Real User</Feed.User> <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>
              Testing
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='thumbs down'/> Number of Likes Goes Here
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    )
  }
}

export default Post;
