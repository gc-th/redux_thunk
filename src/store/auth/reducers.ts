import { produce } from 'immer'
import * as fromActions from './actions'

export const initialState = {
  loadingData: {}
}
export type State = typeof initialState

export const reducer = (state = initialState, action: fromActions.Actions): State => {
  switch (action.type) {
    case fromActions.SET_TOKEN:
      return produce(state, draft => {
        draft.loadingData = action.payload
      })
    default: return state
  }
}
