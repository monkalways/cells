import { connect } from 'react-redux';
import FooterComponent from './FooterComponent';
import * as FromWelfareManagement from '../../WelfareManagement/duck';
import * as FromSessionManagement from '../../SessionManagement/duck';

const mapStateToProps = (state) => ({
  isAuthenticated: FromSessionManagement.selectors.getAuthenticationFlag(state),
  isMeal: FromWelfareManagement.selectors.getMealFlag(state),
  isMedication: FromWelfareManagement.selectors.getMedicationFlag(state),
  isCellCheck: FromWelfareManagement.selectors.getCellCheckFlag(state),
});

const FooterContainer = connect(
  mapStateToProps,
  null,
)(FooterComponent);

export default FooterContainer;
