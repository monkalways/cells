import operations from '../operations';

describe('ActivityRoom operations', () => {
  describe('getActivityRoomDetainees', () => {
    it('should return successfully when getActivityRoomDetaineesService returns valid detainees', async () => {
      const usage = 'phone';
      const detainees = [];

      const getActivityRoomDetaineesService = jest.fn();
      getActivityRoomDetaineesService.mockReturnValue(detainees);
      const getActivityRoomDetaineesAction = jest.fn();
      const getActivityRoomDetaineesSuccessAction = jest.fn();
      const dispatch = jest.fn();

      await operations.getActivityRoomDetainees(
        usage,
        getActivityRoomDetaineesService,
        getActivityRoomDetaineesAction,
        getActivityRoomDetaineesSuccessAction,
      )(dispatch);

      expect(getActivityRoomDetaineesAction).toBeCalledWith(usage);
      expect(getActivityRoomDetaineesSuccessAction).toBeCalledWith(detainees);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should send error message when error occurs', async () => {
      const usage = 'phone';
      const error = new Error('Network error');

      const getActivityRoomDetaineesService = jest.fn();
      getActivityRoomDetaineesService.mockImplementation(() => {
        throw error;
      });
      const getActivityRoomDetaineesAction = jest.fn();
      const getActivityRoomDetaineesSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getActivityRoomDetainees(
        usage,
        getActivityRoomDetaineesService,
        getActivityRoomDetaineesAction,
        getActivityRoomDetaineesSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(sendErrorMessage).toBeCalledWith({ dispatch, error });
    });
  });

  describe('checkIn', () => {
    it('should return successfully when the service checks in successfully', async () => {
      const detaineeId = '123';
      const usage = 'phone';

      const checkIntoActivityRoomService = jest.fn();
      const checkInAction = jest.fn();
      const checkInSuccessAction = jest.fn();
      const checkInFailAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.checkIn(
        detaineeId,
        usage,
        checkIntoActivityRoomService,
        createTempAbsenceService,
        checkInAction,
        checkInSuccessAction,
        checkInFailAction,
        sendErrorMessage,
      )(dispatch);

      expect(checkInAction).toBeCalled();
      expect(checkInSuccessAction).toBeCalled();
      expect(checkIntoActivityRoomService).toBeCalledWith(detaineeId, usage);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should send error message when error occurs', async () => {
      const detaineeId = '123';
      const usage = 'phone';

      const checkIntoActivityRoomService = jest.fn();
      checkIntoActivityRoomService.mockImplementation(() => {
        throw error;
      });
      const checkInAction = jest.fn();
      const checkInSuccessAction = jest.fn();
      const checkInFailAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.checkIn(
        detaineeId,
        usage,
        checkIntoActivityRoomService,
        createTempAbsenceService,
        checkInAction,
        checkInSuccessAction,
        checkInFailAction,
        sendErrorMessage,
      )(dispatch);

      expect(checkInAction).toBeCalled();
      expect(checkIntoActivityRoomService).toBeCalledWith(detaineeId, usage);
      expect(checkInFailAction).toBeCalled();
      expect(sendErrorMessage).toBeCalled();
      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
