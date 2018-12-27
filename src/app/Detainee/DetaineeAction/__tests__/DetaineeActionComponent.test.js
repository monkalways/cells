import React from 'react';
import { shallow } from 'enzyme';

import constants from '../../constants';
import { DetaineeActionComponent } from '../DetaineeActionComponent';
import ActivityRoomDialog from '../ActivityRoomDialog';
import CellDialog from '../CellDialog';
import PhoneDeclineDialog from '../PhoneDeclineDialog';
import RoomSelectionDialog from '../RoomSelectionDialog';

describe('DetaineeActionComponent', () => {
  let detainee;
  let getAvailableActivityRooms;
  let getDetainee;
  let isBailHearingRoom1OptionAvailable;
  let isBailHearingRoom2OptionAvailable;
  let isBreathTestRoomOptionAvailable;
  let isFingerprintingRoomOptionAvailable;
  let isInCellOptionAvailable;
  let isInterviewRoomOptionAvailable;
  let isMedicalRoomOptionAvailable;
  let isPhoneDeclineOptionAvailable;
  let isPhoneRoomOptionAvailable;
  let isReleaseRoomOptionAvailable;
  let isRemandHoldingRoomOptionAvailable;

  beforeEach(() => {
    detainee = {
      firstName: 'Bob',
      id: '123',
      lastName: 'Saget',
    };
    getAvailableActivityRooms = jest.fn();
    getDetainee = jest.fn();
    isBailHearingRoom1OptionAvailable = false;
    isBailHearingRoom2OptionAvailable = false;
    isBreathTestRoomOptionAvailable = false;
    isFingerprintingRoomOptionAvailable = false;
    isInCellOptionAvailable = false;
    isInterviewRoomOptionAvailable = false;
    isMedicalRoomOptionAvailable = false;
    isPhoneDeclineOptionAvailable = false;
    isPhoneRoomOptionAvailable = false;
    isReleaseRoomOptionAvailable = false;
    isRemandHoldingRoomOptionAvailable = false;
  });

  const setup = () => {
    const classes = {
      avatar: 'avatar',
      button: 'button',
      cardContent: 'cardContent',
      cardHeader: 'cardHeader',
      disabled: 'disabled',
      imgContainer: 'imgContainer',
    };
    return shallow(<DetaineeActionComponent
      classes={classes}
      detainee={detainee}
      getAvailableActivityRooms={getAvailableActivityRooms}
      getDetainee={getDetainee}
      isBailHearingRoom1OptionAvailable={isBailHearingRoom1OptionAvailable}
      isBailHearingRoom2OptionAvailable={isBailHearingRoom2OptionAvailable}
      isBreathTestRoomOptionAvailable={isBreathTestRoomOptionAvailable}
      isFingerprintingRoomOptionAvailable={
          isFingerprintingRoomOptionAvailable
        }
      isInCellOptionAvailable={isInCellOptionAvailable}
      isInterviewRoomOptionAvailable={isInterviewRoomOptionAvailable}
      isMedicalRoomOptionAvailable={isMedicalRoomOptionAvailable}
      isPhoneDeclineOptionAvailable={isPhoneDeclineOptionAvailable}
      isPhoneRoomOptionAvailable={isPhoneRoomOptionAvailable}
      isReleaseRoomOptionAvailable={isReleaseRoomOptionAvailable}
      isRemandHoldingRoomOptionAvailable={isRemandHoldingRoomOptionAvailable}
    />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should set initial state', () => {
    const wrapper = setup();
    expect(wrapper.state().isActivityRoomDialogOpen).toBe(false);
    expect(wrapper.state().isCellDialogOpen).toBe(false);
    expect(wrapper.state().isRoomSelectionDialogOpen).toBe(false);
    expect(wrapper.state().isPhoneDialogOpen).toBe(false);
    expect(wrapper.state().usage).toEqual('');
  });

  it.each([
    ['#medical', constants.MEDICAL_ROOM],
    ['#phoneAccept', constants.PHONE_ROOM],
    ['#breathTest', constants.BREATH_TEST_ROOM],
    ['#bailHearing1', constants.BAIL_HEARING_ROOM_1],
    ['#bailHearing2', constants.BAIL_HEARING_ROOM_2],
    ['#remandHolding', constants.REMAND_HOLDING_ROOM],
    ['#releaseHolding', constants.RELEASE_ROOM],
  ])(
    'should update state when activity room button is clicked',
    (id, activityRoomUsage) => {
      const wrapper = setup();

      wrapper.find(id).simulate('click');
      expect(wrapper.state().isActivityRoomDialogOpen).toBe(true);
      expect(wrapper.state().isCellDialogOpen).toBe(false);
      expect(wrapper.state().isRoomSelectionDialogOpen).toBe(false);
      expect(wrapper.state().isPhoneDialogOpen).toBe(false);
      expect(wrapper.state().usage).toEqual(activityRoomUsage);
    },
  );

  it('should update state when cell button is clicked', () => {
    const wrapper = setup();

    wrapper.find('#cell').simulate('click');
    expect(wrapper.state().isActivityRoomDialogOpen).toBe(false);
    expect(wrapper.state().isCellDialogOpen).toBe(true);
    expect(wrapper.state().isRoomSelectionDialogOpen).toBe(false);
    expect(wrapper.state().isPhoneDialogOpen).toBe(false);
  });

  it.each([
    ['#fingerprinting', constants.FINGERPRINTING_ROOM],
    ['#interview', constants.INTERVIEW_ROOM],
  ])(
    'should update state when room selection button is clicked',
    (id, activityRoomUsage) => {
      const wrapper = setup();

      wrapper.find(id).simulate('click');
      expect(wrapper.state().isActivityRoomDialogOpen).toBe(false);
      expect(wrapper.state().isCellDialogOpen).toBe(false);
      expect(wrapper.state().isRoomSelectionDialogOpen).toBe(true);
      expect(wrapper.state().isPhoneDialogOpen).toBe(false);
      expect(wrapper.state().usage).toEqual(activityRoomUsage);
    },
  );

  it('should update state when phone decline button is clicked', () => {
    const wrapper = setup();

    wrapper.find('#phoneDecline').simulate('click');
    expect(wrapper.state().isActivityRoomDialogOpen).toBe(false);
    expect(wrapper.state().isCellDialogOpen).toBe(false);
    expect(wrapper.state().isRoomSelectionDialogOpen).toBe(false);
    expect(wrapper.state().isPhoneDialogOpen).toBe(true);
  });

  it.each([
    [ActivityRoomDialog],
    [CellDialog],
    [PhoneDeclineDialog],
    [RoomSelectionDialog],
  ])('should update state when modal is closed', (dialog) => {
    const wrapper = setup();

    wrapper.find(dialog).simulate('close');
    expect(wrapper.state().isActivityRoomDialogOpen).toBe(false);
    expect(wrapper.state().isCellDialogOpen).toBe(false);
    expect(wrapper.state().isRoomSelectionDialogOpen).toBe(false);
    expect(wrapper.state().isPhoneDialogOpen).toBe(false);
  });
});
