import selectors from '../selectors';

test('should select ActivityRoomUsage', () => {
  const usage = 'phone';
  const state = {
    activityRoom: {
      usage,
    },
  };

  const result = selectors.getActivityRoomUsageState(state);
  expect(result).toEqual(usage);
});

test('should select isActivityRoomDetaineesLoaded', () => {
  const loaded = false;
  const state = {
    activityRoom: {
      loaded,
    },
  };

  const result = selectors.isActivityRoomDetaineesLoadedState(state);
  expect(result).toEqual(loaded);
});

test('should select ActivityRoomDetainees', () => {
  const detainees = [];
  const state = {
    activityRoom: {
      detainees,
    },
  };

  const result = selectors.getActivityRoomDetaineesState(state);
  expect(result).toEqual(detainees);
});

test('should select ActivityRoomDetainees', () => {
  const checkingIn = false;
  const state = {
    activityRoom: {
      checkingIn,
    },
  };

  const result = selectors.isCheckingInState(state);
  expect(result).toEqual(checkingIn);
});
