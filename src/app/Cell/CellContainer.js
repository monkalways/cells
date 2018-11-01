import { connect } from 'react-redux';
import { operations, selectors } from './duck';
import { operations as authenticationOperations } from '../Authentication/duck';
import CellComponent from './CellComponent';

export const mapStateToProps = (
  state,
  cellDetails = selectors.getCellDetails(state),
) => ({
  cellDetails,
});

export const mapDispatchToProps = (dispatch) => ({
  getCellDetails: (name, getCellDetails = operations.getCellDetails) => {
    dispatch(getCellDetails(name));
  },
  logOut: (logOut = authenticationOperations.logOut) => {
    dispatch(logOut());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellComponent);
