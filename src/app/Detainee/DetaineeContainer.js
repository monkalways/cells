import { connect } from 'react-redux';
import { operations } from './duck';
import { operations as authenticationOperations } from '../Authentication/duck';
import DetaineeComponent from './DetaineeComponent';

export const mapDispatchToProps = (dispatch) => ({
  getDetainee: (id, getDetainee = operations.getDetainee) => dispatch(getDetainee(id)),
  logOut: (cellName, logOut = authenticationOperations.logOut) => {
    dispatch(logOut(cellName));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(DetaineeComponent);
