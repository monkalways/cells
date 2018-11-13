import { createSelector } from 'reselect';

// Basic selectors
const getActivityRoomUsage = (state) => state.activityRoom.usage;
const isActivityRoomDetaineesLoaded = (state) => state.activityRoom.loaded;
const getActivityRoomDetainees = (state) => state.activityRoom.detainees;

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

export default {
  getActivityRoomUsageState,
  isActivityRoomDetaineesLoadedState,
  getActivityRoomDetaineesState,
};
