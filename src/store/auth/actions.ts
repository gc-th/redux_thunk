import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { ActionsUnion, createAction } from '../utils'
import { AnyAction } from 'redux'
import { Actions as CommonActions } from '../common/actions'
import { load, LoadingData } from '../../services'

export const SET_TOKEN = 'SET_TOKEN'

export const Actions = {
  setToken: (payload: LoadingData) => createAction(SET_TOKEN, payload)
}

export const AsyncActions = {
  login: (userName: string, password: string): ThunkAction<Promise<LoadingData | void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<LoadingData | void> => {
      dispatch(CommonActions.setLoading(true))
      try {
        const test = await load()
        dispatch(Actions.setToken(test))
        dispatch(CommonActions.setLoading(false))
        return test
      } catch(err) {
        dispatch(CommonActions.setError(err))
      }
      dispatch(CommonActions.setLoading(false))
    }
  }
}

export type Actions = ActionsUnion<typeof Actions >
export type AsyncActions = ActionsUnion<typeof AsyncActions>
