import axios from 'axios';

import constants from '../constants';

const authenticate = async (cardId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_CELL_SERVICE_URL}${constants.AUTHENTICATE_URL}`,
    {
      headers: {
        Accept: 'application/json,',
        'x-work-domain': 'edmonton',
        'x-swipe-card-serial-number': cardId,
      },
    },
  );

  return response.data;
};

export default {
  authenticate,
};
