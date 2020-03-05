import { produce } from 'immer'
import * as fromActions from './actions'

export const initialState = {
  counter: 0
}
export type State = typeof initialState

export const reducer = (state = initialState, action: fromActions.Actions): State => {

  switch (action.type) {
    case fromActions.ADD:
      return produce(state, draft => {
        draft.counter = draft.counter + action.payload
      })
    case fromActions.SUBTRACT:
      return produce(state, draft => {
        draft.counter = draft.counter - action.payload
      })
    case fromActions.DECREASE:
      return produce(state, draft => {
        draft.counter = draft.counter - 1
      })
    case fromActions.INCREMENT:
      return produce(state, draft => {
        draft.counter = draft.counter + 1
      })
    default: return state
  }
}
