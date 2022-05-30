import { CounterActionTypes } from "../../types/counter";

export const actionInc = (state:number = 0, value: number) => {
    return ({type: CounterActionTypes.FETCH_INCREMENT, payload:state + value})
}

export const actionDec = (state:number = 0, value: number) => {
    return ({type: CounterActionTypes.FETCH_DECREMENT, payload:state - value})
}