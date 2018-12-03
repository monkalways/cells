const LAYOUT = {
  width: 720,
  height: 1097,
};

const SCAN_CARD_ID_LENGTH = 16;
const SCAN_CARD_ID_KEY = 'x-swipe-card-serial-number';

const HEADERS = () => ({
  headers: {
    'x-swipe-card-serial-number':
        sessionStorage.getItem(SCAN_CARD_ID_KEY) || '',
  },
});

const UNAUTHENTICATED_TIMEOUT_SECONDS = 10;

const VERSION_URL = `${process.env.REACT_APP_CELL_SERVICE_URL}api/version`;

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

export default {
  BAIL_HEARING_IN_PROGRESS,
  BAIL_HEARING_IN_TRANSIT,
  BREATH_TEST_IN_PROGRESS,
  BREATH_TEST_IN_TRANSIT,
  CELL_IN_TRANSIT,
  FINGERPRINTING_IN_PROGRESS,
  FINGERPRINTING_IN_TRANSIT,
  HEADERS,
  LAYOUT,
  IN_PROGRESS,
  IN_TRANSIT,
  INTERVIEW_IN_PROGRESS,
  INTERVIEW_IN_TRANSIT,
  MEDICAL_IN_PROGRESS,
  MEDICAL_IN_TRANSIT,
  PHONE_IN_PROGRESS,
  PHONE_IN_TRANSIT,
  SCAN_CARD_ID_KEY,
  SCAN_CARD_ID_LENGTH,
  RELEASE_HOLDING_IN_TRANSIT,
  REMAND_HOLDING_IN_TRANSIT,
  UNAUTHENTICATED_TIMEOUT_SECONDS,
  VERSION_URL,
};
