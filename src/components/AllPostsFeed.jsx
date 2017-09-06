import React from 'react'
import {Loader} from 'semantic-ui-react'
import Post from './Post'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as postActions from '../actions/postActions'
import * as userActions from '../actions/userActions'

class AllPostsFeed extends React.Component {

  pollAllPosts(){
    this.props.actions.fetchAllPosts()
    setTimeout(this.pollAllPosts.bind(this), 2000)
  }

  componentDidMount(){
    // this.pollAllPosts()
    this.pollAllPosts()
  }

  render() {
    console.log(this.props.posts)
    return (
      <div>
        {(() => {
          if (Object.prototype.toString.call(this.props.posts) === '[object Array]') {
            if (this.props.posts.length === 0) {
              return (
                <div className={'feed-loading'}>
                  <center>
                    <h5>wait for the posts to load...</h5>
                  </center>
                  <br></br>
                  <Loader active inline='centered'/>
                  <center>
                    <h6>or don't, i don't really care...</h6>
                  </center>
                </div>
              )
            } else {
              return (this.props.posts.map(post => {
                return (<Post key={'post-' + post.id} user={post.user} content={post.content} createdAt={post.created_at} postId={post.id} likes={post.likes} userId={post.user_id}/>)
              }))
            }
          } else {
            return (
              <div>
                <center>
                  <h1>Error loading feed</h1>
                </center>
                <center>
                  <h3>{this.props.posts.error}</h3>
                </center>
                <center>
                  <h5>(go log in you mongoloid)</h5>
                </center>
              </div>
            )
          }
        })()
}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPostsFeed);
