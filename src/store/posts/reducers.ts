import { produce } from 'immer'
import * as fromActions from './actions'
import { PostData } from '../../services'

export const initialState = {
  loadingData: {} as PostData
}
export type State = typeof initialState

export const reducer = (state = initialState, action: fromActions.Actions): State => {
  switch (action.type) {
    case fromActions.SET_POST:
      return produce(state, draft => {
        draft.loadingData = action.payload
      })
    default: return state
  }
}
