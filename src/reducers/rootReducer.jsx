import React from 'react'
import {combineReducers} from 'redux'
import {Redirect} from 'react-router-dom'
import * as types from '../actions/actionTypes'
import session from './sessionReducer'
import users from './userReducer'
import posts from './postReducer'
import followers from './followerReducer'
import following from './followingReducer'
import likes from './likeReducer'
import createPost from './createPostReducer'
import likePost from './likePostReducer'
import follow from './followReducer'

const rootReducer = combineReducers({
  session,
  users,
  posts,
  followers,
  following,
  likes,
  createPost,
  likePost,
  follow
})

export default rootReducer
