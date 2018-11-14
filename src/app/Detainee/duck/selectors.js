import { createSelector } from 'reselect';
import queryString from 'query-string';
import constants from '../constants';

// Basic selectors
const getDetainee = (state) => state.detainee.detaineeProfile.data;
// eslint-disable-next-line max-len
const isDetaineeProfileLoaded = (state) => state.detainee.detaineeProfile.loaded && state.detainee.activityRooms.loaded;
const isMedicalRoomOptionAvailable = (state) => {
  const { location } = state.detainee.detaineeProfile.data;
  const {
    availableRooms,
    // eslint-disable-next-line max-len
  } = state.detainee.activityRooms.availableActivityRooms.find((room) => room.usage.toLowerCase() === constants.MEDICAL_ROOM.toLowerCase());
  return (
    location.toLowerCase() !== constants.MEDICAL_IN_PROGRESS.toLowerCase()
    && location.toLowerCase() !== constants.MEDICAL_IN_TRANSIT.toLowerCase()
    && availableRooms.length > 0
  );
};

const isPhoneRoomOptionAvailable = (state) => {
  const { location } = state.detainee.detaineeProfile.data;
  const {
    availableRooms,
    // eslint-disable-next-line max-len
  } = state.detainee.activityRooms.availableActivityRooms.find((room) => room.usage.toLowerCase() === constants.PHONE_ROOM.toLowerCase());
  return (
    location.toLowerCase() !== constants.PHONE_IN_PROGRESS.toLowerCase()
    && location.toLowerCase() !== constants.PHONE_IN_TRANSIT.toLowerCase()
    && availableRooms.length > 0
  );
};

const isPhoneDeclineOptionAvailable = (state) => {
  const { first } = queryString.parse(state.router.location.search);
  return first === constants.CELLS_QUERYSTRING;
};

// Reselect selectors
const getDetaineeState = createSelector([getDetainee], (detainee) => detainee);

const isDetaineeProfileLoadedState = createSelector(
  [isDetaineeProfileLoaded],
  (loaded) => loaded,
);

const isMedicalRoomOptionAvailableState = createSelector(
  [isMedicalRoomOptionAvailable],
  (available) => available,
);

const isPhoneRoomOptionAvailableState = createSelector(
  [isPhoneRoomOptionAvailable],
  (available) => available,
);

const isPhoneDeclineOptionAvailableState = createSelector(
  [isPhoneDeclineOptionAvailable],
  (available) => available,
);

export default {
  isDetaineeProfileLoadedState,
  isPhoneDeclineOptionAvailableState,
  isPhoneRoomOptionAvailableState,
  isMedicalRoomOptionAvailableState,
  getDetaineeState,
};
