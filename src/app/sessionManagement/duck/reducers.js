import { combineReducers } from 'redux';
import types from './types';

/* SessionManagement State shape
{
    session: {
      userCardNumber: "",
      userName: "",
      isAuthenticated: false,
      redirectLogout: false,
    }
}
*/
const unloadedState = {
  userCardNumber: "",
  userName: "",
  isAuthenticated: false,
  redirectLogout: false,
}
const sessionManagementReducer = (state = unloadedState, action) => {
  switch (action.type) {
    case types.USER_AUTHENTICATION_SUCCESS:
      return {
        userCardNumber: action.payload.userCardNumber,
        userName: action.payload.userName,
        isAuthenticated: action.payload.userName !== "",
        redirectLogout: false
      };
    case types.RESET_LOGOUT_REDIRECT:
    case types.USER_AUTHENTICATION_FAILURE:
      return {
        userCardNumber: "",
        userName: "",
        isAuthenticated: false,
        redirectLogout: false
      };
    case types.USER_LOGOUT:
      return {
        userCardNumber: "",
        userName: "",
        isAuthenticated: false,
        redirectLogout: true,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  session: sessionManagementReducer,
});

export default reducer;