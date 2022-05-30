export interface CounterState {
  value: number; 
}

export enum CounterActionTypes {
  FETCH_INCREMENT = 'FETCH_INCREMENT',
  FETCH_DECREMENT = 'FETCH_DECREMENT',
  SET_RESULT = 'SET_RESULT'
}

interface CounterIncAction {
  type: CounterActionTypes.FETCH_INCREMENT
  payload: any
}

interface CounterDecAction {
  type: CounterActionTypes.FETCH_DECREMENT
  payload: any
}

export type CounterAction = CounterIncAction 
  | CounterDecAction