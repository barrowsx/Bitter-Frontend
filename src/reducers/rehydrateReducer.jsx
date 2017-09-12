import initialState from './initialState'

export default function rehydrateReducer(state = initialState.rehydrate, action){
  switch(action.type){
    case 'persist/REHYDRATE':
      return { ...state, persistedState: action.payload }
    default:
      return state
  }
}
