import { connect } from 'react-redux';
import { operations } from './duck';
import { operations as authenticationOperations } from '../Authentication/duck';
import { operations as commonOperations } from '../common/duck';
import DetaineeComponent from './DetaineeComponent';

export const mapDispatchToProps = (dispatch) => ({
  initialize: (
    id,
    getAvailableActivityRooms = operations.getAvailableActivityRooms,
    getAvailableReleaseRooms = operations.getAvailableReleaseRooms,
    getAvailableRemandRooms = operations.getAvailableRemandRooms,
    getDetainee = operations.getDetainee,
  ) => {
    dispatch(getAvailableActivityRooms());
    dispatch(getAvailableReleaseRooms());
    dispatch(getAvailableRemandRooms());
    dispatch(getDetainee(id));
  },
  logOut: (
    first,
    second,
    stopAuthenticationTimeout = commonOperations.stopAuthenticationTimeout,
    logOut = authenticationOperations.logOut,
  ) => {
    dispatch(stopAuthenticationTimeout());
    dispatch(logOut(first, second));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(DetaineeComponent);
