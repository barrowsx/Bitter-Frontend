import {combineReducers} from 'redux'
import session from './sessionReducer'
import users from './userReducer'
import posts from './postReducer'

const rootReducer = combineReducers({
  session,
  users,
  posts
})

export default rootReducer
