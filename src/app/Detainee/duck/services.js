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
    typeCode: room.typeCode,
  }));
};

const getAvailableRemandRooms = async () => {
  const response = await axios.get(
    constants.GET_AVAILABLE_REMAND_ROOMS_URL,
    commonConstants.HEADERS(),
  );

  return response.data.map((room) => ({
    name: room.name,
    typeCode: room.typeCode,
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

// We need to see what account is used when calling the EPROS service directly.
// This call is for testing purposes only. Remove it after the test is complete.
const EPROS_URL = 'http://x42deveprosservicez/';

const GET_USERS_URL = `${EPROS_URL}api/users`;
const VERSION_URL = `${EPROS_URL}api/version`;

const SCAN_CARD_ID_KEY = 'x-swipe-card-serial-number';

const EPROS_HEADERS = () => ({
  headers: {
    'x-swipe-card-serial-number':
      sessionStorage.getItem(SCAN_CARD_ID_KEY) || '',
    Accept: 'application/json',
    'x-credentials':
      'ZG11Y2VsbHNpbnRlcmZhY2U6JEE2d3hsQ0c1dURgQkxzNkVYSEx3amRhSjI3QC5E',
    'x-work-domain': 'Edmonton',
    'x-reason-for-access': 'DMU',
    'x-reason-for-access-remark': 'Cells Service',
    'x-login-account-type': 'EPROS',
    'x-user-to-impersonate': 'Edmonton\\McCauleC@police.edmonton.ab.ca',
  },
});

const getUsers = async () => {
  await axios.get(GET_USERS_URL, EPROS_HEADERS());
  return true;
};

const getVersion = async () => {
  await axios.get(VERSION_URL, EPROS_HEADERS());
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
  getUsers,
  getVersion,
};
