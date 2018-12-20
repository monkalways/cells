import { connect } from 'react-redux';
import {
  operations as authenticationOperations,
  selectors as authenticationSelectors,
} from '../../Authentication/duck';
import ScanCardDialogComponent from './ScanCardDialogComponent';

export const mapStateToProps = (
  state,
  isSignInDialogOpen = authenticationSelectors.isSignInDialogOpenState(state),
  isAuthenticating = authenticationSelectors.isAuthenticatingState(state),
  isAuthenticationFailed = authenticationSelectors.isAuthenticationFailedState(state),
  errorMessage = authenticationSelectors.getErrorMessageState(state),
) => ({
  isSignInDialogOpen,
  isAuthenticating,
  isAuthenticationFailed,
  errorMessage,
});

export const mapDispatchToProps = (dispatch) => ({
  authenticate: (
    cardId,
    authenticate = authenticationOperations.authenticate,
  ) => {
    dispatch(authenticate(cardId));
  },
  handleSignIn: (startSignIn = authenticationOperations.startSignIn) => {
    dispatch(startSignIn());
  },
  onClose: () => {
    dispatch(authenticationOperations.cancelAuthenticate());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScanCardDialogComponent);
