import operations from '../operations';

describe('Detainee operations', () => {
  describe('getAvailableActivityRooms', () => {
    it('should return successfully when getAvailableActivityRoomsService returns valid rooms', async () => {
      const availableRooms = [];

      const getAvailableActivityRoomsAction = jest.fn();
      const getAvailableActivityRoomsService = jest.fn();
      getAvailableActivityRoomsService.mockReturnValue(availableRooms);
      const getAvailableActivityRoomsSuccessAction = jest.fn();
      const dispatch = jest.fn();

      await operations.getAvailableActivityRooms(
        getAvailableActivityRoomsAction,
        getAvailableActivityRoomsService,
        getAvailableActivityRoomsSuccessAction,
      )(dispatch);

      expect(getAvailableActivityRoomsAction).toBeCalled();
      expect(getAvailableActivityRoomsService).toBeCalled();
      expect(getAvailableActivityRoomsSuccessAction).toBeCalledWith(availableRooms);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should send an error message when an error occurs', async () => {
      const error = new Error('Network error');

      const getAvailableActivityRoomsAction = jest.fn();
      const getAvailableActivityRoomsService = jest.fn();
      getAvailableActivityRoomsService.mockImplementation(() => {
        throw error;
      });
      const getAvailableActivityRoomsSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getAvailableActivityRooms(
        getAvailableActivityRoomsAction,
        getAvailableActivityRoomsService,
        getAvailableActivityRoomsSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getAvailableActivityRoomsAction).toBeCalled();
      expect(getAvailableActivityRoomsService).toBeCalled();
      expect(sendErrorMessage).toBeCalledWith({ dispatch, error });
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('getAvailableActivityRoomsRefresh', () => {
    it('should return successfully when getAvailableActivityRoomsService returns valid rooms', async () => {
      const availableRooms = [];

      const getAvailableActivityRoomsRefreshAction = jest.fn();
      const getAvailableActivityRoomsService = jest.fn();
      getAvailableActivityRoomsService.mockReturnValue(availableRooms);
      const getAvailableActivityRoomsSuccessAction = jest.fn();
      const dispatch = jest.fn();

      await operations.getAvailableActivityRoomsRefresh(
        getAvailableActivityRoomsRefreshAction,
        getAvailableActivityRoomsService,
        getAvailableActivityRoomsSuccessAction,
      )(dispatch);

      expect(getAvailableActivityRoomsRefreshAction).toBeCalled();
      expect(getAvailableActivityRoomsSuccessAction).toBeCalledWith(availableRooms);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should send an error message when an error occurs', async () => {
      const error = new Error('Network error');

      const getAvailableActivityRoomsRefreshAction = jest.fn();
      const getAvailableActivityRoomsService = jest.fn();
      getAvailableActivityRoomsService.mockImplementation(() => {
        throw error;
      });
      const getAvailableActivityRoomsSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getAvailableActivityRoomsRefresh(
        getAvailableActivityRoomsRefreshAction,
        getAvailableActivityRoomsService,
        getAvailableActivityRoomsSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getAvailableActivityRoomsRefreshAction).toBeCalled();
      expect(getAvailableActivityRoomsService).toBeCalled();
      expect(sendErrorMessage).toBeCalledWith({ dispatch, error });
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('getAvailableReleaseRooms', () => {
    it('should return successfully when getAvailableReleaseRoomsService returns valid rooms', async () => {
      const availableRooms = [];

      const getAvailableReleaseRoomsAction = jest.fn();
      const getAvailableReleaseRoomsService = jest.fn();
      getAvailableReleaseRoomsService.mockReturnValue(availableRooms);
      const getAvailableReleaseRoomsSuccessAction = jest.fn();
      const dispatch = jest.fn();

      await operations.getAvailableReleaseRooms(
        getAvailableReleaseRoomsAction,
        getAvailableReleaseRoomsService,
        getAvailableReleaseRoomsSuccessAction,
      )(dispatch);

      expect(getAvailableReleaseRoomsAction).toBeCalled();
      expect(getAvailableReleaseRoomsService).toBeCalled();
      expect(getAvailableReleaseRoomsSuccessAction).toBeCalledWith(availableRooms);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should send an error message when an error occurs', async () => {
      const error = new Error('Network error');

      const getAvailableReleaseRoomsAction = jest.fn();
      const getAvailableReleaseRoomsService = jest.fn();
      getAvailableReleaseRoomsService.mockImplementation(() => {
        throw error;
      });
      const getAvailableReleaseRoomsSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getAvailableReleaseRooms(
        getAvailableReleaseRoomsAction,
        getAvailableReleaseRoomsService,
        getAvailableReleaseRoomsSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getAvailableReleaseRoomsAction).toBeCalled();
      expect(getAvailableReleaseRoomsService).toBeCalled();
      expect(sendErrorMessage).toBeCalledWith({ dispatch, error });
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('getAvailableReleaseRoomsRefresh', () => {
    it('should return successfully when getAvailableReleaseRoomsService returns valid rooms', async () => {
      const availableRooms = [];

      const getAvailableReleaseRoomsRefreshAction = jest.fn();
      const getAvailableReleaseRoomsService = jest.fn();
      getAvailableReleaseRoomsService.mockReturnValue(availableRooms);
      const getAvailableReleaseRoomsSuccessAction = jest.fn();
      const dispatch = jest.fn();

      await operations.getAvailableReleaseRoomsRefresh(
        getAvailableReleaseRoomsRefreshAction,
        getAvailableReleaseRoomsService,
        getAvailableReleaseRoomsSuccessAction,
      )(dispatch);

      expect(getAvailableReleaseRoomsRefreshAction).toBeCalled();
      expect(getAvailableReleaseRoomsSuccessAction).toBeCalledWith(availableRooms);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should send an error message when an error occurs', async () => {
      const error = new Error('Network error');

      const getAvailableReleaseRoomsRefreshAction = jest.fn();
      const getAvailableReleaseRoomsService = jest.fn();
      getAvailableReleaseRoomsService.mockImplementation(() => {
        throw error;
      });
      const getAvailableReleaseRoomsSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getAvailableReleaseRoomsRefresh(
        getAvailableReleaseRoomsRefreshAction,
        getAvailableReleaseRoomsService,
        getAvailableReleaseRoomsSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getAvailableReleaseRoomsRefreshAction).toBeCalled();
      expect(getAvailableReleaseRoomsService).toBeCalled();
      expect(sendErrorMessage).toBeCalledWith({ dispatch, error });
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('getAvailableRemandRooms', () => {
    it('should return successfully when getAvailableRemandRoomsService returns valid rooms', async () => {
      const availableRooms = [];

      const getAvailableRemandRoomsAction = jest.fn();
      const getAvailableRemandRoomsService = jest.fn();
      getAvailableRemandRoomsService.mockReturnValue(availableRooms);
      const getAvailableRemandRoomsSuccessAction = jest.fn();
      const dispatch = jest.fn();

      await operations.getAvailableRemandRooms(
        getAvailableRemandRoomsAction,
        getAvailableRemandRoomsService,
        getAvailableRemandRoomsSuccessAction,
      )(dispatch);

      expect(getAvailableRemandRoomsAction).toBeCalled();
      expect(getAvailableRemandRoomsService).toBeCalled();
      expect(getAvailableRemandRoomsSuccessAction).toBeCalledWith(availableRooms);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should send an error message when an error occurs', async () => {
      const error = new Error('Network error');

      const getAvailableRemandRoomsAction = jest.fn();
      const getAvailableRemandRoomsService = jest.fn();
      getAvailableRemandRoomsService.mockImplementation(() => {
        throw error;
      });
      const getAvailableRemandRoomsSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getAvailableRemandRooms(
        getAvailableRemandRoomsAction,
        getAvailableRemandRoomsService,
        getAvailableRemandRoomsSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getAvailableRemandRoomsAction).toBeCalled();
      expect(getAvailableRemandRoomsService).toBeCalled();
      expect(sendErrorMessage).toBeCalledWith({ dispatch, error });
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('getAvailableRemandRoomsRefresh', () => {
    it('should return successfully when getAvailableRemandRoomsService returns valid rooms', async () => {
      const availableRooms = [];

      const getAvailableRemandRoomsRefreshAction = jest.fn();
      const getAvailableRemandRoomsService = jest.fn();
      getAvailableRemandRoomsService.mockReturnValue(availableRooms);
      const getAvailableRemandRoomsSuccessAction = jest.fn();
      const dispatch = jest.fn();

      await operations.getAvailableRemandRoomsRefresh(
        getAvailableRemandRoomsRefreshAction,
        getAvailableRemandRoomsService,
        getAvailableRemandRoomsSuccessAction,
      )(dispatch);

      expect(getAvailableRemandRoomsRefreshAction).toBeCalled();
      expect(getAvailableRemandRoomsSuccessAction).toBeCalledWith(availableRooms);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should send an error message when an error occurs', async () => {
      const error = new Error('Network error');

      const getAvailableRemandRoomsRefreshAction = jest.fn();
      const getAvailableRemandRoomsService = jest.fn();
      getAvailableRemandRoomsService.mockImplementation(() => {
        throw error;
      });
      const getAvailableRemandRoomsSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getAvailableRemandRoomsRefresh(
        getAvailableRemandRoomsRefreshAction,
        getAvailableRemandRoomsService,
        getAvailableRemandRoomsSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getAvailableRemandRoomsRefreshAction).toBeCalled();
      expect(getAvailableRemandRoomsService).toBeCalled();
      expect(sendErrorMessage).toBeCalledWith({ dispatch, error });
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('getDetainee', () => {
    it('should return successfully when getDetaineeService returns a valid detainee', async () => {
      const id = 'id';
      const detainee = {};

      const getDetaineeAction = jest.fn();
      const getDetaineeService = jest.fn();
      getDetaineeService.mockReturnValue(detainee);
      const getDetaineeSuccessAction = jest.fn();
      const dispatch = jest.fn();

      await operations.getDetainee(
        id,
        getDetaineeAction,
        getDetaineeService,
        getDetaineeSuccessAction,
      )(dispatch);

      expect(getDetaineeAction).toBeCalled();
      expect(getDetaineeService).toBeCalledWith(id);
      expect(getDetaineeSuccessAction).toBeCalledWith(detainee);
      expect(dispatch).toBeCalledTimes(2);
    });

    it('should send an error message when an error occurs', async () => {
      const error = new Error('Network error');
      const id = 'id';

      const getDetaineeAction = jest.fn();
      const getDetaineeService = jest.fn();
      getDetaineeService.mockImplementation(() => {
        throw error;
      });
      const getDetaineeSuccessAction = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.getDetainee(
        id,
        getDetaineeAction,
        getDetaineeService,
        getDetaineeSuccessAction,
        sendErrorMessage,
      )(dispatch);

      expect(getDetaineeAction).toBeCalled();
      expect(getDetaineeService).toBeCalledWith(id);
      expect(sendErrorMessage).toBeCalledWith({ dispatch, error });
      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('checkDetaineeInToCell', () => {
    it('should return successfully when checkDetaineeInToCellService returns true', async () => {
      const detaineeId = 'id';
      const cellName = 'C1';

      const assignToRoomAction = jest.fn();
      const assignToRoomFailureAction = jest.fn();
      const assignToRoomSuccessAction = jest.fn();
      const getAvailableActivityRoomsOperation = jest.fn();
      const getDetaineeOperation = jest.fn();
      const checkDetaineeInToCellService = jest.fn();
      const dispatch = jest.fn();

      await operations.checkDetaineeInToCell(
        detaineeId,
        cellName,
        assignToRoomAction,
        assignToRoomFailureAction,
        assignToRoomSuccessAction,
        getAvailableActivityRoomsOperation,
        getDetaineeOperation,
        checkDetaineeInToCellService,
      )(dispatch);

      expect(assignToRoomAction).toBeCalled();
      expect(checkDetaineeInToCellService).toBeCalledWith(detaineeId, cellName);
      expect(assignToRoomSuccessAction).toBeCalled();
      expect(getAvailableActivityRoomsOperation).toBeCalled();
      expect(getDetaineeOperation).toBeCalledWith(detaineeId);
      expect(dispatch).toBeCalledTimes(4);
      expect(assignToRoomFailureAction).not.toBeCalled();
    });

    it('should send an error message when an error occurs', async () => {
      const detaineeId = 'id';
      const cellName = 'C1';
      const error = new Error('Network error');

      const assignToRoomAction = jest.fn();
      const assignToRoomFailureAction = jest.fn();
      const assignToRoomSuccessAction = jest.fn();
      const getAvailableActivityRoomsOperation = jest.fn();
      const getDetaineeOperation = jest.fn();
      const checkDetaineeInToCellService = jest.fn();
      checkDetaineeInToCellService.mockImplementation(() => {
        throw error;
      });
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.checkDetaineeInToCell(
        detaineeId,
        cellName,
        assignToRoomAction,
        assignToRoomFailureAction,
        assignToRoomSuccessAction,
        getAvailableActivityRoomsOperation,
        getDetaineeOperation,
        checkDetaineeInToCellService,
        sendErrorMessage,
      )(dispatch);

      expect(assignToRoomAction).toBeCalled();
      expect(checkDetaineeInToCellService).toBeCalledWith(detaineeId, cellName);
      expect(assignToRoomSuccessAction).not.toBeCalled();
      expect(getAvailableActivityRoomsOperation).not.toBeCalled();
      expect(getDetaineeOperation).not.toBeCalledWith(detaineeId);
      expect(dispatch).toBeCalledTimes(2);
      expect(sendErrorMessage).toBeCalledWith({ dispatch, error });
      expect(assignToRoomFailureAction).toBeCalled();
    });
  });

  describe('moveDetaineeToRoom', () => {
    it('should return successfully when moveDetaineeToRoomService returns true', async () => {
      const detaineeId = 'id';
      const originRoom = 'origin';
      const destinationRoom = 'destination';

      const assignToRoomAction = jest.fn();
      const assignToRoomFailureAction = jest.fn();
      const assignToRoomSuccessAction = jest.fn();
      const getAvailableActivityRoomsOperation = jest.fn();
      const getDetaineeOperation = jest.fn();
      const moveDetaineeToRoomService = jest.fn();
      const dispatch = jest.fn();

      await operations.moveDetaineeToRoom(
        detaineeId,
        originRoom,
        destinationRoom,
        assignToRoomAction,
        assignToRoomFailureAction,
        assignToRoomSuccessAction,
        getAvailableActivityRoomsOperation,
        getDetaineeOperation,
        moveDetaineeToRoomService,
      )(dispatch);

      expect(assignToRoomAction).toBeCalled();
      expect(moveDetaineeToRoomService).toBeCalledWith(
        detaineeId,
        originRoom,
        destinationRoom,
      );
      expect(assignToRoomSuccessAction).toBeCalled();
      expect(getAvailableActivityRoomsOperation).toBeCalled();
      expect(getDetaineeOperation).toBeCalledWith(detaineeId);
      expect(dispatch).toBeCalledTimes(4);
      expect(assignToRoomFailureAction).not.toBeCalled();
    });

    it('should send an error message when an error occurs', async () => {
      const detaineeId = 'id';
      const originRoom = 'origin';
      const destinationRoom = 'destination';
      const error = new Error('Network error');

      const assignToRoomAction = jest.fn();
      const assignToRoomFailureAction = jest.fn();
      const assignToRoomSuccessAction = jest.fn();
      const getAvailableActivityRoomsOperation = jest.fn();
      const getDetaineeOperation = jest.fn();
      const moveDetaineeToRoomService = jest.fn();
      moveDetaineeToRoomService.mockImplementation(() => {
        throw error;
      });
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.moveDetaineeToRoom(
        detaineeId,
        originRoom,
        destinationRoom,
        assignToRoomAction,
        assignToRoomFailureAction,
        assignToRoomSuccessAction,
        getAvailableActivityRoomsOperation,
        getDetaineeOperation,
        moveDetaineeToRoomService,
        sendErrorMessage,
      )(dispatch);

      expect(assignToRoomAction).toBeCalled();
      expect(moveDetaineeToRoomService).toBeCalledWith(
        detaineeId,
        originRoom,
        destinationRoom,
      );
      expect(assignToRoomSuccessAction).not.toBeCalled();
      expect(getAvailableActivityRoomsOperation).not.toBeCalled();
      expect(getDetaineeOperation).not.toBeCalled();
      expect(dispatch).toBeCalledTimes(2);
      expect(sendErrorMessage).toBeCalledWith({ dispatch, error });
      expect(assignToRoomFailureAction).toBeCalled();
    });
  });

  describe('savePhoneCallDecline', () => {
    it('should return successfully when savePhoneCallDeclineService returns true', async () => {
      const arrestId = 'id';
      const cellName = 'cellName';
      const userName = 'userName';
      const message = 'Phone decline saved.';

      const phoneCallDeclineAction = jest.fn();
      const phoneCallDeclineFailureAction = jest.fn();
      const phoneCallDeclineSuccessAction = jest.fn();
      const pushAction = jest.fn();
      const savePhoneCallDeclineService = jest.fn();
      savePhoneCallDeclineService.mockReturnValue(true);
      const sendSuccessMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.savePhoneCallDecline(
        arrestId,
        cellName,
        userName,
        phoneCallDeclineAction,
        phoneCallDeclineFailureAction,
        phoneCallDeclineSuccessAction,
        pushAction,
        savePhoneCallDeclineService,
        sendSuccessMessage,
      )(dispatch);

      expect(phoneCallDeclineAction).toBeCalled();
      expect(savePhoneCallDeclineService).toBeCalledWith(arrestId, userName);
      expect(phoneCallDeclineSuccessAction).toBeCalled();
      expect(pushAction).toBeCalledWith('/cells/cellName/home/');
      expect(sendSuccessMessage).toBeCalledWith({dispatch, message});
      expect(dispatch).toBeCalledTimes(3);
      expect(phoneCallDeclineFailureAction).not.toBeCalled();
    });

    it('should send an error message when an error occurs', async () => {
      const arrestId = 'id';
      const cellName = 'cellName';
      const userName = 'userName';
      const error = new Error('Network error');

      const phoneCallDeclineAction = jest.fn();
      const phoneCallDeclineFailureAction = jest.fn();
      const phoneCallDeclineSuccessAction = jest.fn();
      const pushAction = jest.fn();
      const savePhoneCallDeclineService = jest.fn();
      savePhoneCallDeclineService.mockImplementation(() => {
          throw error;
        });
      const sendSuccessMessage = jest.fn();
      const sendErrorMessage = jest.fn();
      const dispatch = jest.fn();

      await operations.savePhoneCallDecline(
        arrestId,
        cellName,
        userName,
        phoneCallDeclineAction,
        phoneCallDeclineFailureAction,
        phoneCallDeclineSuccessAction,
        pushAction,
        savePhoneCallDeclineService,
        sendSuccessMessage,
        sendErrorMessage
      )(dispatch);

      expect(phoneCallDeclineAction).toBeCalled();
      expect(savePhoneCallDeclineService).toBeCalledWith(arrestId, userName);
      expect(phoneCallDeclineSuccessAction).not.toBeCalled();
      expect(pushAction).not.toBeCalled();
      expect(sendSuccessMessage).not.toBeCalled();
      expect(dispatch).toBeCalledTimes(2);
      expect(sendErrorMessage).toBeCalledWith({dispatch, error});
      expect(phoneCallDeclineFailureAction).toBeCalled();
    });
  });
});
