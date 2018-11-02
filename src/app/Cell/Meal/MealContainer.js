import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import { selectors as authenticationSelectors } from '../../Authentication/duck';
import MealComponent from './MealComponent';

export const mapStateToProps = (
  state,
  cellDetainees = selectors.getCellDetaineesState(state),
  isAuthenticated = authenticationSelectors.isAuthenticated(state),
) => ({
  cellDetainees,
  isAuthenticated,
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
