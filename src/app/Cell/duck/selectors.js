import { createSelector } from 'reselect';

// Basic selectors
const getCellDetails = (state) => state.cell.details;
const getCellDetainees = (state) => state.cell.detainees.data;
const isCellDetaineesLoaded = (state) => state.cell.detainees.loaded;
const getCellCheck = (state) => state.cell.cellCheck.data;
const isSavingCellCheck = (state) => state.cell.cellCheck.saving;
const getMeal = (state) => state.cell.meal.data;
const isSavingMeal = (state) => state.cell.meal.saving;

// Reselect selectors
const getCellDetailsState = createSelector(
  [getCellDetails],
  (cellDetails) => cellDetails,
);

const getCellDetaineesState = createSelector(
  [getCellDetainees],
  (cellDetainees) => cellDetainees,
);

const isCellDetaineesLoadedState = createSelector(
  [isCellDetaineesLoaded],
  (loaded) => loaded,
);

const getCellCheckState = createSelector(
  [getCellCheck],
  (cellCheck) => cellCheck,
);

const isSavingCellCheckState = createSelector(
  [isSavingCellCheck],
  (saving) => saving,
);

const isSavingMealState = createSelector([isSavingMeal], (saving) => saving);

const getMealState = createSelector([getMeal], (meal) => meal);

export default {
  getCellDetailsState,
  getCellDetaineesState,
  isCellDetaineesLoadedState,
  getCellCheckState,
  isSavingCellCheckState,
  getMealState,
  isSavingMealState,
};
