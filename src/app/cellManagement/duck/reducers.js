import { combineReducers } from 'redux';
import types from './types';

/* CellManagement State shape
{
    cellInfo: {},
    cellDetainees: []
}
*/

const cellInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_CELL_INFO_SUCCESS:
      return action.payload.cellInfo
    case types.GET_CELL_INFO_FAILURE:
      return state;
    default:
      return state;
  }
};

const cellDetaineesReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_CELL_DETAINEES_SUCCESS:
      return action.payload.cellDetainees;
    case types.GET_CELL_DETAINEES_FAILURE:
      return state;
    default:
      return state;
  }
};

const reducer = combineReducers({
  cellInfo: cellInfoReducer,
  cellDetainees: cellDetaineesReducer,
});

export default reducer;