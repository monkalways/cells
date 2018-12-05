import { connect } from 'react-redux';
import { operations, selectors } from '../../duck';
import { selectors as authenticationSelectors } from '../../../Authentication/duck';
import PhoneDeclineComponent from './PhoneDeclineComponent';

export const mapStateToProps = (
  state,
  cellName = selectors.getCurrentRoomState(state),
  isUpdatingDetentionLog = selectors.isUpdatingDetentionLogState(state),
  userName = authenticationSelectors.getUserNameState(state),
) => ({
  cellName,
  isUpdatingDetentionLog,
  userName,
});

export const mapDispatchToProps = (dispatch) => ({
  savePhoneCallDecline: (
    arrestId,
    cellName,
    userName,
    savePhoneCallDecline = operations.savePhoneCallDecline,
  ) => {
    dispatch(savePhoneCallDecline(arrestId, cellName, userName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneDeclineComponent);
