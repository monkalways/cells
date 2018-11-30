import axios from 'axios';
import constants from '../constants';
import commonConstants from '../../constants';

const getAvailableActivityRooms = async () => {
  const response = await axios.get(
    constants.GET_AVAILABLE_ACTIVITY_ROOMS_URL,
    commonConstants.HEADERS(),
  );

  return response.data.map((activity) => ({
    usage: activity.usage,
    availableRooms: activity.availableRooms,
  }));
};

const getDetainee = async (custodyEventId) => {
  const response = await axios.get(
    constants.GET_DETAINEE_URL(custodyEventId),
    commonConstants.HEADERS(),
  );

  const {
    arrestId,
    assignedCellId,
    assignedCellName,
    bailHearingCount,
    breathTestCount,
    cautionsArray,
    currentActivityRoom,
    detentionUnitName,
    division,
    dob,
    fingerPrintCount,
    firstName,
    gender,
    hasWarning,
    id,
    intakePhotoResourceUri,
    interviewCount,
    isContagious,
    isSuicidal,
    isUnderMedication,
    lastName,
    location,
    mealAcceptedCount,
    mealDeclinedCount,
    medicalCount,
    medicationAcceptedCount,
    medicationRefusedCount,
    mustBeKeptAlone,
    personId,
    propertyBagNumber,
    telephoneAcceptedCount,
    telephoneDeclinedCount,
    verbalCellCheckCount,
    visualCellCheckCount,
    withCaution,
  } = response.data;

  return {
    arrestId,
    assignedCellId,
    assignedCellName,
    bailHearingCount,
    breathTestCount,
    cautionsArray,
    currentActivityRoom,
    detentionUnitName,
    division,
    dob,
    fingerPrintCount,
    firstName,
    gender,
    hasWarning,
    id,
    intakePhotoResourceUri,
    interviewCount,
    isContagious,
    isSuicidal,
    isUnderMedication,
    lastName,
    location,
    mealAcceptedCount,
    mealDeclinedCount,
    medicalCount,
    medicationAcceptedCount,
    medicationRefusedCount,
    mustBeKeptAlone,
    personId,
    propertyBagNumber,
    telephoneAcceptedCount,
    telephoneDeclinedCount,
    verbalCellCheckCount,
    visualCellCheckCount,
    withCaution,
  };
};

const checkInToActivityRoom = async ({ detaineeId, usage }) => {
  const response = await axios.post(
    constants.CHECK_IN_TO_ACTIVITY_ROOM_URL(usage),
    {
      custodyEventId: detaineeId,
    },
    commonConstants.HEADERS(),
  );

  const { error } = response.data;
  return { error };
};

const checkInToCell = async ({ detaineeId }) => {
  const response = await axios.post(
    constants.CHECK_IN_TO_CELL_URL,
    {
      custodyEventId: detaineeId,
    },
    commonConstants.HEADERS(),
  );

  const { error } = response.data;
  return { error };
};

const moveToActivityRoom = async ({ detaineeId, from, destinationRoom }) => {
  const response = await axios.post(
    constants.MOVE_TO_ACTIVITY_ROOM_URL,
    {
      custodyEventId: detaineeId,
      from,
      to: destinationRoom,
    },
    commonConstants.HEADERS(),
  );

  const { error } = response.data;
  return { error };
};

const moveToCell = async ({ detaineeId, from }) => {
  const response = await axios.post(
    constants.MOVE_TO_CELL_URL,
    {
      custodyEventId: detaineeId,
      from,
    },
    commonConstants.HEADERS(),
  );

  const { error } = response.data;
  return { error };
};

export default {
  checkInToActivityRoom,
  checkInToCell,
  getAvailableActivityRooms,
  getDetainee,
  moveToActivityRoom,
  moveToCell,
};
