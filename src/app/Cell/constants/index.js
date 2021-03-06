// DMU Service URLS
const GET_CELL_URL = (cellName) => `${process.env.REACT_APP_CELL_SERVICE_URL}api/public/cells/${cellName}`;

const GET_CELL_DETAINEES_PUBLIC_URL = (cellName) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/public/cells/${cellName}/detainees`;

const GET_CELL_DETAINEES_URL = (cellName) => `${process.env.REACT_APP_CELL_SERVICE_URL}api/cells/${cellName}/detainees`;

const GET_DETENTION_LOGS_URL = (arrestId) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/detainees/${arrestId}/detention-logs`;

const GET_CELL_HISTORY_REPORT_URL = (cellName) => `${
  process.env.REACT_APP_CELL_SERVICE_URL
}api/cells/${cellName}/cell-history-report`;

// Detention Log Data Types
const DETENTION_LOG_DATA_TYPE_MEAL = 'IsMeal';
const DETENTION_LOG_DATA_TYPE_MEDICATION = 'IsMedication';
const DETENTION_LOG_DATA_TYPE_CELL_CHECK = 'IsCellCheck';
const DETENTION_LOG_DATA_TYPE_DETAINEE_ACTION = 'DetaineeAction';

// Detention Log Action Types
const DETENTION_LOG_ACTION_TYPE_ACCEPT = 'Accept';
const DETENTION_LOG_ACTION_TYPE_REJECT = 'Reject';
const DETENTION_LOG_ACTION_TYPE_NOT_APPLICABLE = 'NotApplicable';
const DETENTION_LOG_ACTION_TYPE_VISUAL = 'Visual';
const DETENTION_LOG_ACTION_TYPE_VERBAL = 'Verbal';
const DETENTION_LOG_ACTION_TYPE_PHONE_DECLINED = 'PhoneDeclined';

export default {
  GET_CELL_URL,
  GET_CELL_DETAINEES_PUBLIC_URL,
  GET_CELL_DETAINEES_URL,
  GET_DETENTION_LOGS_URL,
  GET_CELL_HISTORY_REPORT_URL,
  DETENTION_LOG_DATA_TYPE_MEAL,
  DETENTION_LOG_DATA_TYPE_MEDICATION,
  DETENTION_LOG_DATA_TYPE_CELL_CHECK,
  DETENTION_LOG_DATA_TYPE_DETAINEE_ACTION,
  DETENTION_LOG_ACTION_TYPE_ACCEPT,
  DETENTION_LOG_ACTION_TYPE_REJECT,
  DETENTION_LOG_ACTION_TYPE_NOT_APPLICABLE,
  DETENTION_LOG_ACTION_TYPE_VISUAL,
  DETENTION_LOG_ACTION_TYPE_VERBAL,
  DETENTION_LOG_ACTION_TYPE_PHONE_DECLINED,
};
