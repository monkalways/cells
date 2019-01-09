import {
  mapStateToProps,
  mapDispatchToProps,
} from '../ActivityRoomDialogContainer';

describe('ActivityRoomDialogContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const props = { usage: 'usage' };
    const areRoomsRefreshing = false;
    const currentRoom = 'C1';
    const destinationRoom = 'T2';
    const isAnyRoomAvailable = false;
    const isAssigningToRoom = false;

    const result = mapStateToProps(
      state,
      props,
      areRoomsRefreshing,
      currentRoom,
      destinationRoom,
      isAnyRoomAvailable,
      isAssigningToRoom,
    );

    expect(result).toEqual({
      areRoomsRefreshing,
      currentRoom,
      destinationRoom,
      isAnyRoomAvailable,
      isAssigningToRoom,
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
      const moveDetaineeToActivityRoomMock = jest.fn();

      moveDetaineeToRoom(
        detaineeId,
        originRoom,
        destinationRoom,
        moveDetaineeToActivityRoomMock,
      );

      expect(dispatch).toBeCalled();
      expect(moveDetaineeToActivityRoomMock).toBeCalledWith(
        detaineeId,
        originRoom,
        destinationRoom,
      );
    });
  });
});
