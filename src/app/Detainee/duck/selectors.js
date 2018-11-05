import { createSelector } from 'reselect';

// Basic selectors
const getDetainee = (state) => {
  console.log(state);
  return state.detainee.detainee.data;
};
const isDetaineeProfileLoaded = (state) => state.detainee.detainee.loaded;

// Reselect selectors
const getDetaineeState = createSelector([getDetainee], (detainee) => {
  console.log(`selector getDetaineeState: detainee = ${detainee}`);
  return detainee;
});

const isDetaineeProfileLoadedState = createSelector(
  [isDetaineeProfileLoaded],
  (loaded) => {
    console.log(`selector isDetaineeProfileLoadedState: loaded = ${loaded}`);
    return loaded;
  },
);

export default {
  getDetaineeState,
  isDetaineeProfileLoadedState,
};
