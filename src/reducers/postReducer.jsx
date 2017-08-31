import * as types from '../actions/actionTypes'
import UserApi from '../api/userApi'
import initialState from './initialState'
import {BrowserRouter as Router, Redirect} from 'react-router-dom'

export default function postReducer(state = initialState.posts, action){
  switch(action.type){
    case types.POST_FETCH_SUCCESS:
      return action.posts
    default:
      return state
  }
}
