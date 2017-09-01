import React from 'react'
import {Feed, Icon, Transition, Divider} from 'semantic-ui-react'

class Post extends React.Component {

  generatePostDate(timestamp) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    let date = new Date(timestamp)
    return months[date.getUTCMonth()] + " " + date.getUTCDate() + ", " + date.getUTCFullYear()
  }

  render() {
    return (
      <Transition transitionOnMount={true} animation={'fly up'} duration={1500}>
        <div>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <img alt='profile-pic' src='./bitter-icon.png' style={{
                  width: '50px',
                  height: '50px'
                }}/>
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>{this.props.user}</Feed.User>
                  <Feed.Date>{this.generatePostDate(this.props.createdAt)}</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  {this.props.content}
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name='thumbs down'/>
                    Post ID: {this.props.postId}
                  </Feed.Like>
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

export default Post;
