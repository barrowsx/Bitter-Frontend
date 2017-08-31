import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import App from '../App'
import SignIn from './SignIn'
import MainPage from './MainPage'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
      !!sessionStorage.jwt ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
            pathname: '/',
            state: { from: props.location }
        }} />
      )
  )} />
)

export default class Routes extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact path={'/'} render={() => (
              !!sessionStorage.jwt ? (
                <Redirect to='/home'/>
              ) : (
                <SignIn />
              )
            )} />
          <PrivateRoute path={'/home'} component={MainPage} />
        </div>
      </Router>
    )
  }
}
