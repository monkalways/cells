import { connect } from 'react-redux';
import { selectors } from '../duck';
import CellHistoryReportComponent from './CellHistoryReportComponent';

export const mapStateToProps = (
  state,
  isLoadingReport = selectors.isLoadingReportState(state),
  report = selectors.getCellHistoryReportState(state),
) => ({
  isLoadingReport,
  report,
});

export default connect(
  mapStateToProps,
  null,
)(CellHistoryReportComponent);
