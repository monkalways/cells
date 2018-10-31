import { connect } from 'react-redux';
import { operations, selectors } from './duck';
import CellComponent from './CellComponent';

export const mapStateToProps = (
  state,
  cellDetails = selectors.getCellDetails(state),
  cellDetainees = selectors.getCellDetainees(state),
) => ({
  cellDetails,
  cellDetainees,
});

export const mapDispatchToProps = (dispatch) => ({
  initialize: (
    name,
    getCellDetails = operations.getCellDetails,
    getCellDetainees = operations.getCellDetainees,
  ) => {
    dispatch(getCellDetails(name));
    dispatch(getCellDetainees(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellComponent);
