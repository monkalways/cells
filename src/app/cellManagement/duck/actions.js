import types from './types';

const getCellInfoSuccess = (cellInfo) => ({
  type: types.GET_CELL_INFO_SUCCESS,
  payload: {
    cellInfo
  },
});

const getCellInfoFailure = (errorMessage) => ({
  type: types.GET_CELL_INFO_FAILURE,
  errorMessage: {
    errorMessage
  }
});

const getCellDetaineesSuccess = (cellDetainees) => ({
  type: types.GET_CELL_DETAINEES_SUCCESS,
  payload: {
    cellDetainees
  },
});

const getCellDetaineesFailure = (errorMessage) => ({
  type: types.GET_CELL_DETAINEES_FAILURE,
  errorMessage: {
    errorMessage
  }
});

const saveTemporaryAbsenceSuccess = (cellInfo, id) => ({
  type: types.SAVE_TEMPORARY_ABSENCE_SUCCESS,
  payload: {
    cellInfo
  },
  custodyEventId: {
    id
  },
});

export default {
  getCellInfoSuccess,
  getCellInfoFailure,
  getCellDetaineesSuccess,
  getCellDetaineesFailure,
  saveTemporaryAbsenceSuccess
};
