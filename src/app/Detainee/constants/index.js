// URLs
const CHECK_IN_TO_ACTIVITY_ROOM_URL = (usage) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/activity-rooms/${usage}/check-in`;
const CHECK_IN_TO_CELL_URL = `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/moves/check-in-to-cell`;
const GET_AVAILABLE_ACTIVITY_ROOMS_URL = `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/cells/rooms-availability`;
const GET_DETAINEE_URL = (custodyEventId) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/detainees/${custodyEventId}/profile`;
const MOVE_TO_ACTIVITY_ROOM_URL = `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/moves/move-to-activity-room`;
const MOVE_TO_CELL_URL = `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/moves/move-to-cell`;
const UPDATE_ACTIVITY_ROOM_URL = `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/cells/`;

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

// Temporary Absence Reasons
const BAIL_HEARING_IN_PROGRESS = 'Bail Hearing - In Progress';
const BAIL_HEARING_IN_TRANSIT = 'Bail Hearing - In Transit';
const BREATH_TEST_IN_PROGRESS = 'Breath Test - In Progress';
const BREATH_TEST_IN_TRANSIT = 'Breath Test - In Transit';
const CELL_IN_TRANSIT = 'Cell - In Transit';
const FINGERPRINTING_IN_PROGRESS = 'Fingerprinting - In Progress';
const FINGERPRINTING_IN_TRANSIT = 'Fingerprinting - In Transit';
const INTERVIEW_IN_PROGRESS = 'Interview - In Progress';
const INTERVIEW_IN_TRANSIT = 'Interview - In Transit';
const MEDICAL_IN_PROGRESS = 'Medical - In Progress';
const MEDICAL_IN_TRANSIT = 'Medical - In Transit';
const PHONE_IN_PROGRESS = 'Phone - In Progress';
const PHONE_IN_TRANSIT = 'Phone - In Transit';
const RELEASE_HOLDING_IN_TRANSIT = 'Release Holding - In Transit';
const REMAND_HOLDING_IN_TRANSIT = 'Remand Holding - In Transit';

// Locations
const IN_PROGRESS = 'In Progress';
const IN_TRANSIT = 'In Transit';

// Room state
const ROOM_STATE_ALLOCATED = 'ALC';

export default {
  ACTIVITY_ROOMS_QUERYSTRING,
  BAIL_HEARING_ROOM_1,
  BAIL_HEARING_ROOM_2,
  BAIL_HEARING_IN_PROGRESS,
  BAIL_HEARING_IN_TRANSIT,
  BREATH_TEST_IN_PROGRESS,
  BREATH_TEST_IN_TRANSIT,
  BREATH_TEST_ROOM,
  CELL,
  CELL_IN_TRANSIT,
  CELLS_QUERYSTRING,
  CHECK_IN_TO_ACTIVITY_ROOM_URL,
  CHECK_IN_TO_CELL_URL,
  FINGERPRINTING_IN_PROGRESS,
  FINGERPRINTING_IN_TRANSIT,
  FINGERPRINTING_ROOM,
  GET_AVAILABLE_ACTIVITY_ROOMS_URL,
  GET_DETAINEE_URL,
  IN_PROGRESS,
  IN_TRANSIT,
  INTERVIEW_ROOM,
  INTERVIEW_IN_PROGRESS,
  INTERVIEW_IN_TRANSIT,
  MEDICAL_ROOM,
  MEDICAL_IN_PROGRESS,
  MEDICAL_IN_TRANSIT,
  MOVE_TO_ACTIVITY_ROOM_URL,
  MOVE_TO_CELL_URL,
  PHONE_DECLINE,
  PHONE_ROOM,
  PHONE_IN_PROGRESS,
  PHONE_IN_TRANSIT,
  RELEASE_HOLDING_IN_TRANSIT,
  RELEASE_ROOM,
  REMAND_HOLDING_IN_TRANSIT,
  REMAND_HOLDING_ROOM,
  ROOM_STATE_ALLOCATED,
  UPDATE_ACTIVITY_ROOM_URL,
};
