import { createSelector } from 'reselect';

// Basic selectors
const getCellDetails = (state) => state.cell.details;
const getCellDetainees = (state) => state.cell.detainees.data;
const isCellDetaineesLoaded = (state) => state.cell.detainees.loaded;

// Reselect selectors
const getCellDetailsState = createSelector(
  [getCellDetails],
  (cellDetails) => cellDetails,
);

const getCellDetaineesState = createSelector(
  [getCellDetainees],
  (cellDetainees) => cellDetainees,
);

const getInCellDetaineesState = createSelector(
  [getCellDetainees],
  (cellDetainees) => cellDetainees.filter((detainee) => !detainee.location),
);

const isCellDetaineesLoadedState = createSelector(
  [isCellDetaineesLoaded],
  (loaded) => loaded,
);

export default {
  getCellDetailsState,
  getCellDetaineesState,
  getInCellDetaineesState,
  isCellDetaineesLoadedState,
};
