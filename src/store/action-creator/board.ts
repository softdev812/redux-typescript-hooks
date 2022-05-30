import {Dispatch} from 'redux'
import { BoardAction, BoardActionTypes } from '../../types/board'
import axios from 'axios'

export const fetchBoardData = () => {
  return async(dispatch: Dispatch<BoardAction>) => {
    try {
      dispatch({ type: BoardActionTypes.FETCH_BOARD_DATA })
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => {
        dispatch({type:BoardActionTypes.FETCH_SUCCESS, payload:res.data})
      }, 300)
    } catch (e) {
      dispatch({type:BoardActionTypes.FETCH_ERROR, payload: 'Failed download data!'})
    }
  }
}