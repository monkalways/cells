import { createSelector } from 'reselect';

const cellInfoSelector = (state) => state.cellManagementData.cellInfo;
const cellDetaineesSelector = (state) => state.cellManagementData.cellDetainees;
const cellDetaineeIdSelector = (state, id) => id;

const getCellInfo = createSelector(
  cellInfoSelector,
  (cellInfo) => cellInfo,
);

const getCellDetainees = createSelector(
  cellDetaineesSelector,
  (cellDetainees) => cellDetainees,
);

const getCellDetaineeById = createSelector(
  cellDetaineesSelector, cellDetaineeIdSelector,
  (cellDetainees, id) => cellDetainees.filter((x) => x.id === id)[0],
);

export default {
  getCellInfo,
  getCellDetainees,
  getCellDetaineeById,
};
