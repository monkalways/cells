import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { operations } from '../../SessionManagement/duck';
import HeaderComponent from './HeaderComponent';

const mapDispatchToProps = (dispatch) => {
  const logout = () => {
    dispatch(operations.logout());
  };

  return { logout };
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.sessionManagementData.session.isAuthenticated,
  redirectLogout: state.sessionManagementData.session.redirectLogout,
});

const HeaderContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderComponent));

export default HeaderContainer;
