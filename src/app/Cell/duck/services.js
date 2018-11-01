import axios from 'axios';
import constants from '../constants';

const getDesignation = (genderLabel) => {
  if (!genderLabel) return genderLabel;
  switch (genderLabel) {
    case 'FA':
      return 'Female Adult';
    case 'FJ':
      return 'Female Juvenile';
    case 'FY':
      return 'Female Youth';
    case 'MA':
      return 'Male Adult';
    case 'MJ':
      return 'Male Juvenile';
    case 'MY':
      return 'Male Youth';
    default:
      return genderLabel;
  }
};

const getCellDetails = async (name) => {
  const response = await axios.get(
    `${process.env.REACT_APP_CELL_SERVICE_URL}${constants.CELL_URL}${name}`,
    constants.HEADERS,
  );

  const {
    cellStatus,
    effectiveFromTime,
    effectiveToTime,
    genderColor,
    genderLabel,
    id,
    isActivityRoom,
    occupancy,
    occupancyCount,
    occupancyLabel,
    remarks,
    statusCode,
    typeCodes,
    usage,
  } = response.data;

  return {
    cellStatus,
    effectiveFromTime,
    effectiveToTime,
    genderColor,
    genderLabel,
    designation: getDesignation(genderLabel),
    id,
    isActivityRoom,
    name,
    occupancy,
    occupancyCount,
    occupancyLabel,
    remarks,
    statusCode,
    typeCodes,
    usage,
  };
};

const getCellDetainees = async (name) => {
  const response = await axios.get(
    `${process.env.REACT_APP_CELL_SERVICE_URL}${
      constants.CELL_URL
    }${name}/get-cell-detainees`,
    constants.HEADERS,
  );

  return response.data.map((detainee) => ({
    id: detainee.id,
    arrestId: detainee.arrestId,
    personId: detainee.personId,
    assignedCellId: detainee.assignedCellId,
    detentionUnitId: detainee.detentionUnitId,
    detentionUnitName: detainee.detentionUnitName,
    carePlanHealthAndWellBeingRiskCode:
      detainee.carePlanHealthAndWellBeingRiskCode,
    carePlanSafetyToOthersRiskCode: detainee.carePlanSafetyToOthersRiskCode,
    carePlanSafetyToSelfRiskCode: detainee.carePlanSafetyToSelfRiskCode,
    hasWarning: detainee.hasWarning,
    mustBeKeptAlone: detainee.mustBeKeptAlone,
    location: detainee.location,
    closed: detainee.closed,
    dob: detainee.dob,
    division: detainee.division,
    withCaution: detainee.withCaution,
    cautionsArray: detainee.cautionsArray,
    isUnderMedication: detainee.isUnderMedication,
    isSuicidal: detainee.isSuicidal,
    isContagious: detainee.isContagious,
    firstName: detainee.firstName,
    lastName: detainee.lastName,
    gender: detainee.gender,
    intakePhotoResourceUri: detainee.intakePhotoResourceUri,
  }));
};

export default {
  getCellDetails,
  getCellDetainees,
};
