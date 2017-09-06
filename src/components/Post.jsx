import React from 'react'
import {Feed, Icon, Transition, Divider, Loader} from 'semantic-ui-react'
import TimeAgo from 'react-timeago'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as likeActions from '../actions/likeActions'
import * as likePostActions from '../actions/likePostActions'

class Post extends React.Component {

  state = {
    likes: 0,
    loading: true
  }

  likePost = event => {
    this.setState({
      loading: true
    })
    this.props.likeActions.likePost(this.props.postId)
    .then(() => {
      this.setState({
        likes: this.props.like.likes,
        loading: false
      })
    })
  }

  componentDidMount(){
    this.props.likePostActions.loadPostLikes(this.props.postId)
    .then(() => {
      this.setState({
        likes: this.props.likePost.likes,
        loading: false
      })
    })
  }

  render() {
    return (
      <Transition transitionOnMount={true} animation={'fade'} duration={1500}>
        <div>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <img alt='profile-pic' src={require('../img/test-avatar.png')} style={{
                  width: '50px',
                  height: '50px'
                }}/>
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  {this.props.userId > 0 ? (<Feed.User href={'/users/' + this.props.userId}>{this.props.user}</Feed.User>) : (<Feed.User>{this.props.user}</Feed.User>)}
                  {this.props.userId > 0 &&
                    <Feed.Date><TimeAgo date={this.props.createdAt} /></Feed.Date>
                  }
                </Feed.Summary>
                <Feed.Extra text>
                  {this.props.content}
                </Feed.Extra>
                <Feed.Meta>
                  {this.props.userId > 0 &&
                    <Feed.Like onClick={event => {this.likePost(event)}}>
                      <Icon name='thumbs down'/>
                      {this.state.likes} dislikes
                    </Feed.Like>
                  }
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

function mapStateToProps(state){
  return {
    like: state.likes,
    likePost: state.likePost
  }
}

function mapDispatchToProps(dispatch){
  return {
    likeActions: bindActionCreators(likeActions, dispatch),
    likePostActions: bindActionCreators(likePostActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
