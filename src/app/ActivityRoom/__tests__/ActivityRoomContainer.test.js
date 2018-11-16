import { mapStateToProps, mapDispatchToProps } from '../ActivityRoomContainer';

describe('ActivityRoomContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const isActivityRoomDetaineesLoaded = false;
    const usage = 'phone';
    const detainees = [];
    const isCheckingIn = false;
    const isAuthenticated = false;

    const result = mapStateToProps(
      state,
      isActivityRoomDetaineesLoaded,
      usage,
      detainees,
      isCheckingIn,
      isAuthenticated,
    );

    expect(result).toEqual({
      isActivityRoomDetaineesLoaded,
      usage,
      detainees,
      isCheckingIn,
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
  });
});
