import { push } from 'connected-react-router';

import actions from './actions';
import services from './services';
import utils from '../../utils';

/* OVERVIEW */

const getCellDetails = (
  name,
  getCellDetailsService = services.getCellDetails,
  getCellDetailsSuccessAction = actions.getCellDetailsSuccess,
  sendErrorMessage = utils.sendErrorMessage,
) => async (dispatch) => {
  try {
    const payload = await getCellDetailsService(name);
    dispatch(getCellDetailsSuccessAction(payload));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const getCellDetaineesForOverview = (
  name,
  authenticated,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  getCellDetaineesSuccessAction = actions.getCellDetaineesSuccess,
  sendErrorMessage = utils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(getCellDetaineesAction());
    const payload = await getCellDetaineesService(name, authenticated);
    dispatch(getCellDetaineesSuccessAction(payload));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

/* CELL CHECK */

const { visualCheck, verbalCheck } = actions;

const getCellDetaineesForCellCheck = (
  name,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  getCellDetaineesSuccessAction = actions.getCellDetaineesSuccess,
  visualCheckAction = visualCheck,
  sendErrorMessage = utils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(getCellDetaineesAction());
    const cellDetainees = await getCellDetaineesService(name);
    if (cellDetainees) {
      cellDetainees
        .filter((detainee) => !detainee.location)
        .forEach((detainee) => {
          dispatch(visualCheckAction(detainee));
        });
    }
    dispatch(getCellDetaineesSuccessAction(cellDetainees));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const saveCellCheck = (
  cellCheck,
  cellName,
  userName,
  saveCellCheckService = services.saveCellCheck,
  saveCellCheckAction = actions.saveCellCheck,
  saveCellCheckSuccessAction = actions.saveCellCheckSuccess,
  pushAction = push,
  sendSuccessMessage = utils.sendSuccessMessage,
  sendErrorMessage = utils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(saveCellCheckAction());
    await saveCellCheckService(cellCheck, userName);
    dispatch(saveCellCheckSuccessAction());
    dispatch(pushAction(`/cells/${cellName}/home/`));
    sendSuccessMessage({ dispatch, message: 'Cell check saved.' });
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

/* MEAL */

const { acceptMeal, rejectMeal, notApplicableMeal } = actions;

const getCellDetaineesForMeal = (
  name,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  getCellDetaineesSuccessAction = actions.getCellDetaineesSuccess,
  acceptMealAction = acceptMeal,
  sendErrorMessage = utils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(getCellDetaineesAction());
    const cellDetainees = await getCellDetaineesService(name);
    if (cellDetainees) {
      cellDetainees
        .filter((detainee) => !detainee.location)
        .forEach((detainee) => {
          dispatch(acceptMealAction(detainee));
        });
    }
    dispatch(getCellDetaineesSuccessAction(cellDetainees));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const saveMeal = (
  meal,
  cellName,
  userName,
  saveMealService = services.saveMeal,
  saveMealAction = actions.saveMeal,
  saveMealSuccessAction = actions.saveMealSuccess,
  pushAction = push,
  sendSuccessMessage = utils.sendSuccessMessage,
  sendErrorMessage = utils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(saveMealAction());
    const savedAny = await saveMealService(meal, userName);
    dispatch(saveMealSuccessAction());
    dispatch(pushAction(`/cells/${cellName}/home/`));
    if (savedAny) sendSuccessMessage({ dispatch, message: 'Meal provision saved.' });
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

/* MEDICATION */

const { acceptMedication, rejectMedication, notApplicableMedication } = actions;

const getCellDetaineesForMedication = (
  name,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  getCellDetaineesSuccessAction = actions.getCellDetaineesSuccess,
  acceptMedicationAction = acceptMedication,
  sendErrorMessage = utils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(getCellDetaineesAction());
    const cellDetainees = await getCellDetaineesService(name);
    if (cellDetainees) {
      cellDetainees
        .filter((detainee) => !detainee.location)
        .forEach((detainee) => {
          dispatch(acceptMedicationAction(detainee));
        });
    }
    dispatch(getCellDetaineesSuccessAction(cellDetainees));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const saveMedication = (
  medication,
  cellName,
  userName,
  saveMedicationService = services.saveMedication,
  saveMedicationAction = actions.saveMedication,
  saveMedicationSuccessAction = actions.saveMedicationSuccess,
  pushAction = push,
  sendSuccessMessage = utils.sendSuccessMessage,
  sendErrorMessage = utils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(saveMedicationAction());
    const savedAny = await saveMedicationService(medication, userName);
    dispatch(saveMedicationSuccessAction());
    dispatch(pushAction(`/cells/${cellName}/home/`));
    if (savedAny) {
      sendSuccessMessage({
        dispatch,
        message: 'Medication provision saved.',
      });
    }
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

/* Menu */

const { toggleMenuClose } = actions;

const toggleMenuOpen = (
  menuButtonTargetElement,
  toggleMenuOpenAction = actions.toggleMenuOpen,
) => (dispatch) => {
  dispatch(toggleMenuOpenAction(menuButtonTargetElement));
};

/* Modal */

const { toggleModalOpen, toggleModalClose } = actions;

/* Cell History Report */

const getCellHistoryReport = (
  cellName,
  startTime,
  endTime,
  getCellHistoryReportService = services.getCellHistoryReport,
  getCellHistoryReportAction = actions.getCellHistoryReport,
  getCellHistoryReportSuccessAction = actions.getCellHistoryReportSuccess,
  sendErrorMessage = utils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(getCellHistoryReportAction());
    const report = await getCellHistoryReportService(
      cellName,
      startTime,
      endTime,
    );
    report.cellName = cellName;
    report.startTime = startTime;
    report.endTime = endTime;
    dispatch(getCellHistoryReportSuccessAction(report));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
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
  toggleMenuOpen,
  toggleMenuClose,
  toggleModalOpen,
  toggleModalClose,
  getCellHistoryReport,
};
