import { connect } from 'react-redux';
import {
  operations as authenticationOperations,
  selectors as authenticationSelectors,
} from '../../Authentication/duck';
import ScanCardDialogComponent from './ScanCardDialogComponent';

export const mapStateToProps = (
  state,
  isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
  isSignInDialogOpen = authenticationSelectors.isSignInDialogOpenState(state),
  isAuthenticating = authenticationSelectors.isAuthenticatingState(state),
  isAuthenticationFailed = authenticationSelectors.isAuthenticationFailedState(state),
) => ({
  isAuthenticated,
  isSignInDialogOpen,
  isAuthenticating,
  isAuthenticationFailed,
});

export const mapDispatchToProps = (dispatch) => ({
  authenticate: (
    cardId,
    authenticate = authenticationOperations.authenticate,
  ) => {
    dispatch(authenticate(cardId));
  },
  onClose: () => {
    dispatch(authenticationOperations.cancelAuthenticate());
  },
  handleSignIn: (startSignIn = authenticationOperations.startSignIn) => {
    dispatch(startSignIn());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScanCardDialogComponent);
