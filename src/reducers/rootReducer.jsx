import {combineReducers} from 'redux'
import session from './sessionReducer'
import users from './userReducer'
import posts from './postReducer'
import followers from './followerReducer'
import following from './followingReducer'

const rootReducer = combineReducers({
  session,
  users,
  posts,
  followers,
  following
})

export default rootReducer
