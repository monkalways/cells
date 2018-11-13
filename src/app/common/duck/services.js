import axios from 'axios';
import constants from '../../constants';

const getVersions = async () => {
  const response = await axios.get(constants.VERSION_URL);

  return response.data.map((app) => ({
    name: app.name,
    version: app.version,
  }));
};

export default {
  getVersions,
};
