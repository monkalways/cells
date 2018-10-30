import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
// import { reducer as toastrReducer } from 'react-redux-toastr';
import cellsReducer from './app/Cell/duck';
// import commonReducer from './app/common/duck';

const rootReducer = combineReducers({
  routing: routerReducer,
  cell: cellsReducer,
  // common: commonReducer,
  // toastr: toastrReducer,
});

export default rootReducer;
