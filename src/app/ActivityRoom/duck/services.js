import axios from 'axios';
import constants from '../constants';
import commonConstants from '../../constants';

const getActivityRoomDetainees = async (usage) => {
  const response = await axios.get(
    constants.GET_ACTIVITY_ROOM_DETAINEES_URL(usage),
    commonConstants.HEADERS,
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

export default {
  getActivityRoomDetainees,
};
