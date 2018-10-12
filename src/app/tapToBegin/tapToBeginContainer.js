import { connect } from "react-redux";
import { operations as welfareOperations } from 'app/welfareManagement/duck';
import { operations as sessionOperations } from 'app/sessionManagement/duck';
import TapToBeginComponent from 'app/tapToBegin/tapToBeginComponent';

const mapDispatchToProps = (dispatch) => {
  const resetCellWelfare = () => {
    dispatch(welfareOperations.resetCellWelfare());
  };

  const resetRedirectLogout = () => {
    dispatch(sessionOperations.resetRedirectLogout());
  };

  // const storeStartLocation = (startLocation) => {
  //   dispatch(operations.storeStartLocation(startLocation));
  // };

  return { resetCellWelfare, resetRedirectLogout,/* storeStartLocation */ };
};

const TapToBeginContainer = connect(null, mapDispatchToProps)(TapToBeginComponent);

export default TapToBeginContainer;
