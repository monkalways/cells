import { createSelector } from 'reselect';
import queryString from 'query-string';
import constants from '../constants';

// Basic selectors
const getDetainee = (state) => state.detainee.detaineeProfile.data;

const isBailHearingRoom1OptionAvailable = (state) => {
  const { location } = state.detainee.detaineeProfile.data;
  const {
    availableRooms,
    // eslint-disable-next-line max-len
  } = state.detainee.activityRooms.availableActivityRooms.find((room) => room.usage.toLowerCase() === constants.BAIL_HEARING_ROOM_1.toLowerCase());
  return (
    location.toLowerCase()
      !== constants.BAIL_HEARING_IN_PROGRESS.toLowerCase()
    && location.toLowerCase()
      !== constants.BAIL_HEARING_IN_TRANSIT.toLowerCase()
    && availableRooms.length > 0
  );
};

const isBailHearingRoom2OptionAvailable = (state) => {
  const { location } = state.detainee.detaineeProfile.data;
  const {
    availableRooms,
    // eslint-disable-next-line max-len
  } = state.detainee.activityRooms.availableActivityRooms.find((room) => room.usage.toLowerCase() === constants.BAIL_HEARING_ROOM_2.toLowerCase());
  return (
    location.toLowerCase()
      !== constants.BAIL_HEARING_IN_PROGRESS.toLowerCase()
    && location.toLowerCase()
      !== constants.BAIL_HEARING_IN_TRANSIT.toLowerCase()
    && availableRooms.length > 0
  );
};

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

const isInCellOptionAvailable = (state) => {
  // Case 1: User came from activity room screen.
  // Detainee is leaving activity room or in transit to activity room
  // and is now going back to their cell.
  const { first } = queryString.parse(state.router.location.search);
  const { location } = state.detainee.detaineeProfile.data;
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

const isInterviewRoomOptionAvailable = (state) => {
  const { location } = state.detainee.detaineeProfile.data;
  const {
    availableRooms,
    // eslint-disable-next-line max-len
  } = state.detainee.activityRooms.availableActivityRooms.find((room) => room.usage.toLowerCase() === constants.INTERVIEW_ROOM.toLowerCase());
  return (
    location.toLowerCase() !== constants.INTERVIEW_IN_PROGRESS.toLowerCase()
    && location.toLowerCase() !== constants.INTERVIEW_IN_TRANSIT.toLowerCase()
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

const isReleaseRoomOptionAvailable = (state) => {
  const { location } = state.detainee.detaineeProfile.data;
  const {
    availableRooms,
    // eslint-disable-next-line max-len
  } = state.detainee.activityRooms.availableActivityRooms.find((room) => room.usage.toLowerCase() === constants.RELEASE_ROOM.toLowerCase());
  return (
    location.toLowerCase()
      !== constants.RELEASE_HOLDING_IN_TRANSIT.toLowerCase()
    && availableRooms.length > 0
  );
};

const isRemandHoldingRoomOptionAvailable = (state) => {
  const { location } = state.detainee.detaineeProfile.data;
  const {
    availableRooms,
    // eslint-disable-next-line max-len
  } = state.detainee.activityRooms.availableActivityRooms.find((room) => room.usage.toLowerCase() === constants.REMAND_HOLDING_ROOM.toLowerCase());
  return (
    location.toLowerCase()
      !== constants.REMAND_HOLDING_IN_TRANSIT.toLowerCase()
    && availableRooms.length > 0
  );
};

// Reselect selectors
const getDetaineeState = createSelector([getDetainee], (detainee) => detainee);

const isBailHearingRoom1OptionAvailableState = createSelector(
  [isBailHearingRoom1OptionAvailable],
  (available) => available,
);

const isBailHearingRoom2OptionAvailableState = createSelector(
  [isBailHearingRoom2OptionAvailable],
  (available) => available,
);

const isBreathTestRoomOptionAvailableState = createSelector(
  [isBreathTestRoomOptionAvailable],
  (available) => available,
);

const isDetaineeProfileLoadedState = createSelector(
  [isDetaineeProfileLoaded],
  (loaded) => loaded,
);

const isFingerprintingRoomOptionAvailableState = createSelector(
  [isFingerprintingRoomOptionAvailable],
  (available) => available,
);

const isInCellOptionAvailableState = createSelector(
  [isInCellOptionAvailable],
  (available) => available,
);

const isInterviewRoomOptionAvailableState = createSelector(
  [isInterviewRoomOptionAvailable],
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

const isReleaseRoomOptionAvailableState = createSelector(
  [isReleaseRoomOptionAvailable],
  (available) => available,
);

const isRemandHoldingRoomOptionAvailableState = createSelector(
  [isRemandHoldingRoomOptionAvailable],
  (available) => available,
);

export default {
  getDetaineeState,
  isBailHearingRoom1OptionAvailableState,
  isBailHearingRoom2OptionAvailableState,
  isBreathTestRoomOptionAvailableState,
  isDetaineeProfileLoadedState,
  isFingerprintingRoomOptionAvailableState,
  isInCellOptionAvailableState,
  isInterviewRoomOptionAvailableState,
  isPhoneDeclineOptionAvailableState,
  isPhoneRoomOptionAvailableState,
  isMedicalRoomOptionAvailableState,
  isReleaseRoomOptionAvailableState,
  isRemandHoldingRoomOptionAvailableState,
};
