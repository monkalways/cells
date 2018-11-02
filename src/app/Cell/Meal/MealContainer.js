import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import { selectors as authenticationSelectors } from '../../Authentication/duck';
import MealComponent from './MealComponent';

export const mapStateToProps = (
  state,
  cellDetainees = selectors.getInCellDetaineesState(state),
  isCellDetaineesLoaded = selectors.isCellDetaineesLoadedState(state),
  isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
) => ({
  cellDetainees,
  isAuthenticated,
  isCellDetaineesLoaded,
});

export const mapDispatchToProps = (dispatch) => ({
  getCellDetainees: (name, getCellDetainees = operations.getCellDetainees) => {
    dispatch(getCellDetainees(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealComponent);
