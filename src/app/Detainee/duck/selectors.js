import { createSelector } from 'reselect';
import queryString from 'query-string';
import constants from '../constants';

// Basic selectors
const areActivityRoomsRefreshing = (state) => state.detainee.activityRooms.isRefreshing;
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
    !(
      first === constants.CELLS_QUERYSTRING
      && location.toLowerCase().includes(constants.IN_PROGRESS.toLowerCase())
    )
    && location.toLowerCase() !== inProgress.toLowerCase()
    && location.toLowerCase() !== inTransit.toLowerCase()
    && availableRooms.length > 0
  );
};

const isAssigningToRoom = (state) => state.detainee.activityRooms.assigningToRoom;

const isInCellOptionAvailable = (state) => {
  const { first } = queryString.parse(state.router.location.search);
  const { location } = state.detainee.detaineeProfile.data;

  // Case 3: If the user came from the cell management screen
  // and the detainee location is 'In Progress' in an activity room, this button is disabled.
  if (
    first === constants.CELLS_QUERYSTRING
    && location.toLowerCase().includes(constants.IN_PROGRESS.toLowerCase())
  ) return false;

  // Case 1: User came from activity room screen.
  // Detainee is leaving activity room or in transit to activity room
  // and is now going back to their cell.
  if (
    first === constants.ACTIVITY_ROOMS_QUERYSTRING
    && location.toLowerCase() !== constants.CELL_IN_TRANSIT.toLowerCase()
  ) return true;

  // Case 2: User came from cell management screen.
  // Detainee is currently in transit back to their cell and is being checked in.
  if (
    first === constants.CELLS_QUERYSTRING
    && location.toLowerCase() === constants.CELL_IN_TRANSIT.toLowerCase()
  ) return true;

  return false;
};

// eslint-disable-next-line max-len
const isDetaineeProfileLoaded = (state) => state.detainee.detaineeProfile.loaded && state.detainee.activityRooms.loaded;

const isPhoneDeclineOptionAvailable = (state) => {
  const { first } = queryString.parse(state.router.location.search);
  const { location } = state.detainee.detaineeProfile.data;
  if (
    first === constants.CELLS_QUERYSTRING
    && location.toLowerCase().includes(constants.IN_PROGRESS.toLowerCase())
  ) return false;

  return first === constants.CELLS_QUERYSTRING;
};

const isUpdatingDetentionLog = (state) => state.detainee.activityRooms.updatingDetentionLog;

// Reselect selectors
const areActivityRoomsRefreshingState = createSelector(
  [areActivityRoomsRefreshing],
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
  isUpdatingDetentionLogState,
};
