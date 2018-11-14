import { connect } from 'react-redux';
import { selectors } from '../duck';
import DetaineeActionComponent from './DetaineeActionComponent';

export const mapStateToProps = (
  state,
  isMedicalRoomOptionAvailable = selectors.isMedicalRoomOptionAvailableState(state),
  isPhoneDeclineOptionAvailable = selectors.isPhoneDeclineOptionAvailableState(state),
  isPhoneRoomOptionAvailable = selectors.isPhoneRoomOptionAvailableState(state),
) => ({
  isMedicalRoomOptionAvailable,
  isPhoneDeclineOptionAvailable,
  isPhoneRoomOptionAvailable,
});

export const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetaineeActionComponent);
