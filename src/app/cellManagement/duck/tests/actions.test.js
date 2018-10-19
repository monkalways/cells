import { types } from '..';
import actions from '../actions';

describe('CellManagement actions', () => {
  it('should create an action to load a cellInfo object', () => {
    const cellInfo = {};
    const expectedAction = {
      type: types.GET_CELL_INFO_SUCCESS,
      payload: {
        cellInfo,
      },
    };
    expect(actions.getCellInfoSuccess(cellInfo)).toEqual(expectedAction);
  });

  it('should create an action to load a cellInfo object', () => {
    const errorMessage = 'error while loading cell info';
    const expectedAction = {
      type: types.GET_CELL_INFO_FAILURE,
      errorMessage: {
        errorMessage,
      },
    };
    expect(actions.getCellInfoFailure(errorMessage)).toEqual(expectedAction);
  });

  it('should create an action to load a cellDetainees object', () => {
    const cellDetainees = [];
    const expectedAction = {
      type: types.GET_CELL_DETAINEES_SUCCESS,
      payload: {
        cellDetainees,
      },
    };
    expect(actions.getCellDetaineesSuccess(cellDetainees)).toEqual(expectedAction);
  });

  it('should create an action to load the error message string', () => {
    const errorMessage = 'error while loading cell detainees';
    const expectedAction = {
      type: types.GET_CELL_DETAINEES_FAILURE,
      errorMessage: {
        errorMessage,
      },
    };
    expect(actions.getCellDetaineesFailure(errorMessage)).toEqual(expectedAction);
  });
});
