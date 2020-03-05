import { ActionsUnion, createAction } from '../utils'

export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'LOADING'

export const Actions = {
  setLoading: (loading: boolean) => createAction(SET_LOADING, loading),
  setError: (error: Error) => createAction(SET_ERROR, error)
}

export type Actions = ActionsUnion<typeof Actions>
