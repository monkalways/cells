import { connect } from 'react-redux';
import { selectors } from '../duck';
import HeaderComponent from './HeaderComponent';

export const mapStateToProps = (
  state,
  detainee = selectors.getDetaineeState(state),
  isDetaineeProfileLoaded = selectors.isDetaineeProfileLoadedState(state),
) => ({
  detainee,
  isDetaineeProfileLoaded,
});

export default connect(
  mapStateToProps,
  null,
)(HeaderComponent);
