import { createSelector } from 'reselect';

// Basic selectors
const getCellDetails = (state) => state.cell.details;
const getCellDetainees = (state) => state.cell.detainees;

// Reselect selectors
const getCellDetailsState = createSelector(
  [getCellDetails],
  (cellDetails) => cellDetails,
);

const getCellDetaineesState = createSelector(
  [getCellDetainees],
  (cellDetainees) => cellDetainees,
);

export default {
  getCellDetailsState,
  getCellDetaineesState,
};
