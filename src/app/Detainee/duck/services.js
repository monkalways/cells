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

const checkInToCell = async ({ detaineeId, cellName }) => {
  const response = await axios.post(
    constants.CHECK_IN_TO_CELL_URL(cellName),
    {
      custodyEventId: detaineeId,
    },
    commonConstants.HEADERS(),
  );

  const { error } = response.data;
  return { error };
};

const moveDetaineeToRoom = async ({
  detaineeId,
  originRoom,
  destinationRoom,
}) => {
  const response = await axios.post(
    constants.MOVE_DETAINEE_TO_ROOM_URL(originRoom, destinationRoom),
    {
      custodyEventId: detaineeId,
      from: originRoom,
      to: destinationRoom,
    },
    commonConstants.HEADERS(),
  );

  const { error } = response.data;
  return { error };
};

export default {
  checkInToCell,
  getAvailableActivityRooms,
  getDetainee,
  moveDetaineeToRoom,
};
