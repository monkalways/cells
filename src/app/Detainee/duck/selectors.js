import { createSelector } from 'reselect';

// Basic selectors
const getDetainee = (state) => state.detainee.detaineeProfile.data;
// eslint-disable-next-line max-len
const isDetaineeProfileLoaded = (state) => state.detainee.detaineeProfile.loaded && state.detainee.activityRooms.loaded;

// Reselect selectors
const getDetaineeState = createSelector([getDetainee], (detainee) => detainee);

const isDetaineeProfileLoadedState = createSelector(
  [isDetaineeProfileLoaded],
  (loaded) => loaded,
);

export default {
  getDetaineeState,
  isDetaineeProfileLoadedState,
};
