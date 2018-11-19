import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import constants from '../constants';
import DetaineeActionComponent from './DetaineeActionComponent';

export const mapStateToProps = (
  state,
  isBailHearingRoom1OptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.BAIL_HEARING_ROOM_1,
    constants.BAIL_HEARING_IN_PROGRESS,
    constants.BAIL_HEARING_IN_TRANSIT,
  ),
  isBailHearingRoom2OptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.BAIL_HEARING_ROOM_2,
    constants.BAIL_HEARING_IN_PROGRESS,
    constants.BAIL_HEARING_IN_TRANSIT,
  ),
  isBreathTestRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.BREATH_TEST_ROOM,
    constants.BREATH_TEST_IN_PROGRESS,
    constants.BREATH_TEST_IN_TRANSIT,
  ),
  isFingerprintingRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.FINGERPRINTING_ROOM,
    constants.FINGERPRINTING_IN_PROGRESS,
    constants.FINGERPRINTING_IN_TRANSIT,
  ),
  isInCellOptionAvailable = selectors.isInCellOptionAvailableState(state),
  isInterviewRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.INTERVIEW_ROOM,
    constants.INTERVIEW_IN_PROGRESS,
    constants.INTERVIEW_IN_TRANSIT,
  ),
  isMedicalRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.MEDICAL_ROOM,
    constants.MEDICAL_IN_PROGRESS,
    constants.MEDICAL_IN_TRANSIT,
  ),
  isPhoneDeclineOptionAvailable = selectors.isPhoneDeclineOptionAvailableState(state),
  isPhoneRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.PHONE_ROOM,
    constants.PHONE_IN_PROGRESS,
    constants.PHONE_IN_TRANSIT,
  ),
  isReleaseRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.RELEASE_ROOM,
    '',
    constants.RELEASE_HOLDING_IN_TRANSIT,
  ),
  isRemandHoldingRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.REMAND_HOLDING_ROOM,
    '',
    constants.RELEASE_HOLDING_IN_TRANSIT,
  ),
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

export const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line max-len
  getAvailableActivityRooms: (getAvailableActivityRooms = operations.getAvailableActivityRooms) => dispatch(getAvailableActivityRooms()),
  getDetainee: (id, getDetainee = operations.getDetainee) => dispatch(getDetainee(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetaineeActionComponent);
