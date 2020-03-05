import { createAction, ActionsUnion } from '../utils'

export const ADD = '[counter] ADD'
export const INCREMENT = '[counter] INCREMENT'
export const DECREASE = '[counter] DECREASE'
export const SUBTRACT = '[counter] SUBTRACT'
 
export const Actions = {
  increment: () => createAction(INCREMENT),
  decrease: () => createAction(DECREASE),
  add: (value: number) => createAction(ADD, value),
  subtract: (value: number) => createAction(SUBTRACT, value),
}

export type Actions = ActionsUnion<typeof Actions>
