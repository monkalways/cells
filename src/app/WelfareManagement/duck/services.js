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

const saveDetaineeWelfare = async (detaineeWelfare) => {
  try {
    const response = await axios.post('api/detention-logs', detaineeWelfare, config);

    return { isSuccess: response.status === 200 };
  } catch (error) {
    return { isSuccess: false };
  }
};

export default {
  saveDetaineeWelfare,
};
