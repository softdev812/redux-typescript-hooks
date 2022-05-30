export interface BoardState {
  data: any[];
  loading: boolean;
  error: null | string;
}

export enum BoardActionTypes {
  FETCH_BOARD_DATA = 'FETCH_BOARD_DATA',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR'
}

interface FetchBoardDataAction {
  type: BoardActionTypes.FETCH_BOARD_DATA;
}

interface FetchSuccessAction {
  type: BoardActionTypes.FETCH_SUCCESS;
  payload: any[];
}

interface FetchErrorAction {
  type: BoardActionTypes.FETCH_ERROR;
  payload: string;
}

export type BoardAction = FetchBoardDataAction | FetchSuccessAction | FetchErrorAction