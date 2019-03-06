import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import CellHistoryReportDialogComponent from './CellHistoryReportDialogComponent';

export const mapStateToProps = (
  state,
  isModalOpen = selectors.isModalOpenState(state),
  isLoadingReport = selectors.isLoadingReportState(state),
) => ({
  isModalOpen,
  isLoadingReport,
});

export const mapDispatchToProps = (dispatch) => ({
  handleCloseModal: (toggleModalClose = operations.toggleModalClose) => {
    dispatch(toggleModalClose());
  },
  handleLoadReport: () => {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellHistoryReportDialogComponent);
