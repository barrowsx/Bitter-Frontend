import React from 'react'
import {Card, Button, Segment, Image, Icon, Sidebar, Menu} from 'semantic-ui-react'
import AllPostsFeed from './AllPostsFeed'
import equal from 'deep-equal'
import SocketTest from './SocketTest'
import {TitleBar} from 'react-desktop/windows'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class AllPosts extends React.Component {

  state = {
    visible: false,
    chatVisible: false
  }

  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  toggleChatVisibility = () => {
    this.setState({
      chatVisible: !this.state.chatVisible
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    return (!equal(this.props, nextProps) || !equal(this.state, nextState))
  }

  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation={'push'} direction={'top'} visible={this.state.visible} inverted>
          <Menu.Item name='home' onClick={() => {window.location = 'http://localhost:3001/home'}}>
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
              <center><Image className={'sign-in-logo'} src={require('../img/bitter-icon.png')} width={50} height={50} onClick={this.toggleVisibility}/></center>
            </div>
            <div className={'main-page-pane-wrapper'}>
              <div className={'main-page-left-pane'}>
                <center>
                  <div style={{position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 0)', zIndex: 10}}>
                    <TitleBar title={'bitter chat'} controls isMaximized={this.state.chatVisible} onMinimizeClick={() => { this.setState({ chatVisible: false }) }} onMaximizeClick={this.toggleChatVisibility} onRestoreDownClick={() => { this.setState({ chatVisible: false }) }} onCloseClick={() => { this.setState({ chatVisible: false }) }} />
                    {this.state.chatVisible &&
                      <SocketTest />
                    }
                  </div>
                </center>
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

function mapStateToProps(state){
  return {chat: state.chat}
}

export default connect(mapStateToProps, null)(AllPosts);
