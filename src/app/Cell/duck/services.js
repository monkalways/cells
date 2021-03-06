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
  if (authenticated) {
    response = await axios.get(
      constants.GET_CELL_DETAINEES_URL(name),
      commonConstants.HEADERS(),
    );
  } else {
    response = await axios.get(constants.GET_CELL_DETAINEES_PUBLIC_URL(name));
  }
  return response.data.map((detainee) => ({
    id: detainee.custodyEventId,
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
    cautionsArray: detainee.cautionsArray || [],
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
  constants.GET_DETENTION_LOGS_URL(arrestId),
  {
    arrestId,
    detentionLogType,
    detentionLogAction,
    userName,
  },
  commonConstants.HEADERS(),
);

const saveCellCheck = async (cellCheck, userName) => {
  const results = [];
  const cellCheckEntries = Object.values(cellCheck);
  for (let i = 0; i < cellCheckEntries.length; i += 1) {
    const { detainee, visual } = cellCheckEntries[i];
    results.push(saveDetentionLog({
      arrestId: detainee.arrestId,
      detentionLogType: constants.DETENTION_LOG_DATA_TYPE_CELL_CHECK,
      detentionLogAction: visual
        ? constants.DETENTION_LOG_ACTION_TYPE_VISUAL
        : constants.DETENTION_LOG_ACTION_TYPE_VERBAL,
      userName,
    }));
  }

  await Promise.all(results);
  return true;
};

const saveMeal = async (meal, userName) => {
  let savedAny = false;
  const results = [];
  const mealEntries = Object.values(meal);
  for (let i = 0; i < mealEntries.length; i += 1) {
    const { detainee, accept, notApplicable } = mealEntries[i];
    if (notApplicable) {
      break;
    }
    savedAny = true;
    results.push(saveDetentionLog({
      arrestId: detainee.arrestId,
      detentionLogType: constants.DETENTION_LOG_DATA_TYPE_MEAL,
      detentionLogAction: accept
        ? constants.DETENTION_LOG_ACTION_TYPE_ACCEPT
        : constants.DETENTION_LOG_ACTION_TYPE_REJECT,
      userName,
    }));
  }

  await Promise.all(results);
  return savedAny;
};

const saveMedication = async (medication, userName) => {
  let savedAny = false;
  const results = [];
  const medicationEntries = Object.values(medication);
  for (let i = 0; i < medicationEntries.length; i += 1) {
    const { detainee, accept, notApplicable } = medicationEntries[i];
    if (notApplicable) {
      break;
    }
    savedAny = true;
    results.push(saveDetentionLog({
      arrestId: detainee.arrestId,
      detentionLogType: constants.DETENTION_LOG_DATA_TYPE_MEDICATION,
      detentionLogAction: accept
        ? constants.DETENTION_LOG_ACTION_TYPE_ACCEPT
        : constants.DETENTION_LOG_ACTION_TYPE_REJECT,
      userName,
    }));
  }

  await Promise.all(results);
  return savedAny;
};

const getCellHistoryReport = async (name, startTime, endTime) => {
  const options = commonConstants.HEADERS();
  options.params = {
    startTime,
    endTime,
  };
  const response = await axios.get(
    constants.GET_CELL_HISTORY_REPORT_URL(name),
    options,
  );

  const { userLabel, lastOccupantName, movementHistories } = response.data;

  // convert dates
  if (movementHistories) {
    movementHistories.forEach((entry) => {
      // eslint-disable-next-line no-param-reassign
      entry.time = new Date(entry.time);
    });
  }

  return {
    userLabel,
    lastOccupantName,
    movementHistories,
  };
};

export default {
  getCellDetails,
  getCellDetainees,
  saveCellCheck,
  saveMeal,
  saveMedication,
  getCellHistoryReport,
};
