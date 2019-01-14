import { connect } from 'react-redux';
import { operations } from './duck';
import { operations as authenticationOperations } from '../Authentication/duck';
import DetaineeComponent from './DetaineeComponent';

export const mapDispatchToProps = (dispatch) => ({
  initialize: (
    id,
    getAvailableActivityRooms = operations.getAvailableActivityRooms,
    getAvailableReleaseRooms = operations.getAvailableReleaseRooms,
    getAvailableRemandRooms = operations.getAvailableRemandRooms,
    getDetainee = operations.getDetainee,
    // Remove this later as it is only for testing purposes.
    getUsers = operations.getUsers,
    getVersion = operations.getVersion,
  ) => {
    dispatch(getAvailableActivityRooms());
    dispatch(getAvailableReleaseRooms());
    dispatch(getAvailableRemandRooms());
    dispatch(getDetainee(id));
    dispatch(getUsers());
    dispatch(getVersion());
  },
  logOut: (first, second, logOut = authenticationOperations.logOut) => {
    dispatch(logOut(first, second));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(DetaineeComponent);
