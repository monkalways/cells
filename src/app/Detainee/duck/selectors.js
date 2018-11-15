import { createSelector } from 'reselect';
import queryString from 'query-string';
import constants from '../constants';

// Basic selectors
const getDetainee = (state) => state.detainee.detaineeProfile.data;

const isBreathTestRoomOptionAvailable = (state) => {
  const { location } = state.detainee.detaineeProfile.data;
  const {
    availableRooms,
    // eslint-disable-next-line max-len
  } = state.detainee.activityRooms.availableActivityRooms.find((room) => room.usage.toLowerCase() === constants.BREATH_TEST_ROOM.toLowerCase());
  return (
    location.toLowerCase()
      !== constants.BREATH_TEST_IN_PROGRESS.toLowerCase()
    && location.toLowerCase() !== constants.BREATH_TEST_IN_TRANSIT.toLowerCase()
    && availableRooms.length > 0
  );
};

// eslint-disable-next-line max-len
const isDetaineeProfileLoaded = (state) => state.detainee.detaineeProfile.loaded && state.detainee.activityRooms.loaded;

const isFingerprintingRoomOptionAvailable = (state) => {
  const { location } = state.detainee.detaineeProfile.data;
  const {
    availableRooms,
    // eslint-disable-next-line max-len
  } = state.detainee.activityRooms.availableActivityRooms.find((room) => room.usage.toLowerCase() === constants.FINGERPRINTING_ROOM.toLowerCase());
  return (
    location.toLowerCase()
      !== constants.FINGERPRINTING_IN_PROGRESS.toLowerCase()
    && location.toLowerCase()
      !== constants.FINGERPRINTING_IN_TRANSIT.toLowerCase()
    && availableRooms.length > 0
  );
};

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

const isPhoneDeclineOptionAvailable = (state) => {
  const { first } = queryString.parse(state.router.location.search);
  return first === constants.CELLS_QUERYSTRING;
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

// Reselect selectors
const getDetaineeState = createSelector([getDetainee], (detainee) => detainee);

const isBreathTestRoomOptionAvailableState = createSelector(
  [isBreathTestRoomOptionAvailable],
  (loaded) => loaded,
);

const isDetaineeProfileLoadedState = createSelector(
  [isDetaineeProfileLoaded],
  (loaded) => loaded,
);

const isFingerprintingRoomOptionAvailableState = createSelector(
  [isFingerprintingRoomOptionAvailable],
  (available) => available,
);

const isMedicalRoomOptionAvailableState = createSelector(
  [isMedicalRoomOptionAvailable],
  (available) => available,
);

const isPhoneDeclineOptionAvailableState = createSelector(
  [isPhoneDeclineOptionAvailable],
  (available) => available,
);

const isPhoneRoomOptionAvailableState = createSelector(
  [isPhoneRoomOptionAvailable],
  (available) => available,
);

export default {
  getDetaineeState,
  isBreathTestRoomOptionAvailableState,
  isDetaineeProfileLoadedState,
  isFingerprintingRoomOptionAvailableState,
  isPhoneDeclineOptionAvailableState,
  isPhoneRoomOptionAvailableState,
  isMedicalRoomOptionAvailableState,
};
