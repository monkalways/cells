const LAYOUT = {
  width: 720,
  height: 1097,
};

const HEADERS = {
  headers: {
    Accept: 'application/json,',
    'x-work-domain': 'edmonton',
    authorization: 'Basic Y3BiMTpkZXZlMzMzMw==',
  },
};

const SCAN_CARD_ID_LENGTH = 16;

const UNAUTHENTICATED_TIMEOUT_SECONDS = 10;

const VERSION_URL = `${process.env.REACT_APP_CELL_SERVICE_URL}api/version`;

export default {
  LAYOUT,
  HEADERS,
  SCAN_CARD_ID_LENGTH,
  UNAUTHENTICATED_TIMEOUT_SECONDS,
  VERSION_URL,
};
