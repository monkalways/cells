import { connect } from 'react-redux';
import { operations as welfareOperations } from '../WelfareManagement/duck';
import { operations as sessionOperations } from '../SessionManagement/duck';
import TapToBeginComponent from './TapToBeginComponent';

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

  return { resetCellWelfare, resetRedirectLogout /* storeStartLocation */ };
};

const TapToBeginContainer = connect(
  null,
  mapDispatchToProps,
)(TapToBeginComponent);

export default TapToBeginContainer;
