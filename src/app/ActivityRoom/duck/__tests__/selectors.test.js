import selectors from '../selectors';

describe('ActivityRoom selectors', () => {
  it('should select ActivityRoomUsage', () => {
    const usage = 'phone';
    const state = {
      activityRoom: {
        usage,
      },
    };

    const result = selectors.getActivityRoomUsageState(state);
    expect(result).toEqual(usage);
  });

  it('should select isActivityRoomDetaineesLoaded', () => {
    const loaded = false;
    const state = {
      activityRoom: {
        loaded,
      },
    };

    const result = selectors.isActivityRoomDetaineesLoadedState(state);
    expect(result).toEqual(loaded);
  });

  it('should select ActivityRoomDetainees', () => {
    const detainees = [];
    const state = {
      activityRoom: {
        detainees,
      },
    };

    const result = selectors.getActivityRoomDetaineesState(state);
    expect(result).toEqual(detainees);
  });

  it('should select isCheckingInState', () => {
    const checkingIn = false;
    const state = {
      activityRoom: {
        checkingIn,
      },
    };

    const result = selectors.isCheckingInState(state);
    expect(result).toEqual(checkingIn);
  });

  it('should select isCheckingInSuccessState', () => {
    const checkingInSuccess = false;
    const state = {
      activityRoom: {
        checkingInSuccess,
      },
    };

    const result = selectors.isCheckingInSuccessState(state);
    expect(result).toEqual(checkingInSuccess);
  });

  it('should select getCheckingInDetaineeIdState', () => {
    const checkingInDetaineeId = '123';
    const state = {
      activityRoom: {
        checkingInDetaineeId,
      },
    };

    const result = selectors.getCheckingInDetaineeIdState(state);
    expect(result).toEqual(checkingInDetaineeId);
  });
});
