import React from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
// import App from '../App'
import SignIn from './SignIn'
import MainPage from './MainPage'
import AllPosts from './AllPosts'
import UserPage from './UserPage'

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
        <div>
          <Route exact path={'/'} component={SignIn} />
          <PrivateRoute path={'/home'} component={MainPage} />
          <PrivateRoute path={'/all'} component={AllPosts} />
          <PrivateRoute path={'/users/:id'} component={UserPage} />
        </div>
      </Router>
    )
  }
}
