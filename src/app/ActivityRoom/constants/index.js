// DMU Service URLS
const GET_ACTIVITY_ROOM_DETAINEES_URL = (usage) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/cells/${usage}/get-activity-room-detainees`;

const GET_LAST_TEMP_ABSENCE_URL = (detaineeId) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/detainees/${detaineeId}/last-temporary-absence`;

const CREATE_TEMP_ABSENCE_URL = `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/temp-absences/`;

const UPDATE_TEMP_ABSENCE_URL = `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/temp-absences/`;

export default {
  GET_ACTIVITY_ROOM_DETAINEES_URL,
  GET_LAST_TEMP_ABSENCE_URL,
  CREATE_TEMP_ABSENCE_URL,
  UPDATE_TEMP_ABSENCE_URL,
};
