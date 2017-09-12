import React from 'react'
import {Card, Button, Segment, Image, Icon, Modal, Form, Transition} from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../actions/userActions'
import * as currentUserActions from '../actions/currentUserActions'
import * as sessionActions from '../actions/sessionActions'
import * as createPostActions from '../actions/createPostActions'

class CurrentUserCard extends React.Component {

  state = {
    visible: false,
    post: '',
    modalHeader: 'post your cry',
    modalHeaderToggle: true
  }

  componentDidMount(){
    this.props.actions.loadCurrentUser()
  }

  handleLogOut = () => {
    console.log(this.props)
    console.log('LOG OUT BUTTON CLICKED HERE')
    this.props.userActions.clearUserStore()
    this.props.sessionActions.logOutUser()
  }

  toggleModal = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  closeAndClearModal = () => {
    this.setState({
      visible: false,
      post: ''
    })
  }

  handleChange = event => {
    this.setState({
      post: event.target.value
    }, () => console.log(this.state.post))
  }

  submitPost = event => {
    event.preventDefault()
    this.props.postActions.createPost({content: this.state.post})
    .then(() => {
      if(!!this.props.result.error){
        this.setState({
          modalHeader: this.props.result.error,
          modalHeaderToggle: !this.state.modalHeaderToggle
        }, () => {
          setTimeout(() => {
            this.setState({
              modalHeader: 'post your cry'
            })
          }, 2000)
        })
      } else {
        this.closeAndClearModal()
      }
    })
  }

  render() {
    console.log('CurrentUserCard', this.props)
    return(
      <div>
        <Modal open={this.state.visible} onClose={this.closeAndClearModal} dimmer={'blurring'} size={'tiny'}>
          <Transition visible={this.state.modalHeaderToggle} animation={'flash'} duration={500}>
            <Modal.Header>{this.state.modalHeader}</Modal.Header>
          </Transition>
          <Form onSubmit={this.submitPost}>
            <Modal.Content style={{padding: '14px'}}>
              <center></center>
              <Form.TextArea className={'user-card-modal-text-area'} value={this.state.post} onChange={this.handleChange}></Form.TextArea>
              <center></center>
            </Modal.Content>
            <Modal.Actions style={{paddingBottom: '14px', paddingLeft: '14px', paddingRight: '14px', overflow: 'auto'}}>
              <Button.Group floated={'right'}>
                <Button type={'submit'} color={'blue'}>cry</Button>
                <Button.Or />
                <Button secondary onClick={this.closeAndClearModal}>cancel</Button>
              </Button.Group>
            </Modal.Actions>
          </Form>
        </Modal>
        <Card>
          <Image src={require('../img/sample-cover.jpg')} fluid />
          <Card.Content style={{paddingLeft: 0, paddingRight: 0}}>
            <Card.Header>
              <div className={'user-card-header'}>
                <div className={'user-card-header-image'}>
                  <Image shape={'circular'} alt={'profile-pic'} src={'./test-avatar.png'} style={{
                    width: '75px',
                    height: '75px'
                  }}/>
                </div>
                <div className={'user-card-header-name'}>
                  <h1><a href={'/users/' + this.props.user.id} style={{color: 'black'}}>{this.props.user.name}</a></h1>
                </div>
              </div>
            </Card.Header>
          </Card.Content>
          <Card.Content className={'user-card-footer'} style={{paddingLeft: 0, paddingRight: 0}} extra>
            <div className={'user-card-followers-count'}>
              <Icon name='users' /> Followers: {this.props.user.followers}
            </div>
            <div className={'user-card-following-count'}>
              <Icon name='bell' /> Following: {this.props.user.following}
            </div>
          </Card.Content>
          <Card.Content>
            <Button content={'Post Cry'} compact size={'mini'} primary icon={'write'} labelPosition={'left'} onClick={this.toggleModal} />
            <Button compact size={'mini'} color={'yellow'} onClick={this.handleLogOut}>Log Out</Button>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {user: state.currentUser, result: state.createPost}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(currentUserActions, dispatch),
    sessionActions: bindActionCreators(sessionActions, dispatch),
    postActions: bindActionCreators(createPostActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserCard);
