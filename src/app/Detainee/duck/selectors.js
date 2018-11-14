import { createSelector } from 'reselect';
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

// Reselect selectors
const getDetaineeState = createSelector([getDetainee], (detainee) => detainee);

const isDetaineeProfileLoadedState = createSelector(
  [isDetaineeProfileLoaded],
  (loaded) => loaded,
);

const isMedicalRoomOptionAvailableState = createSelector(
  [isMedicalRoomOptionAvailable],
  (rooms) => rooms,
);

export default {
  isMedicalRoomOptionAvailableState,
  getDetaineeState,
  isDetaineeProfileLoadedState,
};
