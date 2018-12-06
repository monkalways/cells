import { mapDispatchToProps } from '../DetaineeContainer';

describe('DetaineeContainer', () => {
  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should getAvailableActivityRooms', () => {
      const { getAvailableActivityRooms } = mapDispatchToProps(dispatch);
      const getAvailableActivityRoomsMock = jest.fn();

      getAvailableActivityRooms(getAvailableActivityRoomsMock);

      expect(dispatch).toBeCalled();
      expect(getAvailableActivityRoomsMock).toBeCalled();
    });

    it('should getDetainee', () => {
      const { getDetainee } = mapDispatchToProps(dispatch);
      const getDetaineeMock = jest.fn();
      const id = 'id';

      getDetainee(id, getDetaineeMock);

      expect(dispatch).toBeCalled();
      expect(getDetaineeMock).toBeCalledWith(id);
    });

    it('should logOut', () => {
      const { logOut } = mapDispatchToProps(dispatch);
      const logOutMock = jest.fn();
      const first = 'cells';
      const second = 'c1';

      logOut(first, second, logOutMock);

      expect(dispatch).toBeCalled();
      expect(logOutMock).toBeCalled();
    });
  });
});
