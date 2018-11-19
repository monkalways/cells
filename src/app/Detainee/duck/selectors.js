import { createSelector } from 'reselect';
import queryString from 'query-string';
import constants from '../constants';

// Basic selectors
const getDetainee = (state) => state.detainee.detaineeProfile.data;
const isAssigningToRoom = (state) => state.detainee.activityRooms.isAssigningToRoom;

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

// eslint-disable-next-line max-len
const isDetaineeProfileLoaded = (state) => state.detainee.detaineeProfile.loaded && state.detainee.activityRooms.loaded;

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

const isPhoneDeclineOptionAvailable = (state) => {
  const { first } = queryString.parse(state.router.location.search);
  const { location } = state.detainee.detaineeProfile.data;
  if (
    first === constants.CELLS_QUERYSTRING
    && location.toLowerCase().includes(constants.IN_PROGRESS.toLowerCase())
  ) return false;

  return first === constants.CELLS_QUERYSTRING;
};

// Reselect selectors
const getDetaineeState = createSelector([getDetainee], (detainee) => detainee);

const isActivityRoomOptionAvailableState = createSelector(
  [isActivityRoomOptionAvailable],
  (available) => available,
);

const isAssigningToRoomState = createSelector(
  [isAssigningToRoom],
  (detainee) => detainee,
);

const isDetaineeProfileLoadedState = createSelector(
  [isDetaineeProfileLoaded],
  (loaded) => loaded,
);

const isInCellOptionAvailableState = createSelector(
  [isInCellOptionAvailable],
  (available) => available,
);

const isPhoneDeclineOptionAvailableState = createSelector(
  [isPhoneDeclineOptionAvailable],
  (available) => available,
);

export default {
  getDetaineeState,
  isActivityRoomOptionAvailableState,
  isAssigningToRoomState,
  isDetaineeProfileLoadedState,
  isInCellOptionAvailableState,
  isPhoneDeclineOptionAvailableState,
};
