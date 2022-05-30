import { CounterAction, CounterActionTypes, CounterState } from "../../types/counter";

const initialState: CounterState = {
    value: 0
}

export const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
        case CounterActionTypes.FETCH_INCREMENT:
            return {...state, value:action.payload}
        case CounterActionTypes.FETCH_DECREMENT:
            return {...state, value:action.payload}
        
        default: 
            return state
    }
}