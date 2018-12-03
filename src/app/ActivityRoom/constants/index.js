// DMU Service URLS
const GET_ACTIVITY_ROOM_DETAINEES_URL = (usage) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/public/detainees?activityRoomUsage=${usage}`;

const CHECK_INTO_ACTIVITY_ROOM_URL = (usage) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/activity-rooms/${usage}/check-in`;

export default {
  GET_ACTIVITY_ROOM_DETAINEES_URL,
  CHECK_INTO_ACTIVITY_ROOM_URL,
};
