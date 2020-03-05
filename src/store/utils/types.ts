/**
 * use this type definition instead of `Function` type constructor
 */
export type AnyFunction = (...args: any[]) => any

/**
 * simple alias to save you keystrokes when defining JS typed object maps
 */
export type StringMap<T> = { [key: string]: T }

/**
 * Action can exists only in 2 shapes. type only or type with payload
 */
export type Action<T extends string = string, P = void> = P extends void ? Readonly<{ type: T }> : Readonly<{ type: T; payload: P }>


export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>
export type ActionsOfType<ActionUnion, ActionType extends string> = ActionUnion extends Action<ActionType> ? ActionUnion : never
