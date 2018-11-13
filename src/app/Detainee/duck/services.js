import axios from 'axios';
import constants from '../constants';
import commonConstants from '../../constants';

const getAvailableActivityRooms = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_CELL_SERVICE_URL}${constants.CELLS_URL}${
      constants.AVAILABLE_ACTIVITY_ROOMS
    }`,
    commonConstants.HEADERS,
  );

  return response.data.map((activity) => ({
    usage: activity.usage,
    availableRooms: activity.availableRooms,
  }));
};

const getDetainee = async (custodyEventId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_CELL_SERVICE_URL}${
      constants.DETAINEE_URL
    }${custodyEventId}${constants.DETAINEE_PROFILE}`,
    commonConstants.HEADERS,
  );

  const {
    arrestId,
    assignedCellId,
    assignedCellName,
    bailHearingCount,
    breathTestCount,
    cautionsArray,
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

export default {
  getAvailableActivityRooms,
  getDetainee,
};
