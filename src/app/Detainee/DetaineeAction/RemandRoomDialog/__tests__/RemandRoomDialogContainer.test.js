import {
  mapStateToProps,
  mapDispatchToProps,
} from '../RemandRoomDialogContainer';

describe('RemandRoomDialogContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const areRoomsRefreshing = false;
    const currentRoom = 'C1';
    const destinationRoom = 'T2';
    const isAnyRoomAvailable = false;
    const isAssigningToRoom = false;
    const usage = 'REMAND HOLDING';

    const result = mapStateToProps(
      state,
      areRoomsRefreshing,
      currentRoom,
      destinationRoom,
      isAnyRoomAvailable,
      isAssigningToRoom,
      usage,
    );

    expect(result).toEqual({
      areRoomsRefreshing,
      currentRoom,
      destinationRoom,
      isAnyRoomAvailable,
      isAssigningToRoom,
      usage,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should getAvailableActivityRooms', () => {
      const { getAvailableRoomsRefresh } = mapDispatchToProps(dispatch);
      const getAvailableActivityRoomsRefreshMock = jest.fn();

      getAvailableRoomsRefresh(getAvailableActivityRoomsRefreshMock);

      expect(dispatch).toBeCalled();
      expect(getAvailableActivityRoomsRefreshMock).toBeCalled();
    });

    it('should moveDetaineeToActivityRoom', () => {
      const { moveDetaineeToRoom } = mapDispatchToProps(dispatch);
      const detaineeId = '123';
      const originRoom = 'C1';
      const destinationRoom = 'T4';
      const goBack = jest.fn();
      const moveDetaineeToActivityRoomMock = jest.fn();

      moveDetaineeToRoom(
        detaineeId,
        originRoom,
        destinationRoom,
        goBack,
        moveDetaineeToActivityRoomMock,
      );

      expect(dispatch).toBeCalled();
      expect(moveDetaineeToActivityRoomMock).toBeCalledWith(
        detaineeId,
        originRoom,
        destinationRoom,
        goBack,
      );
    });
  });
});
