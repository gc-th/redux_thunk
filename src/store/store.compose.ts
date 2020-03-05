import { combineReducers } from 'redux'
import { CounterReducer, CommonReducer, PostReducer } from './'

export interface AppState {
  posts: PostReducer.State,
  counter: CounterReducer.State,
  common: CommonReducer.State
}

export const rootReducer = combineReducers<AppState>({
  posts: PostReducer.reducer,
  counter: CounterReducer.reducer,
  common: CommonReducer.reducer
})
