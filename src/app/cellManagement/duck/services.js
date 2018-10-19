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

const getCellInfo = async (cellName) => {
  try {
    const response = await axios.get(`api/cells/${cellName}`, config);

    return (response.status === 200)
      ? { cellInfo: response.data }
      : { cellInfo: {} };
  } catch (error) {
    return { errorMessage: 'error while getting cell info' };
  }
};

const getCellDetainees = async (cellName) => {
  try {
    const response = await axios.get(`api/cells/${cellName}/get-cell-detainees`, config);

    return (response.status === 200) ? { cellDetainees: response.data } : { cellDetainees: [] };
  } catch (error) {
    return { errorMessage: 'error while getting cell detainees' };
  }
};

export default {
  getCellInfo,
  getCellDetainees,
};
