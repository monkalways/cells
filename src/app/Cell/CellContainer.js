import { connect } from 'react-redux';
import { operations, selectors } from './duck';
import CellComponent from './CellComponent';

export const mapStateToProps = (
  state,
  cellDetails = selectors.getCellDetails(state),
) => ({
  cellDetails,
});

export const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line max-len
  getCellDetails: (name, getCellDetails = operations.getCellDetails) => dispatch(getCellDetails(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellComponent);
