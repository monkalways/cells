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
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.authenticate(
        cardId,
        authenticateService,
        startAuthenticateAction,
        authenticateSuccessAction,
        authenticateFailAction,
        sendErrorMessage,
      )(dispatch);

      expect(startAuthenticateAction).toBeCalledWith(cardId);
      expect(authenticateService).toBeCalledWith(cardId);
      expect(authenticateSuccessAction).toBeCalledWith(userName);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should fail authentication when authenticateService returns 401', async () => {
      const cardId = '123';

      const authenticateService = jest.fn();
      authenticateService.mockImplementation(() => {
        const error = new Error('401');
        error.response = { status: 401 };
        throw error;
      });
      const startAuthenticateAction = jest.fn();
      const authenticateSuccessAction = jest.fn();
      const authenticateFailAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.authenticate(
        cardId,
        authenticateService,
        startAuthenticateAction,
        authenticateSuccessAction,
        authenticateFailAction,
        sendErrorMessage,
      )(dispatch);

      expect(startAuthenticateAction).toBeCalledWith(cardId);
      expect(authenticateService).toBeCalledWith(cardId);
      expect(authenticateFailAction).toBeCalled();
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should notify error when authenticateService returns errors other than 401', async () => {
      const cardId = '123';

      const authenticateService = jest.fn();
      authenticateService.mockImplementation(() => {
        const error = new Error('500');
        error.response = { status: 500 };
        throw error;
      });
      const startAuthenticateAction = jest.fn();
      const authenticateSuccessAction = jest.fn();
      const authenticateFailAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.authenticate(
        cardId,
        authenticateService,
        startAuthenticateAction,
        authenticateSuccessAction,
        authenticateFailAction,
        sendErrorMessage,
      )(dispatch);

      expect(startAuthenticateAction).toBeCalledWith(cardId);
      expect(authenticateService).toBeCalledWith(cardId);
      expect(authenticateFailAction).not.toBeCalled();
      expect(sendErrorMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(1);
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
