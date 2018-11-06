import types from './types';

const getCellDetailsSuccess = (cellDetails) => ({
  type: types.GET_CELL_DETAILS_SUCCESS,
  cellDetails,
});

const getCellDetainees = () => ({
  type: types.GET_CELL_DETAINEES,
});

const getCellDetaineesSuccess = (cellDetainees) => ({
  type: types.GET_CELL_DETAINEES_SUCCESS,
  cellDetainees,
});

const visualCheck = (detainee) => ({
  type: types.VISUAL_CHECK,
  detainee,
});

const verbalCheck = (detainee) => ({
  type: types.VERBAL_CHECK,
  detainee,
});

const saveCellCheck = () => ({
  type: types.SAVE_CELL_CHECK,
});

const saveCellCheckSuccess = () => ({
  type: types.SAVE_CELL_CHECK_SUCCESS,
});

const acceptMeal = (detainee) => ({
  type: types.ACCEPT_MEAL,
  detainee,
});

const rejectMeal = (detainee) => ({
  type: types.REJECT_MEAL,
  detainee,
});

const notApplicableMeal = (detainee) => ({
  type: types.NOT_APPLICABLE_MEAL,
  detainee,
});

const saveMeal = () => ({
  type: types.SAVE_MEAL,
});

const saveMealSuccess = () => ({
  type: types.SAVE_MEAL_SUCCESS,
});

const acceptMedication = (detainee) => ({
  type: types.ACCEPT_MEDICATION,
  detainee,
});

const rejectMedication = (detainee) => ({
  type: types.REJECT_MEDICATION,
  detainee,
});

const notApplicableMedication = (detainee) => ({
  type: types.NOT_APPLICABLE_MEDICATION,
  detainee,
});

const saveMedication = () => ({
  type: types.SAVE_MEDICATION,
});

const saveMedicationSuccess = () => ({
  type: types.SAVE_MEDICATION_SUCCESS,
});

export default {
  getCellDetailsSuccess,
  getCellDetaineesSuccess,
  getCellDetainees,
  visualCheck,
  verbalCheck,
  saveCellCheck,
  saveCellCheckSuccess,
  acceptMeal,
  rejectMeal,
  notApplicableMeal,
  saveMeal,
  saveMealSuccess,
  acceptMedication,
  rejectMedication,
  notApplicableMedication,
  saveMedication,
  saveMedicationSuccess,
};
