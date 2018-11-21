import constants from '../constants';

const getInTransitDescription = (usage) => {
  switch (usage) {
    case constants.BAIL_HEARING_ROOM_1:
    case constants.BAIL_HEARING_ROOM_2:
      return constants.BAIL_HEARING_IN_TRANSIT;
    case constants.BREATH_TEST_ROOM:
      return constants.BREATH_TEST_IN_TRANSIT;
    case constants.CELL:
      return constants.CELL_IN_TRANSIT;
    case constants.FINGERPRINTING_ROOM:
      return constants.FINGERPRINTING_IN_TRANSIT;
    case constants.INTERVIEW_ROOM:
      return constants.INTERVIEW_IN_TRANSIT;
    case constants.MEDICAL_ROOM:
      return constants.MEDICAL_IN_TRANSIT;
    case constants.PHONE_ROOM:
      return constants.PHONE_IN_TRANSIT;
    case constants.RELEASE_ROOM:
      return constants.RELEASE_HOLDING_IN_TRANSIT;
    case constants.REMAND_HOLDING_ROOM:
      return constants.REMAND_HOLDING_IN_TRANSIT;
    default:
      return null;
  }
};

export default {
  getInTransitDescription,
};
