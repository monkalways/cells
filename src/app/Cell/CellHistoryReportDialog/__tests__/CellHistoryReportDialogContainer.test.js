import {
  mapStateToProps,
  mapDispatchToProps,
} from '../CellHistoryReportDialogContainer';

describe('CellHistoryReportDialogContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const isModalOpen = false;
    const isLoadingReport = false;

    const result = mapStateToProps(state, isModalOpen, isLoadingReport);

    expect(result).toEqual({
      isModalOpen,
      isLoadingReport,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should handleCloseModal', () => {
      const { handleCloseModal } = mapDispatchToProps(dispatch);
      const toggleModalCloseMock = jest.fn();

      handleCloseModal(toggleModalCloseMock);

      expect(dispatch).toBeCalled();
      expect(toggleModalCloseMock).toBeCalled();
    });

    it('should handleLoadReport', () => {
      const { handleLoadReport } = mapDispatchToProps(dispatch);
      const getCellHistoryReportMock = jest.fn();
      const cellName = 'c1';
      const startTime = new Date();
      const endTime = new Date();

      handleLoadReport(cellName, startTime, endTime, getCellHistoryReportMock);

      expect(dispatch).toBeCalled();
      expect(getCellHistoryReportMock).toBeCalledWith(
        cellName,
        startTime,
        endTime,
      );
    });
  });
});
