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

export default {
  LAYOUT,
  HEADERS,
  SCAN_CARD_ID_KEY,
  SCAN_CARD_ID_LENGTH,
  UNAUTHENTICATED_TIMEOUT_SECONDS,
  VERSION_URL,
};
