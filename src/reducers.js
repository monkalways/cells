import { combineReducers } from 'redux';
import cellManagementReducer from './app/CellManagement/duck';
// import detaineeProfileReducer from './app/DetaineeProfile/duck';
import welfareManagementReducer from './app/WelfareManagement/duck';
import sessionManagementReducer from './app/SessionManagement/duck';

const rootReducer = combineReducers({
  cellManagementData: cellManagementReducer,
  // detaineeProfileData: detaineeProfileReducer,
  welfareManagementData: welfareManagementReducer,
  sessionManagementData: sessionManagementReducer,
});

export default rootReducer;
