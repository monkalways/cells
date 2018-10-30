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
  initialize: (name, getCellDetails = operations.getCellDetails) => {
    dispatch(getCellDetails(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellComponent);
