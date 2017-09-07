import React from 'react'
import {Card, Button, Segment, Image, Icon, Sidebar, Menu} from 'semantic-ui-react'
import AllPostsFeed from './AllPostsFeed'
import equal from 'deep-equal'

class AllPosts extends React.Component {

  state = {
    visible: false
  }

  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    return (!equal(this.props, nextProps) || !equal(this.state, nextState))
  }

  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation={'push'} direction={'top'} visible={this.state.visible} inverted>
          <Menu.Item name='home' onClick={() => {window.location = 'http://bitter-negwork.herokuapp.com/home'}}>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item name='users'>
            <Icon name='users' />
            All Cries
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <div className={'main-page-wrapper'}>
            <div className={'main-page-header'}>
              <center><Image className={'sign-in-logo'} src='./bitter-icon.png' width={50} height={50} onClick={this.toggleVisibility}/></center>
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
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      )
  }
}

export default AllPosts;
