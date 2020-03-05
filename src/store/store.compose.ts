import { combineReducers } from 'redux'
import { CounterReducer, CommonReducer, AuthReducer } from './'

export interface AppState {
  auth: AuthReducer.State,
  counter: CounterReducer.State,
  common: CommonReducer.State
}

export const rootReducer = combineReducers<AppState>({
  auth: AuthReducer.reducer,
  counter: CounterReducer.reducer,
  common: CommonReducer.reducer
})
