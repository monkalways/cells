import { createSelector } from 'reselect';

// Basic selectors
const getDetainee = (state) => state.detainee.data;
const isDetaineeProfileLoaded = (state) => state.detainee.loaded;

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
