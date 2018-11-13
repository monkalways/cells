// DMU Service URLS
const GET_ACTIVITY_ROOM_DETAINEES_URL = (usage) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/cells/${usage}/get-activity-room-detainees`;

export default {
  GET_ACTIVITY_ROOM_DETAINEES_URL,
};
