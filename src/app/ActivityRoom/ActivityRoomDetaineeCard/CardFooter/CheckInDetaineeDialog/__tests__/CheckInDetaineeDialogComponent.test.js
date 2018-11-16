import React from 'react';
import { shallow } from 'enzyme';
import { Dialog } from '@material-ui/core';

import CheckInDetaineeDialogComponent from '../CheckInDetaineeDialogComponent';
import Loading from '../../../../../common/Loading';

describe('CheckInDetaineeDialogComponent', () => {
  const setup = ({ isCheckingIn, onCheckIn, onClose }) => {
    const detainee = {
      firstName: 'John',
      lastName: 'Smith',
      activityRoomName: 'T1',
    };
    const isDialogOpen = false;
    const usage = 'phone';

    const wrapper = shallow(<CheckInDetaineeDialogComponent
      detainee={detainee}
      isDialogOpen={isDialogOpen}
      isCheckingIn={isCheckingIn}
      onCheckIn={onCheckIn}
      onClose={onClose}
      usage={usage}
    />);
    return wrapper;
  };

  it('should render', () => {
    const isCheckingIn = false;
    const onCheckIn = jest.fn();
    const onClose = jest.fn();

    const wrapper = setup({ isCheckingIn, onCheckIn, onClose });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render Loading component when isCheckingIn is true', () => {
    const isCheckingIn = true;
    const onCheckIn = jest.fn();
    const onClose = jest.fn();

    const wrapper = setup({ isCheckingIn, onCheckIn, onClose });

    expect(wrapper.find(Loading)).toExist();
  });

  it('should call onCheckIn when checkInButton is clicked', () => {
    const isCheckingIn = true;
    const onCheckIn = jest.fn();
    const onClose = jest.fn();

    const wrapper = setup({ isCheckingIn, onCheckIn, onClose });

    wrapper.find('#checkInButton').simulate('click');
    expect(onCheckIn).toBeCalled();
  });

  it('should call onClose when cancelButton is clicked', () => {
    const isCheckingIn = true;
    const onCheckIn = jest.fn();
    const onClose = jest.fn();

    const wrapper = setup({ isCheckingIn, onCheckIn, onClose });

    wrapper.find('#cancelButton').simulate('click');
    expect(onClose).toBeCalled();
  });

  it('should call onClose when dialog is closed', () => {
    const isCheckingIn = true;
    const onCheckIn = jest.fn();
    const onClose = jest.fn();

    const wrapper = setup({ isCheckingIn, onCheckIn, onClose });

    wrapper.find(Dialog).simulate('close');
    expect(onClose).toBeCalled();
  });
});
