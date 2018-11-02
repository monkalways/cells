import { connect } from 'react-redux';
import { operations, selectors } from './duck';
import DetaineeComponent from './DetaineeComponent';

export const mapStateToProps = (
  state,
  detainee = selectors.getDetainee(state),
) => ({
  detainee,
});

export const mapDispatchToProps = (dispatch) => ({
  getDetainee: (id, getDetainee = operations.getDetainee) => dispatch(getDetainee(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetaineeComponent);
