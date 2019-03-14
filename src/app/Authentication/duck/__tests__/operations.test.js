import operations from '../operations';

describe('Authentication operations', () => {
  describe('authenticate', () => {
    it('should authenticate successfully when authenticateService returns valid userName', async () => {
      const cardId = '123';
      const userName = 'john';

      const authenticateService = jest.fn();
      authenticateService.mockReturnValue(userName);
      const startAuthenticateAction = jest.fn();
      const authenticateSuccessAction = jest.fn();
      const authenticateFailAction = jest.fn();
      const dispatch = jest.fn();

      await operations.authenticate(
        cardId,
        authenticateService,
        startAuthenticateAction,
        authenticateSuccessAction,
        authenticateFailAction,
      )(dispatch);

      expect(startAuthenticateAction).toBeCalledWith(cardId);
      expect(authenticateService).toBeCalledWith(cardId);
      expect(authenticateSuccessAction).toBeCalledWith(userName);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should fail authentication when authenticateService returns error', async () => {
      const cardId = '123';
      const errorMessage = 'Scan Card Problem';

      const authenticateService = jest.fn();
      authenticateService.mockImplementation(() => {
        const error = new Error('401');
        error.response = {
          status: 401,
          data: {
            message: errorMessage,
          },
        };
        throw error;
      });
      const startAuthenticateAction = jest.fn();
      const authenticateSuccessAction = jest.fn();
      const authenticateFailAction = jest.fn();
      const dispatch = jest.fn();

      await operations.authenticate(
        cardId,
        authenticateService,
        startAuthenticateAction,
        authenticateSuccessAction,
        authenticateFailAction,
      )(dispatch);

      expect(startAuthenticateAction).toBeCalledWith(cardId);
      expect(authenticateService).toBeCalledWith(cardId);
      expect(authenticateFailAction).toBeCalledWith(errorMessage);
      expect(dispatch).toBeCalledTimes(2);
    });
  });

  describe('logout', () => {
    it('should log out', () => {
      const first = 'cells';
      const second = 'c1';
      const logOutAction = jest.fn();
      const pushAction = jest.fn();
      const dispatch = jest.fn();

      operations.logOut(first, second, logOutAction, pushAction)(dispatch);

      expect(logOutAction).toBeCalled();
      expect(pushAction).toBeCalledWith('/cells/c1');
    });
  });
});
