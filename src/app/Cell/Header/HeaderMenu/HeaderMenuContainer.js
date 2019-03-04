import { connect } from 'react-redux';
import { operations, selectors } from '../../duck';
import HeaderMenuComponent from './HeaderMenuComponent';

export const mapStateToProps = (
  state,
  menuAnchorElement = selectors.getMenuAnchorElement(state),
  open = selectors.isMenuOpen(state),
) => ({
  menuAnchorElement,
  open,
});

export const mapDispatchToProps = (dispatch) => ({
  handleMenuOpen: (event, toggleMenuOpen = operations.toggleMenuOpen) => {
    dispatch(toggleMenuOpen(event.currentTarget));
  },
  handleMenuClose: (toggleMenuClose = operations.toggleMenuClose) => {
    dispatch(toggleMenuClose());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderMenuComponent);
