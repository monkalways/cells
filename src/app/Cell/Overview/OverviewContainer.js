import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import {
  operations as authenticationOperations,
  selectors as authenticationSelectors,
} from '../../Authentication/duck';
import OverviewComponent from './OverviewComponent';

export const mapStateToProps = (
  state,
  cellDetainees = selectors.getCellDetainees(state),
  isAuthenticated = authenticationSelectors.isAuthenticated(state),
) => ({
  cellDetainees,
  isAuthenticated,
});

export const mapDispatchToProps = (dispatch) => ({
  getCellDetainees: (name, getCellDetainees = operations.getCellDetainees) => {
    dispatch(getCellDetainees(name));
  },
  handleSignIn: (
    isAuthenticated,
    authenticate = authenticationOperations.authenticate,
  ) => {
    dispatch(authenticate(isAuthenticated));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OverviewComponent);
