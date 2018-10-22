import axios from 'axios';

const config = {
  baseURL: 'http://localhost:55697/',
  headers: {
    Accept: 'application/json',
    'access-control-allow-origin': '*',
    'x-work-domain': 'edmonton',
    authorization: 'Basic Y3BiMTpkZXZlMzMzMw==',
    'Content-Type': 'application/json',
  },
};

const userAuthentication = async (cardSerialNumber) => {
  try {
    config.headers['x-swipe-card-serial-number'] = cardSerialNumber;

    const response = await axios.get('api/users/getADUser', config);

    return (response.status === 200)
      ? {
        userCardNumber: cardSerialNumber,
        userName: response.data,
      }
      : {
        userCardNumber: cardSerialNumber,
        userName: '',
      };
  } catch (error) {
    return { errorMessage: 'error while authenticating user card' };
  }
};

export default {
  userAuthentication,
};
