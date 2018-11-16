import React from 'react';
import { shallow } from 'enzyme';
import { Dialog } from '@material-ui/core';

import CheckInDetaineeDialogComponent from '../CheckInDetaineeDialogComponent';
import Loading from '../../../../../common/Loading';

describe('CheckInDetaineeDialogComponent', () => {
  let isCheckingIn;
  let onCheckIn;
  let onClose;

  beforeEach(() => {
    isCheckingIn = true;
    onCheckIn = jest.fn();
    onClose = jest.fn();
  });

  const setup = () => {
    const detainee = {
      firstName: 'John',
      lastName: 'Smith',
      activityRoomName: 'T1',
    };
    const isDialogOpen = false;
    const usage = 'phone';

    return shallow(<CheckInDetaineeDialogComponent
      detainee={detainee}
      isDialogOpen={isDialogOpen}
      isCheckingIn={isCheckingIn}
      onCheckIn={onCheckIn}
      onClose={onClose}
      usage={usage}
    />);
  };

  it('should render', () => {
    isCheckingIn = false;
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Loading component when isCheckingIn is true', () => {
    const wrapper = setup();

    expect(wrapper.find(Loading)).toExist();
  });

  it('should call onCheckIn when checkInButton is clicked', () => {
    const wrapper = setup();

    wrapper.find('#checkInButton').simulate('click');
    expect(onCheckIn).toBeCalled();
  });

  it('should call onClose when cancelButton is clicked', () => {
    const wrapper = setup();

    wrapper.find('#cancelButton').simulate('click');
    expect(onClose).toBeCalled();
  });

  it('should call onClose when dialog is closed', () => {
    const wrapper = setup();

    wrapper.find(Dialog).simulate('close');
    expect(onClose).toBeCalled();
  });
});
