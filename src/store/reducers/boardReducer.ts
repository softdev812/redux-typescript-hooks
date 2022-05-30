import { BoardAction, BoardActionTypes, BoardState } from '../../types/board'

const initialState: BoardState = {
  data: [],
  loading: false,
  error: null
}

export const boardReducer = (state = initialState, action: BoardAction): BoardState => {
  switch (action.type) {
    case BoardActionTypes.FETCH_BOARD_DATA:
      return { loading: true, error: null, data: [] }
    case BoardActionTypes.FETCH_SUCCESS:
      return { loading: false, error: null, data:action.payload }
    case BoardActionTypes.FETCH_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}