import {
  mapStateToProps,
  mapDispatchToProps,
} from '../RoomSelectionDialogContainer';

describe('RoomSelectionDialogContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const props = { usage: 'usage' };
    const areActivityRoomsRefreshing = false;
    const availableRooms = [];
    const currentRoom = 'C1';
    const isAnyRoomForGivenActivityAvailable = false;
    const isAssigningToRoom = false;

    const result = mapStateToProps(
      state,
      props,
      areActivityRoomsRefreshing,
      availableRooms,
      currentRoom,
      isAnyRoomForGivenActivityAvailable,
      isAssigningToRoom,
    );

    expect(result).toEqual({
      areActivityRoomsRefreshing,
      availableRooms,
      currentRoom,
      isAnyRoomForGivenActivityAvailable,
      isAssigningToRoom,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should getAvailableActivityRooms', () => {
      const { getAvailableActivityRoomsRefresh } = mapDispatchToProps(dispatch);
      const getAvailableActivityRoomsRefreshMock = jest.fn();

      getAvailableActivityRoomsRefresh(getAvailableActivityRoomsRefreshMock);

      expect(dispatch).toBeCalled();
      expect(getAvailableActivityRoomsRefreshMock).toBeCalled();
    });

    it('should moveDetaineeToActivityRoom', () => {
      const { moveDetaineeToActivityRoom } = mapDispatchToProps(dispatch);
      const detaineeId = '123';
      const originRoom = 'C1';
      const destinationRoom = 'T4';
      const goBack = jest.fn();
      const moveDetaineeToActivityRoomMock = jest.fn();

      moveDetaineeToActivityRoom(
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
