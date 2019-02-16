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
  let goBack;
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
  let isRemandRoomOptionAvailable;

  beforeEach(() => {
    detainee = {
      fingerPrintCount: 0,
      firstName: 'Bob',
      id: '123',
      lastName: 'Saget',
      overrideFingerprintingWarning: false,
      telephoneAcceptedCount: 0,
    };
    handleClose = jest.fn();
    goBack=jest.fn()
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
    isRemandRoomOptionAvailable = false;
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
      history={{goBack}}
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
      isRemandRoomOptionAvailable={isRemandRoomOptionAvailable}
    />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should set initial state', () => {
    const wrapper = setup();
    expect(wrapper.state().fingerprintingWarningDialogOpen).toBe(false);
    expect(wrapper.state().phonecallWarningDialogOpen).toBe(false);
    expect(wrapper.state().mainDialogOpen).toBeNull();
    expect(wrapper.state().usage).toBeNull()
  });

  it.each([
    ['#bailHearing1', constants.BAIL_HEARING_ROOM_1],
    ['#bailHearing2', constants.BAIL_HEARING_ROOM_2],
    ['#breathTest', constants.BREATH_TEST_ROOM],
    ['#medical', constants.MEDICAL_ROOM],
    ['#phoneAccept', constants.PHONE_ROOM],
  ])(
    'should open activity room dialog when activity room button is clicked',
    (id, activityRoomUsage) => {
      const activityRoomDialog = 'activityRoomDialog';
      const wrapper = setup();

      wrapper.find(id).simulate('click');
      expect(wrapper.state().mainDialogOpen).toEqual(activityRoomDialog);
      expect(wrapper.state().usage).toEqual(activityRoomUsage);
    },
  );

  it.each([
    ['#bailHearing1', constants.BAIL_HEARING_ROOM_1],
    ['#bailHearing2', constants.BAIL_HEARING_ROOM_2],
  ])(
    'should open fingerprinting warning dialog if detainee has not been fingerprinted yet',
    (id, activityRoomUsage) => {
      detainee.fingerPrintCount = 0;
      detainee.overrideFingerprintingWarning = false;
      const activityRoomDialog = 'activityRoomDialog';
      const wrapper = setup();

      wrapper.find(id).simulate('click');
      expect(wrapper.state().mainDialogOpen).toEqual(activityRoomDialog);
      expect(wrapper.state().usage).toEqual(activityRoomUsage);
      expect(wrapper.state().fingerprintingWarningDialogOpen).toBe(true);
    },
  );

  it.each([
    ['#bailHearing1', constants.BAIL_HEARING_ROOM_1],
    ['#bailHearing2', constants.BAIL_HEARING_ROOM_2],
  ])(
    'should not open fingerprinting warning dialog if fingerprinting override is enabled',
    (id, activityRoomUsage) => {
      detainee.fingerPrintCount = 0;
      detainee.overrideFingerprintingWarning = true;
      const activityRoomDialog = 'activityRoomDialog';
      const wrapper = setup();

      wrapper.find(id).simulate('click');
      expect(wrapper.state().mainDialogOpen).toEqual(activityRoomDialog);
      expect(wrapper.state().usage).toEqual(activityRoomUsage);
      expect(wrapper.state().fingerprintingWarningDialogOpen).toBe(false);
    },
  );

  it.each([
    ['#bailHearing1', constants.BAIL_HEARING_ROOM_1],
    ['#bailHearing2', constants.BAIL_HEARING_ROOM_2],
  ])(
    'should not open fingerprinting warning dialog if fingerprinting count is greater than 0',
    (id, activityRoomUsage) => {
      detainee.fingerPrintCount = 1;
      detainee.overrideFingerprintingWarning = false;
      const activityRoomDialog = 'activityRoomDialog';
      const wrapper = setup();

      wrapper.find(id).simulate('click');
      expect(wrapper.state().mainDialogOpen).toEqual(activityRoomDialog);
      expect(wrapper.state().usage).toEqual(activityRoomUsage);
      expect(wrapper.state().fingerprintingWarningDialogOpen).toBe(false);
    },
  );

  it.each([
    ['#bailHearing1', constants.BAIL_HEARING_ROOM_1],
    ['#bailHearing2', constants.BAIL_HEARING_ROOM_2],
  ])(
    'should open phonecall warning dialog if phone accepted count is 0',
    (id, activityRoomUsage) => {
      detainee.telephoneAcceptedCount = 0;
      const activityRoomDialog = 'activityRoomDialog';
      const wrapper = setup();

      wrapper.find(id).simulate('click');
      expect(wrapper.state().mainDialogOpen).toEqual(activityRoomDialog);
      expect(wrapper.state().usage).toEqual(activityRoomUsage);
      expect(wrapper.state().phonecallWarningDialogOpen).toBe(true);
    },
  );

  it.each([
    ['#bailHearing1', constants.BAIL_HEARING_ROOM_1],
    ['#bailHearing2', constants.BAIL_HEARING_ROOM_2],
  ])(
    'should not open phonecall warning dialog if phone accepted count is greater than 0',
    (id, activityRoomUsage) => {
      detainee.telephoneAcceptedCount = 1;
      const activityRoomDialog = 'activityRoomDialog';
      const wrapper = setup();

      wrapper.find(id).simulate('click');
      expect(wrapper.state().mainDialogOpen).toEqual(activityRoomDialog);
      expect(wrapper.state().usage).toEqual(activityRoomUsage);
      expect(wrapper.state().phonecallWarningDialogOpen).toBe(false);
    },
  );

  it('should update state when cell button is clicked', () => {
    const wrapper = setup();
    const cellDialog = 'cellDialog';

    wrapper.find('#cell').simulate('click');
    expect(wrapper.state().mainDialogOpen).toBe(cellDialog);
  });

  it('should update state when phone decline button is clicked', () => {
    const wrapper = setup();
    const phoneDeclineDialog = 'phoneDeclineDialog';

    wrapper.find('#phoneDecline').simulate('click');
    expect(wrapper.state().mainDialogOpen).toBe(phoneDeclineDialog);
  });

  it('should update state when release room button is clicked', () => {
    const wrapper = setup();
    const releaseRoomDialog = 'releaseRoomDialog';

    wrapper.find('#releaseHolding').simulate('click');
    expect(wrapper.state().mainDialogOpen).toBe(releaseRoomDialog);
  });

  it('should update state when remand room button is clicked', () => {
    const wrapper = setup();
    const remandRoomDialog = 'remandRoomDialog';

    wrapper.find('#remandHolding').simulate('click');
    expect(wrapper.state().mainDialogOpen).toBe(remandRoomDialog);
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
      expect(wrapper.state().mainDialogOpen).toBe(roomSelectionDialog);
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
    expect(wrapper.state().fingerprintingWarningDialogOpen).toBe(false);
    expect(wrapper.state().phonecallWarningDialogOpen).toBe(false);
    expect(wrapper.state().mainDialogOpen).toBeNull();
    expect(wrapper.state().usage).toBeNull();
    expect(handleClose).toBeCalledWith(detainee.id)
  });
});
