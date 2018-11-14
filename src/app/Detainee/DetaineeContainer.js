import { connect } from 'react-redux';
import { operations } from './duck';
import { operations as authenticationOperations } from '../Authentication/duck';
import DetaineeComponent from './DetaineeComponent';

export const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line max-len
  getAvailableActivityRooms: (getAvailableActivityRooms = operations.getAvailableActivityRooms) => dispatch(getAvailableActivityRooms()),
  getDetainee: (id, getDetainee = operations.getDetainee) => dispatch(getDetainee(id)),
  logOut: (first, second, logOut = authenticationOperations.logOut) => {
    dispatch(logOut(first, second));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(DetaineeComponent);
