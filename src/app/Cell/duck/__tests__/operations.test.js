import operations from '../operations';

describe('Cell operations', () => {
  describe('getCellDetails', () => {
    it('should getCellDetails successfully when getCellDetailsService returns valid cell details', async () => {
      const name = 'c1';
      const cellDetails = {};

      const getCellDetailsService = jest.fn();
      getCellDetailsService.mockReturnValue(cellDetails);
      const getCellDetailsSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetails(
        name,
        getCellDetailsService,
        getCellDetailsSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetailsService).toBeCalledWith(name);
      expect(getCellDetailsSuccessAction).toBeCalledWith(cellDetails);
      expect(dispatch).toBeCalledTimes(1);
    });

    it('should notify error when authenticateService returns errors', async () => {
      const name = 'c1';

      const getCellDetailsService = jest.fn();
      getCellDetailsService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const getCellDetailsSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetails(
        name,
        getCellDetailsService,
        getCellDetailsSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetailsService).toBeCalledWith(name);
      expect(getCellDetailsSuccessAction).not.toBeCalled();
      expect(sendErrorMessage).toBeCalledTimes(1);
    });
  });

  describe('getCellDetaineesForOverview', () => {
    it('should getCellDetaineesForOverview successfully when service returns data', async () => {
      const name = 'c1';
      const cellDetainees = [];

      const getCellDetaineesService = jest.fn();
      getCellDetaineesService.mockReturnValue(cellDetainees);
      const getCellDetaineesAction = jest.fn();
      const getCellDetaineesSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetaineesForOverview(
        name,
        getCellDetaineesService,
        getCellDetaineesAction,
        getCellDetaineesSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetaineesAction).toBeCalled();
      expect(getCellDetaineesService).toBeCalledWith(name);
      expect(getCellDetaineesSuccessAction).toBeCalledWith(cellDetainees);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should notify error when authenticateService returns errors', async () => {
      const name = 'c1';

      const getCellDetaineesService = jest.fn();
      getCellDetaineesService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const getCellDetaineesAction = jest.fn();
      const getCellDetaineesSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getCellDetaineesForOverview(
        name,
        getCellDetaineesService,
        getCellDetaineesAction,
        getCellDetaineesSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getCellDetaineesAction).toBeCalled();
      expect(getCellDetaineesService).toBeCalledWith(name);
      expect(getCellDetaineesSuccessAction).not.toBeCalled();
      expect(sendErrorMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
