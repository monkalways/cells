import { connect } from 'react-redux';
import { operations } from './duck';
import DetaineeComponent from './DetaineeComponent';

export const mapDispatchToProps = (dispatch) => ({
  getDetainee: (id, getDetainee = operations.getDetainee) => dispatch(getDetainee(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(DetaineeComponent);
