import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import cellsReducer from './app/Cell/duck';
import detaineeReducer from './app/Detainee/duck';
import authenticationReducer from './app/Authentication/duck';
import versionsReducer from './app/Home/duck';

export default (history) => combineReducers({
  router: connectRouter(history),
  cell: cellsReducer,
  authentication: authenticationReducer,
  detainee: detaineeReducer,
  versions: versionsReducer,
  toastr: toastrReducer,
});
