import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'
import {persistStore, autoRehydrate} from 'redux-persist'
import {asyncSessionStorage} from 'redux-persist/storages'

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
)

persistStore(store, {storage: asyncSessionStorage})

export default function configureStore(){
  return store
}
