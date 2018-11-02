import axios from 'axios';
import constants from '../constants';

const getDetainee = async (custodyEventId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_CELL_SERVICE_URL}${
      constants.DETAINEE_URL
    }${custodyEventId}${constants.DETAINEE_PROFILE}`,
    constants.HEADERS,
  );

  const {
    id,
    arrestId,
    personId,
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
    propertyBagNumber,
    telephoneAcceptedCount,
    telephoneDeclinedCount,
    verbalCellCheckCount,
    visualCellCheckCount,
    withCaution,
  } = response.data;

  return {
    id,
    arrestId,
    personId,
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
    propertyBagNumber,
    telephoneAcceptedCount,
    telephoneDeclinedCount,
    verbalCellCheckCount,
    visualCellCheckCount,
    withCaution,
  };
};

export default {
  getDetainee,
};
