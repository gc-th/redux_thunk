import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { ActionsUnion, createAction } from '../utils'
import { AnyAction } from 'redux'
import { Actions as CommonActions } from '../common/actions'
import { loadPost, PostData } from '../../services'

export const SET_POST = 'SET_POST'

export const Actions = {
  setPost: (payload: PostData) => createAction(SET_POST, payload)
}

export const AsyncActions = {
  getPost: (): ThunkAction<Promise<PostData | void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<PostData | void> => {
      dispatch(CommonActions.setLoading(true))
      try {
        const test = await loadPost()
        dispatch(Actions.setPost(test))
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
