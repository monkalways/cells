import { mapStateToProps, mapDispatchToProps } from '../ActivityRoomContainer';

describe('ActivityRoomContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const isActivityRoomDetaineesLoaded = false;
    const usage = 'phone';
    const detainees = [];
    const isCheckingIn = false;
    const isCheckingInSuccess = false;
    const isAuthenticated = false;

    const result = mapStateToProps(
      state,
      isActivityRoomDetaineesLoaded,
      usage,
      detainees,
      isCheckingIn,
      isCheckingInSuccess,
      isAuthenticated,
    );

    expect(result).toEqual({
      isActivityRoomDetaineesLoaded,
      usage,
      detainees,
      isCheckingIn,
      isCheckingInSuccess,
      isAuthenticated,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should getActivityRoomDetainees', () => {
      const { getActivityRoomDetainees } = mapDispatchToProps(dispatch);
      const usage = 'phone';
      const getActivityRoomDetaineesMock = jest.fn();

      getActivityRoomDetainees(usage, getActivityRoomDetaineesMock);

      expect(dispatch).toBeCalled();
      expect(getActivityRoomDetaineesMock).toBeCalledWith(usage);
    });

    it('should handleCheckIn', () => {
      const { handleCheckIn } = mapDispatchToProps(dispatch);
      const detaineeId = '123';
      const usage = 'phone';
      const handleCheckInMock = jest.fn();

      handleCheckIn(detaineeId, usage, handleCheckInMock);

      expect(dispatch).toBeCalled();
      expect(handleCheckInMock).toBeCalledWith(detaineeId, usage);
    });

    it('should handleSignIn', () => {
      const { handleSignIn } = mapDispatchToProps(dispatch);
      const handleSignInMock = jest.fn();

      handleSignIn(handleSignInMock);

      expect(dispatch).toBeCalled();
      expect(handleSignInMock).toBeCalled();
    });

    it('should logOut', () => {
      const { logOut } = mapDispatchToProps(dispatch);
      const first = 'activity-rooms';
      const second = 'phone';
      const logOutMock = jest.fn();

      logOut(first, second, logOutMock);

      expect(dispatch).toBeCalled();
      expect(logOutMock).toBeCalledWith(first, second);
    });

    it('should refreshAuthenticationTimeout', () => {
      const { refreshAuthenticationTimeout } = mapDispatchToProps(dispatch);
      const refreshAuthenticationTimeoutMock = jest.fn();

      refreshAuthenticationTimeout(refreshAuthenticationTimeoutMock);

      expect(dispatch).toBeCalled();
      expect(refreshAuthenticationTimeoutMock).toBeCalled();
    });

    it('should startAuthenticationTimeout', () => {
      const { startAuthenticationTimeout } = mapDispatchToProps(dispatch);
      const startAuthenticationTimeoutMock = jest.fn();
      const logoutMock = jest.fn();

      startAuthenticationTimeout(logoutMock, startAuthenticationTimeoutMock);

      expect(dispatch).toBeCalled();
      expect(startAuthenticationTimeoutMock).toBeCalledWith(logoutMock);
    });

    it('should startAuthenticationTimeout', () => {
      const { stopAuthenticationTimeout } = mapDispatchToProps(dispatch);
      const stopAuthenticationTimeoutMock = jest.fn();

      stopAuthenticationTimeout(stopAuthenticationTimeoutMock);

      expect(dispatch).toBeCalled();
      expect(stopAuthenticationTimeoutMock).toBeCalled();
    });
  });
});
