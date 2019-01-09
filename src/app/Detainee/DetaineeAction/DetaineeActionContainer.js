import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import constants from '../constants';
import commonConstants from '../../constants';
import DetaineeActionComponent from './DetaineeActionComponent';

export const mapStateToProps = (
  state,
  isBailHearingRoom1OptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.BAIL_HEARING_ROOM_1,
    commonConstants.BAIL_HEARING_IN_PROGRESS,
    commonConstants.BAIL_HEARING_IN_TRANSIT,
  ),
  isBailHearingRoom2OptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.BAIL_HEARING_ROOM_2,
    commonConstants.BAIL_HEARING_IN_PROGRESS,
    commonConstants.BAIL_HEARING_IN_TRANSIT,
  ),
  isBreathTestRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.BREATH_TEST_ROOM,
    commonConstants.BREATH_TEST_IN_PROGRESS,
    commonConstants.BREATH_TEST_IN_TRANSIT,
  ),
  isFingerprintingRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.FINGERPRINTING_ROOM,
    commonConstants.FINGERPRINTING_IN_PROGRESS,
    commonConstants.FINGERPRINTING_IN_TRANSIT,
  ),
  isInCellOptionAvailable = selectors.isInCellOptionAvailableState(state),
  isInterviewRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.INTERVIEW_ROOM,
    commonConstants.INTERVIEW_IN_PROGRESS,
    commonConstants.INTERVIEW_IN_TRANSIT,
  ),
  isMedicalRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.MEDICAL_ROOM,
    commonConstants.MEDICAL_IN_PROGRESS,
    commonConstants.MEDICAL_IN_TRANSIT,
  ),
  isPhoneDeclineOptionAvailable = selectors.isPhoneDeclineOptionAvailableState(state),
  isPhoneRoomOptionAvailable = selectors.isActivityRoomOptionAvailableState(
    state,
    constants.PHONE_ROOM,
    commonConstants.PHONE_IN_PROGRESS,
    commonConstants.PHONE_IN_TRANSIT,
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
