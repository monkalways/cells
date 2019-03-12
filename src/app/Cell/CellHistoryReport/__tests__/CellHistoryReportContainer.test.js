import { mapStateToProps } from '../CellHistoryReportContainer';

describe('CellHistoryReportContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const isLoadingReport = false;
    const report = {};

    const result = mapStateToProps(state, isLoadingReport, report);

    expect(result).toEqual({
      isLoadingReport,
      report,
    });
  });
});
