import React from 'react';
import { shallow } from 'enzyme';
import { Button, Typography } from '@material-ui/core';

import { CardFooterComponent } from '../CardFooterComponent';

describe('CardFooterComponent', () => {
  let isAuthenticated;
  let detaineeId;
  let location;
  let onCheckIn;
  let isCheckingIn;
  let isCheckingInSuccess;
  let push;
  let usage;

  beforeEach(() => {
    isAuthenticated = true;
    detaineeId = '123';
    location = 'Phone - In Transit';
    onCheckIn = jest.fn();
    isCheckingIn = false;
    isCheckingInSuccess = false;
    push = jest.fn();
    usage = 'phone';
  });

  const setup = () => {
    const classes = {
      actions: '',
      heading: '',
      inButton: '',
      outButton: '',
    };
    const detainee = {
      id: detaineeId,
      activityRoomName: 'T1',
      location,
      firstName: 'John',
      lastName: 'Smith',
    };
    const history = { push };

    return shallow(<CardFooterComponent
      classes={classes}
      history={history}
      detainee={detainee}
      isAuthenticated={isAuthenticated}
      isCheckingIn={isCheckingIn}
      isCheckingInSuccess={isCheckingInSuccess}
      onCheckIn={onCheckIn}
      usage={usage}
    />);
  };

  it('should set isDialogOpen to true when check-in is still in progress', () => {
    const wrapper = setup();
    const nextProps = {
      isCheckingIn: true,
      isCheckingInSuccess: false,
    };

    wrapper.instance().componentWillReceiveProps(nextProps);

    expect(wrapper).toHaveState('isDialogOpen', true);
  });

  it('should set isDialogOpen to false when check-in is complete', () => {
    const wrapper = setup();
    const nextProps = {
      isCheckingIn: false,
      isCheckingInSuccess: true,
    };

    wrapper.instance().componentWillReceiveProps(nextProps);

    expect(wrapper).toHaveState('isDialogOpen', false);
  });

  it('should render empty when isAuthenticated is false', () => {
    isAuthenticated = false;
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Typography)).not.toExist();
  });

  it('should render title when isAuthenticated is true', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Typography)).toExist();
  });

  it('should render IN Button when location contains "in transit"', () => {
    location = 'Phone - In Transit';
    const wrapper = setup();

    const inButton = wrapper.find('#inButton');
    expect(inButton).toExist();
    expect(wrapper).toHaveState('isDialogOpen', false);

    inButton.simulate('click');
    expect(wrapper).toHaveState('isDialogOpen', true);
  });

  it('should render OUT Button when location contains "in progress"', () => {
    location = 'Phone - In Progress';
    const wrapper = setup();

    const outButton = wrapper.find('#outButton');
    expect(outButton).toExist();

    outButton.simulate('click');
    expect(push).toBeCalledWith(`/detainees/${detaineeId}?first=activity-rooms&second=${usage}`);
  });

  it('should not render any Button when location does not contain "in transit" or "in progress"', () => {
    location = '';
    const wrapper = setup();

    expect(wrapper.find(Button)).not.toExist();
  });

  it('should handle close', () => {
    location = '';
    const wrapper = setup();

    wrapper.instance().handleClose();
    expect(wrapper).toHaveState('isDialogOpen', false);
  });

  it('should handle checkin', () => {
    location = '';
    const wrapper = setup();

    wrapper.instance().handleCheckIn();
    expect(onCheckIn).toBeCalledWith(detaineeId, usage);
  });
});
