import axios from 'axios';
import constants from '../constants';
import commonConstants from '../../constants';

const checkInToCell = async (detaineeId, cellName) => {
  await axios.post(
    constants.CHECK_IN_TO_CELL_URL(cellName),
    {
      custodyEventId: detaineeId,
    },
    commonConstants.HEADERS(),
  );
  return true;
};

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

const getAvailableReleaseRooms = async () => {
  const response = await axios.get(
    constants.GET_AVAILABLE_RELEASE_ROOMS_URL,
    commonConstants.HEADERS(),
  );

  return response.data.map((room) => ({
    name: room.name,
    typeCodes: room.typeCodes,
  }));
};

const getAvailableRemandRooms = async () => {
  const response = await axios.get(
    constants.GET_AVAILABLE_REMAND_ROOMS_URL,
    commonConstants.HEADERS(),
  );

  return response.data.map((room) => ({
    name: room.name,
    typeCodes: room.typeCodes,
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
    fullDob,
    gender,
    genderTypeCode,
    hasWarning,
    custodyEventId: id,
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
    overrideFingerprintingWarning,
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
    fullDob,
    gender,
    genderTypeCode,
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
    overrideFingerprintingWarning,
    personId,
    propertyBagNumber,
    telephoneAcceptedCount,
    telephoneDeclinedCount,
    verbalCellCheckCount,
    visualCellCheckCount,
    withCaution,
  };
};

const moveDetaineeToRoom = async (detaineeId, originRoom, destinationRoom) => {
  await axios.post(
    constants.MOVE_DETAINEE_TO_ROOM_URL(originRoom, destinationRoom),
    {
      custodyEventId: detaineeId,
      from: originRoom,
      to: destinationRoom,
    },
    commonConstants.HEADERS(),
  );
  return true;
};

const savePhoneCallDecline = async (arrestId, userName) => {
  await axios.post(
    constants.CREATE_DETENTION_LOG_URL(arrestId),
    {
      arrestId,
      detentionLogType: constants.DETENTION_LOG_DATA_TYPE_DETAINEE_ACTION,
      detentionLogAction: constants.DETENTION_LOG_ACTION_TYPE_PHONE_DECLINED,
      userName,
    },
    commonConstants.HEADERS(),
  );
  return true;
};

export default {
  checkInToCell,
  getAvailableActivityRooms,
  getAvailableReleaseRooms,
  getAvailableRemandRooms,
  getDetainee,
  moveDetaineeToRoom,
  savePhoneCallDecline,
};
