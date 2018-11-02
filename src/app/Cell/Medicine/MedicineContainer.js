import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import { selectors as authenticationSelectors } from '../../Authentication/duck';
import MedicineComponent from './MedicineComponent';

export const mapStateToProps = (
  state,
  cellDetainees = selectors.getCellDetainees(state),
  isAuthenticated = authenticationSelectors.isAuthenticated(state),
) => ({
  cellDetainees,
  isAuthenticated,
});

export const mapDispatchToProps = (dispatch) => ({
  getCellDetainees: (name, getCellDetainees = operations.getCellDetainees) => {
    dispatch(getCellDetainees(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MedicineComponent);