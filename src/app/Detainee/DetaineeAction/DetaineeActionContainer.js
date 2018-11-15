import { connect } from 'react-redux';
import { selectors } from '../duck';
import DetaineeActionComponent from './DetaineeActionComponent';

export const mapStateToProps = (
  state,
  isBailHearingRoom1OptionAvailable = selectors.isBailHearingRoom1OptionAvailableState(state),
  isBailHearingRoom2OptionAvailable = selectors.isBailHearingRoom2OptionAvailableState(state),
  isBreathTestRoomOptionAvailable = selectors.isBreathTestRoomOptionAvailableState(state),
  isFingerprintingRoomOptionAvailable = selectors.isFingerprintingRoomOptionAvailableState(state),
  isInCellOptionAvailable = selectors.isInCellOptionAvailableState(state),
  isInterviewRoomOptionAvailable = selectors.isInterviewRoomOptionAvailableState(state),
  isMedicalRoomOptionAvailable = selectors.isMedicalRoomOptionAvailableState(state),
  isPhoneDeclineOptionAvailable = selectors.isPhoneDeclineOptionAvailableState(state),
  isPhoneRoomOptionAvailable = selectors.isPhoneRoomOptionAvailableState(state),
  isReleaseRoomOptionAvailable = selectors.isReleaseRoomOptionAvailableState(state),
  isRemandHoldingRoomOptionAvailable = selectors.isRemandHoldingRoomOptionAvailableState(state),
) => ({
  isBailHearingRoom1OptionAvailable,
  isBailHearingRoom2OptionAvailable,
  isBreathTestRoomOptionAvailable,
  isFingerprintingRoomOptionAvailable,
  isInCellOptionAvailable,
  isInterviewRoomOptionAvailable,
  isMedicalRoomOptionAvailable,
  isPhoneDeclineOptionAvailable,
  isPhoneRoomOptionAvailable,
  isReleaseRoomOptionAvailable,
  isRemandHoldingRoomOptionAvailable,
});

export const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetaineeActionComponent);
