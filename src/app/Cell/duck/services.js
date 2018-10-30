import axios from 'axios';
import constants from '../constants';

const getCellDetails = async (name) => {
  const response = await axios.get(
    `${process.env.REACT_APP_CELL_SERVICE_URL}${
      constants.CELL_DETAILS_URL
    }${name}`,
    constants.HEADERS,
  );

  const {
    cellStatus,
    effectiveFromTime,
    effectiveToTime,
    genderColor,
    genderLabel,
    id,
    isActivityRoom,
    occupancy,
    occupancyCount,
    occupancyLabel,
    remarks,
    statusCode,
    typeCodes,
    usage,
  } = response.data;

  return {
    cellStatus,
    effectiveFromTime,
    effectiveToTime,
    genderColor,
    genderLabel,
    id,
    isActivityRoom,
    name,
    occupancy,
    occupancyCount,
    occupancyLabel,
    remarks,
    statusCode,
    typeCodes,
    usage,
  };
};

export default {
  getCellDetails,
};
