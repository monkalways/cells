import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HeaderComponent from './HeaderComponent';
import { operations } from 'app/sessionManagement/duck';

const mapDispatchToProps = (dispatch) => {
  const logout = () => {
    dispatch(operations.logout());
  };

  return { logout };
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.sessionManagementData.session.isAuthenticated,
    redirectLogout: state.sessionManagementData.session.redirectLogout,
  }
}

const HeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent));

export default HeaderContainer;