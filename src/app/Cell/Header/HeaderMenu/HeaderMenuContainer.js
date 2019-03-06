import { connect } from 'react-redux';
import { operations, selectors } from '../../duck';
import HeaderMenuComponent from './HeaderMenuComponent';

export const mapStateToProps = (
  state,
  menuAnchorElement = selectors.getMenuAnchorElementState(state),
  open = selectors.isMenuOpenState(state),
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
  handleModalOpen: (event, toggleModalOpen = operations.toggleModalOpen) => {
    dispatch(toggleModalOpen());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderMenuComponent);
