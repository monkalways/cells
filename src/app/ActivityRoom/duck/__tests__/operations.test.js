import operations from '../operations';

describe('getActivityRoomDetainees', () => {
  it('should return successfully', async () => {
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
  it('should return successfully when there is a last temp absence record with reason contains "In Transit"', async () => {
    const detaineeId = '123';
    const usage = 'phone';
    const lastTempAbsence = {
      id: '321',
      startTime: new Date(),
      reason: 'Phone In Transit',
      remarks: 'T1',
    };

    const getLastTempAbsenceService = jest.fn();
    getLastTempAbsenceService.mockReturnValue(lastTempAbsence);
    const createTempAbsenceService = jest.fn();
    const updateTempAbsenceService = jest.fn();
    const getActivityRoomDetaineesOperation = jest.fn();
    const checkInAction = jest.fn();
    const checkInSuccessAction = jest.fn();
    const checkInFailAction = jest.fn();
    const dispatch = jest.fn();

    await operations.checkIn(
      detaineeId,
      usage,
      getLastTempAbsenceService,
      createTempAbsenceService,
      updateTempAbsenceService,
      getActivityRoomDetaineesOperation,
      checkInAction,
      checkInSuccessAction,
      checkInFailAction,
    )(dispatch);

    expect(checkInAction).toBeCalled();
    expect(checkInSuccessAction).toBeCalled();
    expect(getLastTempAbsenceService).toBeCalledWith(detaineeId);
    expect(updateTempAbsenceService).toBeCalledWith({
      tempAbsenceId: lastTempAbsence.id,
      detaineeId,
      startTime: expect.any(Date),
      endTime: expect.any(Date),
      reason: 'Phone In Transit',
      activityRoomName: 'T1',
    });
    expect(createTempAbsenceService).toBeCalledWith({
      detaineeId,
      reason: 'Phone In Progress',
      activityRoomName: 'T1',
    });
    expect(getActivityRoomDetaineesOperation).toBeCalledWith(usage);
    expect(dispatch).toBeCalledTimes(3);
  });

  it('should notify error if last temp absence record is not available', async () => {
    const detaineeId = '123';
    const usage = 'phone';

    const getLastTempAbsenceService = jest.fn();
    getLastTempAbsenceService.mockReturnValue(null);
    const createTempAbsenceService = jest.fn();
    const updateTempAbsenceService = jest.fn();
    const getActivityRoomDetaineesOperation = jest.fn();
    const checkInAction = jest.fn();
    const checkInSuccessAction = jest.fn();
    const checkInFailAction = jest.fn();
    const sendErrorMessage = jest.fn();
    const notifyOperation = jest.fn();
    const dispatch = jest.fn();

    await operations.checkIn(
      detaineeId,
      usage,
      getLastTempAbsenceService,
      createTempAbsenceService,
      updateTempAbsenceService,
      getActivityRoomDetaineesOperation,
      checkInAction,
      checkInSuccessAction,
      checkInFailAction,
      sendErrorMessage,
      notifyOperation,
    )(dispatch);

    expect(checkInAction).toBeCalled();
    expect(checkInFailAction).toBeCalled();
    expect(getLastTempAbsenceService).toBeCalledWith(detaineeId);
    expect(notifyOperation).toBeCalledWith(dispatch, expect.any(String));
    expect(dispatch).toBeCalledTimes(2);
  });

  it('should notify error if last temp absence record does not have reason', async () => {
    const detaineeId = '123';
    const usage = 'phone';
    const lastTempAbsence = {
      id: '321',
      startTime: new Date(),
      reason: null,
      remarks: 'T1',
    };

    const getLastTempAbsenceService = jest.fn();
    getLastTempAbsenceService.mockReturnValue(lastTempAbsence);
    const createTempAbsenceService = jest.fn();
    const updateTempAbsenceService = jest.fn();
    const getActivityRoomDetaineesOperation = jest.fn();
    const checkInAction = jest.fn();
    const checkInSuccessAction = jest.fn();
    const checkInFailAction = jest.fn();
    const sendErrorMessage = jest.fn();
    const notifyOperation = jest.fn();
    const dispatch = jest.fn();

    await operations.checkIn(
      detaineeId,
      usage,
      getLastTempAbsenceService,
      createTempAbsenceService,
      updateTempAbsenceService,
      getActivityRoomDetaineesOperation,
      checkInAction,
      checkInSuccessAction,
      checkInFailAction,
      sendErrorMessage,
      notifyOperation,
    )(dispatch);

    expect(checkInAction).toBeCalled();
    expect(checkInFailAction).toBeCalled();
    expect(getLastTempAbsenceService).toBeCalledWith(detaineeId);
    expect(notifyOperation).toBeCalledWith(dispatch, expect.any(String));
    expect(dispatch).toBeCalledTimes(2);
  });

  it('should notify error if the reason of last temp absence record does not contain "In Transit"', async () => {
    const detaineeId = '123';
    const usage = 'phone';
    const lastTempAbsence = {
      id: '321',
      startTime: new Date(),
      reason: 'Phone In Progress',
      remarks: 'T1',
    };

    const getLastTempAbsenceService = jest.fn();
    getLastTempAbsenceService.mockReturnValue(lastTempAbsence);
    const createTempAbsenceService = jest.fn();
    const updateTempAbsenceService = jest.fn();
    const getActivityRoomDetaineesOperation = jest.fn();
    const checkInAction = jest.fn();
    const checkInSuccessAction = jest.fn();
    const checkInFailAction = jest.fn();
    const sendErrorMessage = jest.fn();
    const notifyOperation = jest.fn();
    const dispatch = jest.fn();

    await operations.checkIn(
      detaineeId,
      usage,
      getLastTempAbsenceService,
      createTempAbsenceService,
      updateTempAbsenceService,
      getActivityRoomDetaineesOperation,
      checkInAction,
      checkInSuccessAction,
      checkInFailAction,
      sendErrorMessage,
      notifyOperation,
    )(dispatch);

    expect(checkInAction).toBeCalled();
    expect(checkInFailAction).toBeCalled();
    expect(getLastTempAbsenceService).toBeCalledWith(detaineeId);
    expect(notifyOperation).toBeCalledWith(dispatch, expect.any(String));
    expect(dispatch).toBeCalledTimes(2);
  });

  it('should send error message when error occurs', async () => {
    const detaineeId = '123';
    const usage = 'phone';
    const error = new Error('Network error');

    const getLastTempAbsenceService = jest.fn();
    getLastTempAbsenceService.mockImplementation(() => {
      throw error;
    });
    const createTempAbsenceService = jest.fn();
    const updateTempAbsenceService = jest.fn();
    const getActivityRoomDetaineesOperation = jest.fn();
    const checkInAction = jest.fn();
    const checkInSuccessAction = jest.fn();
    const checkInFailAction = jest.fn();
    const sendErrorMessage = jest.fn();
    const dispatch = jest.fn();

    await operations.checkIn(
      detaineeId,
      usage,
      getLastTempAbsenceService,
      createTempAbsenceService,
      updateTempAbsenceService,
      getActivityRoomDetaineesOperation,
      checkInAction,
      checkInSuccessAction,
      checkInFailAction,
      sendErrorMessage,
    )(dispatch);

    expect(sendErrorMessage).toBeCalledWith({ dispatch, error });
    expect(checkInFailAction).toBeCalled();
    expect(dispatch).toBeCalledTimes(1);
  });
});
