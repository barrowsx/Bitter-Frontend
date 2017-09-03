import React from 'react'
import {Card, Button, Segment, Image} from 'semantic-ui-react'
import AllPostsFeed from './AllPostsFeed'

class AllPosts extends React.Component {
  render() {
    return (
      <div className={'main-page-wrapper'}>
        <div className={'main-page-header'}>
          <center><Image className={'sign-in-logo'} src='./bitter-icon.png' width={50} height={50}/></center>
        </div>
        <div className={'main-page-pane-wrapper'}>
          <div className={'main-page-left-pane'}>
          </div>
          <div className={'main-page-feed'}>
            <Segment>
              <AllPostsFeed />
            </Segment>
          </div>
          <div className={'main-page-right-pane'}>
          </div>
        </div>
      </div>)
  }
}

export default AllPosts;
