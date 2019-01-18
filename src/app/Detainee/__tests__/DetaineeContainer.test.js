import { mapDispatchToProps } from '../DetaineeContainer';

describe('DetaineeContainer', () => {
  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should initialize', () => {
      const { initialize } = mapDispatchToProps(dispatch);
      const id = 'id';
      const getAvailableActivityRoomsMock = jest.fn();
      const getAvailableReleaseRoomsMock = jest.fn();
      const getAvailableRemandRoomsMock = jest.fn();
      const getDetaineeMock = jest.fn();

      initialize(
        id,
        getAvailableActivityRoomsMock,
        getAvailableReleaseRoomsMock,
        getAvailableRemandRoomsMock,
        getDetaineeMock,
      );

      expect(dispatch).toBeCalled();
      expect(getAvailableActivityRoomsMock).toBeCalled();
      expect(getAvailableReleaseRoomsMock).toBeCalled();
      expect(getAvailableRemandRoomsMock).toBeCalled();
      expect(getDetaineeMock).toBeCalledWith(id);
    });

    it('should logOut', () => {
      const { logOut } = mapDispatchToProps(dispatch);
      const first = 'cells';
      const second = 'c1';
      const stopAuthenticationTimeoutMock = jest.fn();
      const logOutMock = jest.fn();

      logOut(first, second, logOutMock);

      expect(dispatch).toBeCalled();
      expect(stopAuthenticationTimeoutMock).toBeCalled();
      expect(logOutMock).toBeCalled();
    });
  });
});
