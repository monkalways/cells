// URLs
const CHECK_IN_TO_ACTIVITY_ROOM_URL = (usage) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/activity-rooms/${usage}/check-in`;
const CHECK_IN_TO_CELL_URL = (cellName) => `${process.env.REACT_APP_CELL_SERVICE_URL}api/cells/${cellName}/check-in`;
const GET_AVAILABLE_ACTIVITY_ROOMS_URL = `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/cells/rooms-availability`;
const GET_AVAILABLE_RELEASE_ROOMS_URL = `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/cells/rooms-availability/release`;
const GET_AVAILABLE_REMAND_ROOMS_URL = `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/cells/rooms-availability/remand`;
const GET_DETAINEE_URL = (custodyEventId) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/detainees/${custodyEventId}/profile`;
const CREATE_DETENTION_LOG_URL = (arrestId) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/detainees/${arrestId}/detention-logs`;
const MOVE_DETAINEE_TO_ROOM_URL = (from, to) => `${process.env.REACT_APP_CELL_SERVICE_URL}api/moves/${from}/${to}`;

// Query strings
const ACTIVITY_ROOMS_QUERYSTRING = 'activity-rooms';
const CELLS_QUERYSTRING = 'cells';

// Usages
const BAIL_HEARING_ROOM_1 = 'Bail Hearing1';
const BAIL_HEARING_ROOM_2 = 'Bail Hearing2';
const BREATH_TEST_ROOM = 'Breath Test';
const CELL = 'Cell';
const FINGERPRINTING_ROOM = 'Fingerprinting';
const INTERVIEW_ROOM = 'Interview';
const MEDICAL_ROOM = 'Medical';
const PHONE_DECLINE = 'Phone Decline';
const PHONE_ROOM = 'Phone';
const RELEASE_ROOM = 'Release Room';
const REMAND_HOLDING_ROOM = 'Remand Holding Room';

// Room state
const ROOM_STATE_ALLOCATED = 'ALC';

// Detention Log Data Types
const DETENTION_LOG_DATA_TYPE_DETAINEE_ACTION = 'DetaineeAction';

// Detention Log Action Types
const DETENTION_LOG_ACTION_TYPE_PHONE_DECLINED = 'PhoneDeclined';

export default {
  ACTIVITY_ROOMS_QUERYSTRING,
  BAIL_HEARING_ROOM_1,
  BAIL_HEARING_ROOM_2,
  BREATH_TEST_ROOM,
  CELL,
  CELLS_QUERYSTRING,
  CHECK_IN_TO_ACTIVITY_ROOM_URL,
  CHECK_IN_TO_CELL_URL,
  CREATE_DETENTION_LOG_URL,
  DETENTION_LOG_ACTION_TYPE_PHONE_DECLINED,
  DETENTION_LOG_DATA_TYPE_DETAINEE_ACTION,
  FINGERPRINTING_ROOM,
  GET_AVAILABLE_ACTIVITY_ROOMS_URL,
  GET_AVAILABLE_RELEASE_ROOMS_URL,
  GET_AVAILABLE_REMAND_ROOMS_URL,
  GET_DETAINEE_URL,
  INTERVIEW_ROOM,
  MEDICAL_ROOM,
  MOVE_DETAINEE_TO_ROOM_URL,
  PHONE_DECLINE,
  PHONE_ROOM,
  RELEASE_ROOM,
  REMAND_HOLDING_ROOM,
  ROOM_STATE_ALLOCATED,
};
