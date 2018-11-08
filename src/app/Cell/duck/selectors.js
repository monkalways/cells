import { createSelector } from 'reselect';

// Basic selectors
const getCellDetails = (state) => state.cell.details;
const getCellDetainees = (state) => state.cell.detainees.data;
const isCellDetaineesLoaded = (state) => state.cell.detainees.loaded;
const getCellCheck = (state) => state.cell.cellCheck.data;
const isSavingCellCheck = (state) => state.cell.cellCheck.saving;
const getMeal = (state) => state.cell.meal.data;
const isSavingMeal = (state) => state.cell.meal.saving;
const getMedication = (state) => state.cell.medication.data;
const isSavingMedication = (state) => state.cell.medication.saving;

// Reselect selectors
const getCellDetailsState = createSelector(
  [getCellDetails],
  (cellDetails) => cellDetails,
);

const getCellNameState = createSelector(
  [getCellDetails],
  (cellDetails) => cellDetails.name,
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

const getMealState = createSelector([getMeal], (meal) => meal);

const isSavingMealState = createSelector([isSavingMeal], (saving) => saving);

const getMedicationState = createSelector(
  [getMedication],
  (medication) => medication,
);

const isSavingMedicationState = createSelector(
  [isSavingMedication],
  (saving) => saving,
);

export default {
  getCellDetailsState,
  getCellNameState,
  getCellDetaineesState,
  isCellDetaineesLoadedState,
  getCellCheckState,
  isSavingCellCheckState,
  getMealState,
  isSavingMealState,
  getMedicationState,
  isSavingMedicationState,
};
