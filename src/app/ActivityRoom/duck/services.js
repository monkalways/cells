import axios from 'axios';
import constants from '../constants';
import commonConstants from '../../constants';

const getActivityRoomDetainees = async (usage) => {
  const response = await axios.get(
    constants.GET_ACTIVITY_ROOM_DETAINEES_URL(usage),
    commonConstants.HEADERS(),
  );

  return response.data.map((detainee) => ({
    id: detainee.id,
    arrestId: detainee.arrestId,
    personId: detainee.personId,
    assignedCellName: detainee.assignedCellName,
    activityRoomName: detainee.activityRoomName,
    location: detainee.location,
    detentionUnitName: detainee.detentionUnitName,
    division: detainee.division,
    firstName: detainee.firstName,
    lastName: detainee.lastName,
    gender: detainee.gender,
    intakePhotoResourceUri: detainee.intakePhotoResourceUri,
  }));
};

const getLastTempAbsence = async (detaineeId) => {
  const response = await axios.get(
    constants.GET_LAST_TEMP_ABSENCE_URL(detaineeId),
    commonConstants.HEADERS(),
  );

  const {
    id,
    custodyEventId,
    personId,
    reason,
    startTime,
    endTime,
    remarks,
  } = response.data;

  return {
    id,
    custodyEventId,
    personId,
    reason,
    startTime,
    endTime,
    remarks,
  };
};

const createTempAbsence = async ({ detaineeId, reason, activityRoomName }) => {
  await axios.post(
    constants.CREATE_TEMP_ABSENCE_URL,
    {
      custodyEventId: detaineeId,
      reason,
      startTime: new Date(),
      remarks: activityRoomName,
    },
    commonConstants.HEADERS(),
  );

  return true;
};

const updateTempAbsence = async ({
  tempAbsenceId,
  detaineeId,
  startTime,
  endTime,
  reason,
  activityRoomName,
}) => {
  await axios.put(
    constants.UPDATE_TEMP_ABSENCE_URL,
    {
      id: tempAbsenceId,
      custodyEventId: detaineeId,
      reason,
      startTime,
      endTime,
      remarks: activityRoomName,
    },
    commonConstants.HEADERS(),
  );

  return true;
};

export default {
  getActivityRoomDetainees,
  getLastTempAbsence,
  createTempAbsence,
  updateTempAbsence,
};
