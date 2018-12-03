import { createSelector } from 'reselect';

// Basic selectors
const getActivityRoomUsage = (state) => state.activityRoom.usage;
const isActivityRoomDetaineesLoaded = (state) => state.activityRoom.loaded;
const getActivityRoomDetainees = (state) => state.activityRoom.detainees;
const isCheckingIn = (state) => state.activityRoom.checkingIn;
const isCheckingInSuccess = (state) => state.activityRoom.checkingInSuccess;

// Reselect selectors
const getActivityRoomUsageState = createSelector(
  [getActivityRoomUsage],
  (usage) => usage,
);

const isActivityRoomDetaineesLoadedState = createSelector(
  [isActivityRoomDetaineesLoaded],
  (loaded) => loaded,
);

const getActivityRoomDetaineesState = createSelector(
  [getActivityRoomDetainees],
  (detainees) => detainees,
);

const isCheckingInState = createSelector(
  [isCheckingIn],
  (checkingIn) => checkingIn,
);

const isCheckingInSuccessState = createSelector(
  [isCheckingInSuccess],
  (checkingInSuccess) => checkingInSuccess,
);

export default {
  getActivityRoomUsageState,
  isActivityRoomDetaineesLoadedState,
  getActivityRoomDetaineesState,
  isCheckingInState,
  isCheckingInSuccessState,
};
