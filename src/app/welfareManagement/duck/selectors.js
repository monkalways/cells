import { createSelector } from 'reselect';

const welfareFlagSelector = (state) => state.welfareManagementData.welfareFlagData;
const cellWelfareDataSelector = (state) => state.welfareManagementData.cellWelfareData;

const getMealFlag = createSelector(
  welfareFlagSelector,
  (welfareFlagData) => welfareFlagData.isMeal,
);

const getMedicationFlag = createSelector(
  welfareFlagSelector,
  (welfareFlagData) => welfareFlagData.isMedication,
);

const getCellCheckFlag = createSelector(
  welfareFlagSelector,
  (welfareFlagData) => welfareFlagData.isCellCheck,
);

const getCellWelfareData = createSelector(
  cellWelfareDataSelector,
  (cellWelfareData) => cellWelfareData,
);

const getDetentionLogType = createSelector(
  cellWelfareDataSelector,
  (cellWelfareData) => {
    if (cellWelfareData.length === 0) return '';
    return cellWelfareData[0].detentionLogType;
  },
);
export default {
  getMealFlag,
  getMedicationFlag,
  getCellCheckFlag,
  getCellWelfareData,
  getDetentionLogType,
};
