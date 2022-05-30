import {combineReducers} from 'redux'
import { counterReducer } from './counterReducer'
import { boardReducer } from './boardReducer'

export const rootReducer = combineReducers({
    counter: counterReducer,
    board: boardReducer
})

export type RootState = ReturnType<typeof rootReducer>