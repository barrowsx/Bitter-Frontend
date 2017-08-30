import React from 'react'
import {Card, Form, Divider, Button, Segment, Image, Icon, Feed} from 'semantic-ui-react'

class MainPage extends React.Component {
  render() {
    const events = [{
      date: '1543 Hours Ago',
      image: './bitter-icon.png',
      meta: '4 Likes',
      summary: 'Elliot Fu added you as a friend',
    }, {
      date: '42 days ago',
      image: './bitter-icon.png',
      meta: '1 Like',
      summary: 'Helen Troy added 2 new illustrations',
    }, {
      date: '33 days ago',
      image: './bitter-icon.png',
      meta: '8 Likes',
      summary: 'Joe Henderson posted on his page',
      extraText: "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
    }, {
      date: '45 days ago',
      image: './bitter-icon.png',
      meta: '41 Likes',
      summary: 'Justen Kitsune added 2 new photos of you',
      extraText: 'Look at these fun pics I found from a few years ago. Good times.',
    },
    {
      date: '5 Hours Ago',
      image: './bitter-icon.png',
      meta: '4 Likes',
      summary: 'Elliot Fu added you as a friend',
    }, {
      date: '5 days ago',
      image: './bitter-icon.png',
      meta: '1 Like',
      summary: 'Helen Troy added 2 new illustrations',
    }, {
      date: '5 days ago',
      image: './bitter-icon.png',
      meta: '8 Likes',
      summary: 'Joe Henderson posted on his page',
      extraText: "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
    }, {
      date: '5 days ago',
      image: './bitter-icon.png',
      meta: '41 Likes',
      summary: 'Justen Kitsune added 2 new photos of you',
      extraText: 'Look at these fun pics I found from a few years ago. Good times.',
    },
    {
      date: '1 Hour Ago',
      image: './bitter-icon.png',
      meta: '4 Likes',
      summary: 'Elliot Fu added you as a friend',
    }, {
      date: '4 days ago',
      image: './bitter-icon.png',
      meta: '1 Like',
      summary: 'Helen Troy added 2 new illustrations',
    }, {
      date: '3 days ago',
      image: './bitter-icon.png',
      meta: '8 Likes',
      summary: 'Joe Henderson posted on his page',
      extraText: "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
    }, {
      date: '4 days ago',
      image: './bitter-icon.png',
      meta: '41 Likes',
      summary: 'Justen Kitsune added 2 new photos of you',
      extraText: 'Look at these fun pics I found from a few years ago. Good times.',
    }]
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
            <center>
              <Segment>
                <Feed events={events}>
                </Feed>
              </Segment>
            </center>
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
