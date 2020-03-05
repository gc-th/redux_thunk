import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './store.compose'

export const initStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}
