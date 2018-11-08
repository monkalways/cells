import { createSelector } from 'reselect';

// Basic selectors
const getVersions = (state) => state.versions;

// Reselect selectors
const getVersionsState = createSelector([getVersions], (versions) => versions);

export default {
  getVersionsState,
};
