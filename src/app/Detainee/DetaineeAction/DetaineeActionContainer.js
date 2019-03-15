import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import constants from '../constants';
import DetaineeActionComponent from './DetaineeActionComponent';

export const mapStateToProps = (
  state,
  isBailHearingRoom1OptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.BAIL_HEARING_ROOM_1,
  ),
  isBailHearingRoom2OptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.BAIL_HEARING_ROOM_2,
  ),
  isBreathTestRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.BREATH_TEST_ROOM,
  ),
  isFingerprintingRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.FINGERPRINTING_ROOM,
  ),
  isInCellOptionAvailable = selectors.isInCellOptionAvailableState(state),
  isInterviewRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.INTERVIEW_ROOM,
  ),
  isMedicalRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.MEDICAL_ROOM,
  ),
  isPhoneDeclineOptionAvailable = selectors.isPhoneDeclineOptionAvailableState(state),
  isPhoneRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.PHONE_ROOM,
  ),
  isReleaseRoomOptionAvailable = selectors.isReleaseRoomOptionAvailableState(state),
  isRemandRoomOptionAvailable = selectors.isRemandRoomOptionAvailableState(state),
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
  isRemandRoomOptionAvailable,
});

export const mapDispatchToProps = (dispatch) => ({
  handleClose: (
    id,
    getAvailableActivityRooms = operations.getAvailableActivityRooms,
    getAvailableReleaseRooms = operations.getAvailableReleaseRooms,
    getAvailableRemandRooms = operations.getAvailableRemandRooms,
    getDetainee = operations.getDetainee,
  ) => {
    dispatch(getAvailableActivityRooms());
    dispatch(getAvailableReleaseRooms());
    dispatch(getAvailableRemandRooms());
    dispatch(getDetainee(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetaineeActionComponent);
