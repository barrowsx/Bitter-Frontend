import React from 'react'
import {Card, Form, Divider, Button, Segment, Image, Icon, Feed} from 'semantic-ui-react'
import PostFeed from './PostFeed'

class MainPage extends React.Component {
  render() {
    return (
      <div className={'main-page-wrapper'}>
        <div className={'main-page-header'}>
          <center><Image className={'sign-in-logo'} src='./bitter-icon.png' width={50} height={50}/></center>
        </div>
        <div className={'main-page-pane-wrapper'}>
          <div className={'main-page-left-pane'}>
            <center>
              <Card>
                <Card.Content>
                  At some point there will be
                  user data here but for now
                  it's just empty
                </Card.Content>
              </Card>
            </center>
          </div>
          <div className={'main-page-feed'}>
            <Segment>
              <PostFeed />
            </Segment>
          </div>
          <div className={'main-page-right-pane'}>
            <center>
              <Card>
                <Card.Content>
                  At some point there will be
                  followers here but for now
                  it's just empty
                </Card.Content>
              </Card>
            </center>
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage;
