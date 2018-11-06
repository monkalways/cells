import { push } from 'connected-react-router';
import actions from './actions';
import services from './services';

/* OVERVIEW */

const getCellDetails = (
  name,
  getCellDetailsService = services.getCellDetails,
  getCellDetailsSuccessAction = actions.getCellDetailsSuccess,
  // TODO: add global error handler
  // setAppErrorAction = commonActions.setAppError,
) => async (dispatch) => {
  try {
    const payload = await getCellDetailsService(name);
    dispatch(getCellDetailsSuccessAction(payload));
  } catch (error) {
    // dispatch(setAppErrorAction());
  }
};

const getCellDetaineesForOverview = (
  name,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  getCellDetaineesSuccessAction = actions.getCellDetaineesSuccess,
  // TODO: add global error handler
  // setAppErrorAction = commonActions.setAppError,
) => async (dispatch) => {
  try {
    dispatch(getCellDetaineesAction());
    const payload = await getCellDetaineesService(name);
    dispatch(getCellDetaineesSuccessAction(payload));
  } catch (error) {
    // dispatch(setAppErrorAction());
  }
};

/* CELL CHECK */

const { visualCheck, verbalCheck } = actions;

const getCellDetaineesForCellCheck = (
  name,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  getCellDetaineesSuccessAction = actions.getCellDetaineesSuccess,
  // TODO: add global error handler
  // setAppErrorAction = commonActions.setAppError,
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
    // dispatch(setAppErrorAction());
  }
};

const saveCellCheck = (
  cellCheck,
  cellName,
  saveCellCheckService = services.saveCellCheck,
  saveCellCheckAction = actions.saveCellCheck,
  saveCellCheckSuccessAction = actions.saveCellCheckSuccess,
  // TODO: add global error handler
  // setAppErrorAction = commonActions.setAppError,
) => async (dispatch) => {
  try {
    dispatch(saveCellCheckAction());
    await saveCellCheckService(cellCheck);
    dispatch(saveCellCheckSuccessAction());
    dispatch(push(`/cells/${cellName}/home/`));
  } catch (error) {
    // dispatch(setAppErrorAction());
  }
};

/* MEAL */

const { acceptMeal, rejectMeal, notApplicableMeal } = actions;

const getCellDetaineesForMeal = (
  name,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  getCellDetaineesSuccessAction = actions.getCellDetaineesSuccess,
  // TODO: add global error handler
  // setAppErrorAction = commonActions.setAppError,
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
    // dispatch(setAppErrorAction());
  }
};

const saveMeal = (
  meal,
  cellName,
  saveMealService = services.saveMeal,
  saveMealAction = actions.saveMeal,
  saveMealSuccessAction = actions.saveMealSuccess,
  // TODO: add global error handler
  // setAppErrorAction = commonActions.setAppError,
) => async (dispatch) => {
  try {
    dispatch(saveMealAction());
    await saveMealService(meal);
    dispatch(saveMealSuccessAction());
    dispatch(push(`/cells/${cellName}/home/`));
  } catch (error) {
    // dispatch(setAppErrorAction());
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
};
