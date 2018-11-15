import { connect } from 'react-redux';
import { selectors } from '../duck';
import DetaineeActionComponent from './DetaineeActionComponent';

export const mapStateToProps = (
  state,
  isBreathTestRoomOptionAvailable = selectors.isBreathTestRoomOptionAvailableState(state),
  isFingerprintingRoomOptionAvailable = selectors.isFingerprintingRoomOptionAvailableState(state),
  isInterviewRoomOptionAvailable = selectors.isInterviewRoomOptionAvailableState(state),
  isMedicalRoomOptionAvailable = selectors.isMedicalRoomOptionAvailableState(state),
  isPhoneDeclineOptionAvailable = selectors.isPhoneDeclineOptionAvailableState(state),
  isPhoneRoomOptionAvailable = selectors.isPhoneRoomOptionAvailableState(state),
) => ({
  isBreathTestRoomOptionAvailable,
  isFingerprintingRoomOptionAvailable,
  isInterviewRoomOptionAvailable,
  isMedicalRoomOptionAvailable,
  isPhoneDeclineOptionAvailable,
  isPhoneRoomOptionAvailable,
});

export const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetaineeActionComponent);
