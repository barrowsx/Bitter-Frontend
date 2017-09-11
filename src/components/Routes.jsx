import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
// import App from '../App'
import SignIn from './SignIn'
import MainPage from './MainPage'
import AllPosts from './AllPosts'
import UserPage from './UserPage'
import SocketTest from './SocketTest'
import UserPageName from './UserPageName'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
      !!sessionStorage.jwt ? (
        <Component {...props} />
      ) : (
        <Redirect to={'/'} />
      )
  )} />
)

export default class Routes extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path={'/'} component={SignIn} />
          <PrivateRoute path={'/chat'} component={SocketTest} />
          <PrivateRoute path={'/home'} component={MainPage} />
          <PrivateRoute path={'/all'} component={AllPosts} />
          <PrivateRoute path={'/users/:id'} component={UserPage} />
        </Switch>
      </Router>
    )
  }
}
