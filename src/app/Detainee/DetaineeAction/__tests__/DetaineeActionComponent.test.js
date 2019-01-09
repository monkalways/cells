import React from 'react';
import { shallow } from 'enzyme';

import constants from '../../constants';
import { DetaineeActionComponent } from '../DetaineeActionComponent';
import ActivityRoomDialog from '../ActivityRoomDialog';
import CellDialog from '../CellDialog';
import PhoneDeclineDialog from '../PhoneDeclineDialog';
import ReleaseRoomDialog from '../ReleaseRoomDialog'
import RemandRoomDialog from '../RemandRoomDialog'
import RoomSelectionDialog from '../RoomSelectionDialog';

describe('DetaineeActionComponent', () => {
  let detainee;
  let handleClose;
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
    handleClose = jest.fn();
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
      handleClose={handleClose}
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
    expect(wrapper.state().openDialog).toBeNull();
    expect(wrapper.state().usage).toEqual('');
  });

  it.each([
    ['#medical', constants.MEDICAL_ROOM],
    ['#phoneAccept', constants.PHONE_ROOM],
    ['#breathTest', constants.BREATH_TEST_ROOM],
    ['#bailHearing1', constants.BAIL_HEARING_ROOM_1],
    ['#bailHearing2', constants.BAIL_HEARING_ROOM_2],
  ])(
    'should update state when activity room button is clicked',
    (id, activityRoomUsage) => {
      const wrapper = setup();
      const activityRoomDialog = 'activityRoomDialog';

      wrapper.find(id).simulate('click');
      expect(wrapper.state().openDialog).toEqual(activityRoomDialog);
      expect(wrapper.state().usage).toEqual(activityRoomUsage);
    },
  );

  it('should update state when cell button is clicked', () => {
    const wrapper = setup();
    const cellDialog = 'cellDialog';

    wrapper.find('#cell').simulate('click');
    expect(wrapper.state().openDialog).toBe(cellDialog);
  });

  it('should update state when phone decline button is clicked', () => {
    const wrapper = setup();
    const phoneDeclineDialog = 'phoneDeclineDialog';

    wrapper.find('#phoneDecline').simulate('click');
    expect(wrapper.state().openDialog).toBe(phoneDeclineDialog);
  });

  it('should update state when release room button is clicked', () => {
    const wrapper = setup();
    const releaseRoomDialog = 'releaseRoomDialog';

    wrapper.find('#releaseHolding').simulate('click');
    expect(wrapper.state().openDialog).toBe(releaseRoomDialog);
  });

  it('should update state when remand room button is clicked', () => {
    const wrapper = setup();
    const remandRoomDialog = 'remandRoomDialog';

    wrapper.find('#remandHolding').simulate('click');
    expect(wrapper.state().openDialog).toBe(remandRoomDialog);
  });

  it.each([
    ['#fingerprinting', constants.FINGERPRINTING_ROOM],
    ['#interview', constants.INTERVIEW_ROOM],
  ])(
    'should update state when room selection button is clicked',
    (id, activityRoomUsage) => {
      const wrapper = setup();
      const roomSelectionDialog = 'roomSelectionDialog';

      wrapper.find(id).simulate('click');
      expect(wrapper.state().openDialog).toBe(roomSelectionDialog);
      expect(wrapper.state().usage).toEqual(activityRoomUsage);
    },
  );

  it.each([
    [ActivityRoomDialog],
    [CellDialog],
    [PhoneDeclineDialog],
    [ReleaseRoomDialog],
    [RemandRoomDialog],
    [RoomSelectionDialog],
  ])('should update state when modal is closed', (dialog) => {
    const wrapper = setup();

    wrapper.find(dialog).simulate('close');
    expect(wrapper.state().openDialog).toBeNull();
    expect(wrapper.state().usage).toBeNull();
    expect(handleClose).toBeCalledWith(detainee.id)
  });
});
