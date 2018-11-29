import _ from 'lodash';
import axios from 'axios';
import constants from '../constants';
import commonConstants from '../../constants';

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
  const response = await axios.get(constants.GET_CELL_URL(name));

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
    name: name.toUpperCase(),
    occupancy,
    occupancyCount,
    occupancyLabel,
    remarks,
    statusCode,
    typeCodes,
    usage,
  };
};

const getCellDetainees = async (name, authenticated = true) => {
  let response;
  console.log(commonConstants.HEADERS);
  if (authenticated) {
    response = await axios.get(
      constants.GET_CELL_DETAINEES_URL(name),
      commonConstants.HEADERS,
    );
  } else {
    response = await axios.get(constants.GET_CELL_DETAINEES_PUBLIC_URL(name));
  }
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

const saveDetentionLog = async ({
  arrestId,
  detentionLogType,
  detentionLogAction,
  userName,
}) => axios.post(
  constants.DETENTION_LOGS_URL,
  {
    arrestId,
    detentionLogType,
    detentionLogAction,
    userName,
  },
  commonConstants.HEADERS,
);

const saveCellCheck = async (cellCheck, userName) => {
  await _.forOwn(cellCheck, async (value) => {
    const { detainee, visual } = value;
    await saveDetentionLog({
      arrestId: detainee.arrestId,
      detentionLogType: constants.DETENTION_LOG_DATA_TYPE_CELL_CHECK,
      detentionLogAction: visual
        ? constants.DETENTION_LOG_ACTION_TYPE_VISUAL
        : constants.DETENTION_LOG_ACTION_TYPE_VERBAL,
      userName,
    });
  });

  return true;
};

const saveMeal = async (meal, userName) => {
  let savedAny = false;
  await _.forOwn(meal, async (value) => {
    const { detainee, accept, notApplicable } = value;
    if (notApplicable) {
      return;
    }
    savedAny = true;
    await saveDetentionLog({
      arrestId: detainee.arrestId,
      detentionLogType: constants.DETENTION_LOG_DATA_TYPE_MEAL,
      detentionLogAction: accept
        ? constants.DETENTION_LOG_ACTION_TYPE_ACCEPT
        : constants.DETENTION_LOG_ACTION_TYPE_REJECT,
      userName,
    });
  });
  return savedAny;
};

const saveMedication = async (medication, userName) => {
  let savedAny = false;
  await _.forOwn(medication, async (value) => {
    const { detainee, accept, notApplicable } = value;
    if (notApplicable) {
      return;
    }
    savedAny = true;
    await saveDetentionLog({
      arrestId: detainee.arrestId,
      detentionLogType: constants.DETENTION_LOG_DATA_TYPE_MEDICATION,
      detentionLogAction: accept
        ? constants.DETENTION_LOG_ACTION_TYPE_ACCEPT
        : constants.DETENTION_LOG_ACTION_TYPE_REJECT,
      userName,
    });
  });
  return savedAny;
};

export default {
  getCellDetails,
  getCellDetainees,
  saveCellCheck,
  saveMeal,
  saveMedication,
};
