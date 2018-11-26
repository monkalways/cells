import operations from '../operations';

describe('Common operations', () => {
  describe('getVersions', () => {
    it('should getVersions successfully when service returns data', async () => {
      const versions = [
        {
          name: 'Detainee Management Service',
          version: '1.0.0',
        },
        {
          name: 'EPROS Service',
          version: '1.0.0',
        },
      ];

      const getVersionsService = jest.fn();
      getVersionsService.mockReturnValue(versions);
      const getVersionsSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getVersions(
        getVersionsService,
        getVersionsSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getVersionsService).toBeCalled();
      expect(getVersionsSuccessAction).toBeCalledWith([
        {
          name: 'Cell App',
          version: process.env.REACT_APP_VERSION,
        },
        ...versions,
      ]);
      expect(dispatch).toBeCalledTimes(1);
    });

    it('should notify error when service returns error', async () => {
      const getVersionsService = jest.fn();
      getVersionsService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const getVersionsSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getVersions(
        getVersionsService,
        getVersionsSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getVersionsService).toBeCalled();
      expect(getVersionsSuccessAction).not.toBeCalled();
      expect(dispatch).not.toBeCalled();
      expect(sendErrorMessage).toBeCalled();
    });
  });
});
