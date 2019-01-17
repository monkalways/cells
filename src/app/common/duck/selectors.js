import { createSelector } from 'reselect';

// Basic selectors
const getVersions = (state) => state.common.versions.data;

// Reselect selectors
const getVersionsState = createSelector([getVersions], (versions) => versions);

export default {
  getVersionsState,
};
