import { produce } from 'immer'
import * as fromActions from './actions'

export const initialState = {
  loading: false,
  error: {} 
}
export type State = typeof initialState

export const reducer = (state = initialState, action: fromActions.Actions): State => {

  switch (action.type) {
    case fromActions.SET_ERROR:
      return produce(state, draft => {
        draft.error = action.payload
      })
    case fromActions.SET_LOADING:
      return produce(state, draft => {
        console.log('[ COMMON REDUCER - LOADING]', state)
       draft.loading = action.payload
      })
    default: return state
  }
}
