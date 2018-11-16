import axios from 'axios';

import constants from '../constants';

const authenticate = async (cardId) => {
  const response = await axios.get(constants.AUTHENTICATE_URL, {
    headers: {
      Accept: 'application/json,',
      'x-work-domain': 'edmonton',
      'x-swipe-card-serial-number': cardId,
    },
  });

  const userName = response.data;
  return userName;
};

export default {
  authenticate,
};
