import { push } from 'connected-react-router';

import actions from './actions';
import services from './services';
import utils from '../../utils';

/* OVERVIEW */

const getCellDetails = (
  name,
  getCellDetailsService = services.getCellDetails,
  getCellDetailsSuccessAction = actions.getCellDetailsSuccess,
) => async (dispatch) => {
  try {
    const payload = await getCellDetailsService(name);
    dispatch(getCellDetailsSuccessAction(payload));
  } catch (error) {
    utils.sendErrorMessage({ dispatch, error });
  }
};

const getCellDetaineesForOverview = (
  name,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  getCellDetaineesSuccessAction = actions.getCellDetaineesSuccess,
) => async (dispatch) => {
  try {
    dispatch(getCellDetaineesAction());
    const payload = await getCellDetaineesService(name);
    dispatch(getCellDetaineesSuccessAction(payload));
  } catch (error) {
    utils.sendErrorMessage({ dispatch, error });
  }
};

/* CELL CHECK */

const { visualCheck, verbalCheck } = actions;

const getCellDetaineesForCellCheck = (
  name,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  getCellDetaineesSuccessAction = actions.getCellDetaineesSuccess,
) => async (dispatch) => {
  try {
    dispatch(getCellDetaineesAction());
    const cellDetainees = await getCellDetaineesService(name);
    if (cellDetainees) {
      cellDetainees
        .filter((detainee) => !detainee.location)
        .forEach((detainee) => {
          dispatch(visualCheck(detainee));
        });
    }
    dispatch(getCellDetaineesSuccessAction(cellDetainees));
  } catch (error) {
    utils.sendErrorMessage({ dispatch, error });
  }
};

const saveCellCheck = (
  cellCheck,
  cellName,
  userName,
  saveCellCheckService = services.saveCellCheck,
  saveCellCheckAction = actions.saveCellCheck,
  saveCellCheckSuccessAction = actions.saveCellCheckSuccess,
) => async (dispatch) => {
  try {
    dispatch(saveCellCheckAction());
    await saveCellCheckService(cellCheck, userName);
    dispatch(saveCellCheckSuccessAction());
    dispatch(push(`/cells/${cellName}/home/`));
    utils.sendSuccessMessage({ dispatch, message: 'Cell check saved.' });
  } catch (error) {
    utils.sendErrorMessage({ dispatch, error });
  }
};

/* MEAL */

const { acceptMeal, rejectMeal, notApplicableMeal } = actions;

const getCellDetaineesForMeal = (
  name,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  getCellDetaineesSuccessAction = actions.getCellDetaineesSuccess,
) => async (dispatch) => {
  try {
    dispatch(getCellDetaineesAction());
    const cellDetainees = await getCellDetaineesService(name);
    if (cellDetainees) {
      cellDetainees
        .filter((detainee) => !detainee.location)
        .forEach((detainee) => {
          dispatch(acceptMeal(detainee));
        });
    }
    dispatch(getCellDetaineesSuccessAction(cellDetainees));
  } catch (error) {
    utils.sendErrorMessage({ dispatch, error });
  }
};

const saveMeal = (
  meal,
  cellName,
  userName,
  saveMealService = services.saveMeal,
  saveMealAction = actions.saveMeal,
  saveMealSuccessAction = actions.saveMealSuccess,
) => async (dispatch) => {
  try {
    dispatch(saveMealAction());
    const savedAny = await saveMealService(meal, userName);
    dispatch(saveMealSuccessAction());
    dispatch(push(`/cells/${cellName}/home/`));
    if (savedAny) utils.sendSuccessMessage({ dispatch, message: 'Meal provision saved.' });
  } catch (error) {
    utils.sendErrorMessage({ dispatch, error });
  }
};

/* MEDICATION */

const { acceptMedication, rejectMedication, notApplicableMedication } = actions;

const getCellDetaineesForMedication = (
  name,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  getCellDetaineesSuccessAction = actions.getCellDetaineesSuccess,
) => async (dispatch) => {
  try {
    dispatch(getCellDetaineesAction());
    const cellDetainees = await getCellDetaineesService(name);
    if (cellDetainees) {
      cellDetainees
        .filter((detainee) => !detainee.location)
        .forEach((detainee) => {
          dispatch(acceptMedication(detainee));
        });
    }
    dispatch(getCellDetaineesSuccessAction(cellDetainees));
  } catch (error) {
    utils.sendErrorMessage({ dispatch, error });
  }
};

const saveMedication = (
  medication,
  cellName,
  saveMedicationService = services.saveMedication,
  saveMedicationAction = actions.saveMedication,
  saveMedicationSuccessAction = actions.saveMedicationSuccess,
) => async (dispatch) => {
  try {
    dispatch(saveMedicationAction());
    const savedAny = await saveMedicationService(medication);
    dispatch(saveMedicationSuccessAction());
    dispatch(push(`/cells/${cellName}/home/`));
    if (savedAny) {
      utils.sendSuccessMessage({
        dispatch,
        message: 'Medication provision saved.',
      });
    }
  } catch (error) {
    utils.sendErrorMessage({ dispatch, error });
  }
};

export default {
  getCellDetails,
  getCellDetaineesForOverview,
  getCellDetaineesForCellCheck,
  visualCheck,
  verbalCheck,
  saveCellCheck,
  acceptMeal,
  rejectMeal,
  notApplicableMeal,
  getCellDetaineesForMeal,
  saveMeal,
  acceptMedication,
  rejectMedication,
  notApplicableMedication,
  getCellDetaineesForMedication,
  saveMedication,
};
