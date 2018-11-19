import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import { selectors as authenticationSelectors } from '../../Authentication/duck';
import MealComponent from './MealComponent';

export const mapStateToProps = (
  state,
  cellDetainees = selectors.getCellDetaineesState(state),
  cellName = selectors.getCellNameState(state),
  isCellDetaineesLoaded = selectors.isCellDetaineesLoadedState(state),
  isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
  userName = authenticationSelectors.getUserNameState(state),
  meal = selectors.getMealState(state),
  isSavingMeal = selectors.isSavingMealState(state),
) => ({
  cellDetainees,
  cellName,
  isAuthenticated,
  userName,
  isCellDetaineesLoaded,
  meal,
  isSavingMeal,
});

export const mapDispatchToProps = (dispatch) => ({
  getCellDetainees: (
    name,
    getCellDetainees = operations.getCellDetaineesForMeal,
  ) => {
    dispatch(getCellDetainees(name));
  },
  acceptMeal: (detainee, acceptMeal = operations.acceptMeal) => {
    dispatch(acceptMeal(detainee));
  },
  rejectMeal: (detainee, rejectMeal = operations.rejectMeal) => {
    dispatch(rejectMeal(detainee));
  },
  notApplicableMeal: (
    detainee,
    notApplicableMeal = operations.notApplicableMeal,
  ) => {
    dispatch(notApplicableMeal(detainee));
  },
  acceptMealAll: (detainees, acceptMeal = operations.acceptMeal) => {
    detainees.forEach((detainee) => dispatch(acceptMeal(detainee)));
  },
  rejectMealAll: (detainees, rejectMeal = operations.rejectMeal) => {
    detainees.forEach((detainee) => dispatch(rejectMeal(detainee)));
  },
  notApplicableMealAll: (
    detainees,
    notApplicableMeal = operations.notApplicableMeal,
  ) => {
    detainees.forEach((detainee) => dispatch(notApplicableMeal(detainee)));
  },
  onSave: (meal, cellName, userName, saveMeal = operations.saveMeal) => {
    dispatch(saveMeal(meal, cellName, userName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealComponent);
