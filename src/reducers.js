import { combineReducers } from 'redux';
import cellManagementReducer from 'app/cellManagement/duck';
import activityRoomManagementReducer from 'app/activityRoomManagement/duck';
import detaineeProfileReducer from 'app/detaineeProfile/duck';
import welfareManagementReducer from 'app/welfareManagement/duck';
import sessionManagementReducer from 'app/sessionManagement/duck';

const rootReducer = combineReducers({
  cellManagementData: cellManagementReducer,
  activityRoomManagementData: activityRoomManagementReducer,
  detaineeProfileData: detaineeProfileReducer,
  welfareManagementData: welfareManagementReducer,
  sessionManagementData: sessionManagementReducer
});

export default rootReducer;