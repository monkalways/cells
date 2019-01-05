import { createSelector } from 'reselect';
import queryString from 'query-string';
import constants from '../constants';
import commonConstants from '../../constants';

// Basic selectors
const areActivityRoomsRefreshing = (state) => state.detainee.activityRooms.isRefreshing;
const areReleaseRoomsRefreshing = (state) => state.detainee.releaseRooms.refreshing;
const areRemandRoomsRefreshing = (state) => state.detainee.remandRooms.refreshing;
const getAvailableActivityRooms = (state) => state.detainee.activityRooms.availableActivityRooms;
const getCurrentActivityRoom = (state) => {
  const { first, second } = queryString.parse(state.router.location.search);
  if (first === constants.CELLS_QUERYSTRING) {
    return constants.CELL;
  }
  return second;
};

const getCurrentRoom = (state) => {
  const { first, second } = queryString.parse(state.router.location.search);
  if (first === constants.CELLS_QUERYSTRING) {
    return second;
  }
  return state.detainee.detaineeProfile.data.currentActivityRoom;
};

const getDetainee = (state) => state.detainee.detaineeProfile.data;
const getSecondProp = (_state, prop) => prop;

const isActivityRoomOptionAvailable = (state, usage, inProgress, inTransit) => {
  const { first } = queryString.parse(state.router.location.search);
  const { location } = state.detainee.detaineeProfile.data;
  const {
    availableRooms,
    // eslint-disable-next-line max-len
  } = state.detainee.activityRooms.availableActivityRooms.find((room) => room.usage.toLowerCase() === usage.toLowerCase());
  return (
    // Can't move from cell screen if detainee is "In Progress" for an activity.
    !(
      first === constants.CELLS_QUERYSTRING
      && location.toLowerCase().includes(commonConstants.IN_PROGRESS.toLowerCase())
    )
    // Can't move to activity room if detainee is already there or on en route.
    && location.toLowerCase() !== inProgress.toLowerCase()
    && location.toLowerCase() !== inTransit.toLowerCase()
    && availableRooms.length > 0
  );
};

const isAssigningToRoom = (state) => state.detainee.activityRooms.assigningToRoom;

const isDetaineeProfileLoaded = (state) => state.detainee.activityRooms.loaded
  && state.detainee.detaineeProfile.loaded
  && state.detainee.releaseRooms.loaded
  && state.detainee.remandRooms.loaded;

const isInCellOptionAvailable = (state) => {
  const { first } = queryString.parse(state.router.location.search);
  const { location } = state.detainee.detaineeProfile.data;

  // Case 1: If the user came from the cell management screen and the detainee location
  // is "Cell - In Transit" this button is enabled so they can be checked in.
  if (
    first === constants.CELLS_QUERYSTRING
    && location.toLowerCase() === commonConstants.CELL_IN_TRANSIT.toLowerCase()
  ) return true;

  // Case 2: If the user came from the activity room screen and the detainee location
  // is not already "Cell - In Transit", the button is enabled
  // so they can be send back to their cell.
  if (
    first === constants.ACTIVITY_ROOMS_QUERYSTRING
    && location.toLowerCase() !== commonConstants.CELL_IN_TRANSIT.toLowerCase()
  ) return true;

  return false;
};

const isPhoneDeclineOptionAvailable = (state) => {
  const { first } = queryString.parse(state.router.location.search);
  const { location } = state.detainee.detaineeProfile.data;

  // Allow the phone decline option if navigating from the cell screen and
  // detainee location is the cell ('').
  if (first === constants.CELLS_QUERYSTRING && location === '') return true;

  return false;
};

const isReleaseRoomOptionAvailable = (state) => {
  const { first } = queryString.parse(state.router.location.search);
  const { location } = state.detainee.detaineeProfile.data;
  const { gender, detentionUnitName } = getDetainee(state);
  // eslint-disable-next-line max-len
  const availableRooms = state.detainee.releaseRooms.data.filter((room) => room.gender === gender && room.designation === detentionUnitName);
  return (
    // Can't move from cell screen if detainee is "In Progress" for an activity.
    !(
      first === constants.CELLS_QUERYSTRING
      && location.toLowerCase().includes(commonConstants.IN_PROGRESS.toLowerCase())
    )
    // Can't move to room if detainee is already in transit there.
    && location.toLowerCase()
      !== commonConstants.RELEASE_HOLDING_IN_TRANSIT.toLowerCase()
    && availableRooms.length > 0
  );
};

const isRemandRoomOptionAvailable = (state) => {
  const { first } = queryString.parse(state.router.location.search);
  const { location } = state.detainee.detaineeProfile.data;
  const { gender, detentionUnitName } = getDetainee(state);
  // eslint-disable-next-line max-len
  const availableRooms = state.detainee.remandRooms.data.filter((room) => room.gender === gender && room.designation === detentionUnitName);
  return (
    // Can't move from cell screen if detainee is "In Progress" for an activity.
    !(
      first === constants.CELLS_QUERYSTRING
      && location.toLowerCase().includes(commonConstants.IN_PROGRESS.toLowerCase())
    )
    // Can't move to room if detainee is already in transit there.
    && location.toLowerCase()
      !== commonConstants.REMAND_HOLDING_IN_TRANSIT.toLowerCase()
    && availableRooms.length > 0
  );
};

const isUpdatingDetentionLog = (state) => state.detainee.activityRooms.updatingDetentionLog;

// Reselect selectors
const areActivityRoomsRefreshingState = createSelector(
  [areActivityRoomsRefreshing],
  (refreshing) => refreshing,
);

const areReleaseRoomsRefreshingState = createSelector(
  [areReleaseRoomsRefreshing],
  (refreshing) => refreshing,
);

const areRemandRoomsRefreshingState = createSelector(
  [areRemandRoomsRefreshing],
  (refreshing) => refreshing,
);

const getAllAvailableActivityRoomsState = createSelector(
  [getAvailableActivityRooms, getSecondProp],
  (rooms, usage) => {
    if (usage) {
      // eslint-disable-next-line max-len
      const { availableRooms } = rooms.find((room) => room.usage.toLowerCase() === usage.toLowerCase());
      return availableRooms;
    }
    return null;
  },
);

const getCurrentActivityRoomState = createSelector(
  [getCurrentActivityRoom],
  (room) => room,
);

const getCurrentRoomState = createSelector([getCurrentRoom], (room) => room);

const getDetaineeState = createSelector([getDetainee], (detainee) => detainee);

const getFirstAvailableActivityRoomState = createSelector(
  [getAvailableActivityRooms, getSecondProp],
  (rooms, usage) => {
    if (usage) {
      // eslint-disable-next-line max-len
      const { availableRooms } = rooms.find((room) => room.usage.toLowerCase() === usage.toLowerCase());
      if (availableRooms.length > 0) return availableRooms[0];
    }
    return null;
  },
);

const isActivityRoomOptionAvailableState = createSelector(
  [isActivityRoomOptionAvailable],
  (available) => available,
);

const isReleaseRoomOptionAvailableState = createSelector(
  [isReleaseRoomOptionAvailable],
  (available) => available,
);

const isRemandRoomOptionAvailableState = createSelector(
  [isRemandRoomOptionAvailable],
  (available) => available,
);

const isAssigningToRoomState = createSelector(
  [isAssigningToRoom],
  (isAssigning) => isAssigning,
);

const isDetaineeProfileLoadedState = createSelector(
  [isDetaineeProfileLoaded],
  (loaded) => loaded,
);

const isAnyRoomForGivenActivityAvailableState = createSelector(
  [getAvailableActivityRooms, getSecondProp],
  (rooms, usage) => {
    if (usage) {
      // eslint-disable-next-line max-len
      const { availableRooms } = rooms.find((room) => room.usage.toLowerCase() === usage.toLowerCase());
      return availableRooms.length > 0;
    }
    return false;
  },
);

const isInCellOptionAvailableState = createSelector(
  [isInCellOptionAvailable],
  (available) => available,
);

const isPhoneDeclineOptionAvailableState = createSelector(
  [isPhoneDeclineOptionAvailable],
  (available) => available,
);

const isUpdatingDetentionLogState = createSelector(
  [isUpdatingDetentionLog],
  (isUpdating) => isUpdating,
);

export default {
  areActivityRoomsRefreshingState,
  areReleaseRoomsRefreshingState,
  areRemandRoomsRefreshingState,
  getAllAvailableActivityRoomsState,
  getCurrentActivityRoomState,
  getCurrentRoomState,
  getDetaineeState,
  getFirstAvailableActivityRoomState,
  isActivityRoomOptionAvailableState,
  isAnyRoomForGivenActivityAvailableState,
  isAssigningToRoomState,
  isDetaineeProfileLoadedState,
  isInCellOptionAvailableState,
  isPhoneDeclineOptionAvailableState,
  isReleaseRoomOptionAvailableState,
  isRemandRoomOptionAvailableState,
  isUpdatingDetentionLogState,
};
