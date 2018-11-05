import { connect } from 'react-redux';
import { selectors } from '../duck';
import DetaineeDetailsComponent from './DetaineeDetailsComponent';

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
)(DetaineeDetailsComponent);
