import { connect } from "react-redux";
import FooterComponent from './FooterComponent';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.sessionManagementData.session.isAuthenticated,
    isMeal: state.welfareManagementData.welfareFlagData.isMeal,
    isMedication: state.welfareManagementData.welfareFlagData.isMedication,
    isCellCheck: state.welfareManagementData.welfareFlagData.isCellCheck,
  }
};

const FooterContainer = connect(mapStateToProps, null)(FooterComponent);

export default FooterContainer;