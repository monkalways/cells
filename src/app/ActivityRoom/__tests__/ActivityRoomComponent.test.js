import React from 'react';
import { shallow } from 'enzyme';

import { Typography } from '@material-ui/core';
import { ActivityRoomComponent } from '../ActivityRoomComponent';
import Loading from '../../common/Loading';
import ActivityRoomDetaineeCard from '../ActivityRoomDetaineeCard';
import commonConstants from '../../constants';

describe('ActivityRoomComponent', () => {
  let push;
  let usage;
  let isActivityRoomDetaineesLoaded;
  let isAuthenticated;
  let detainees;
  let isCheckingIn;
  let getActivityRoomDetainees;
  let handleCheckIn;
  let handleSignIn;
  let logOut;

  beforeEach(() => {
    push = jest.fn();
    usage = 'phone';
    isActivityRoomDetaineesLoaded = false;
    isAuthenticated = false;
    detainees = [];
    isCheckingIn = false;
    getActivityRoomDetainees = jest.fn();
    handleCheckIn = jest.fn();
    handleSignIn = jest.fn();
    logOut = jest.fn();

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const setup = () => {
    const classes = {
      body: {},
      heading: {},
    };
    return shallow(<ActivityRoomComponent
      classes={classes}
      history={{ push }}
      match={{ params: { usage } }}
      isActivityRoomDetaineesLoaded={isActivityRoomDetaineesLoaded}
      detainees={detainees}
      isAuthenticated={isAuthenticated}
      isCheckingIn={isCheckingIn}
      getActivityRoomDetainees={getActivityRoomDetainees}
      handleCheckIn={handleCheckIn}
      handleSignIn={handleSignIn}
      logOut={logOut}
    />);
  };

  it('should render Loading when detainees are not yet loaded', () => {
    isActivityRoomDetaineesLoaded = false;
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Loading)).toExist();
  });

  it('should render "no detainees" when detainees are loaded but there are none', () => {
    isActivityRoomDetaineesLoaded = true;
    detainees = [];
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Typography)).toExist();
    expect(wrapper.find(Typography).html()).toContain('No detainees');
  });

  it('should render detainee cards when one or more detainees are loaded', () => {
    isActivityRoomDetaineesLoaded = true;
    detainees = [
      {
        id: '123',
      },
      {
        id: '456',
      },
    ];
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(ActivityRoomDetaineeCard).length).toBe(2);
  });

  it('should get detainees when componentDidMount is called', () => {
    const wrapper = setup();

    wrapper.instance().componentDidMount();

    expect(getActivityRoomDetainees).toBeCalledWith(usage);
  });

  it('should not set unauthenticated timer when authenticated', () => {
    isAuthenticated = true;
    const wrapper = setup();

    wrapper.instance().componentDidMount();

    expect(setTimeout).not.toBeCalled();
  });

  it(`should set unauthenticated timer to call logout in ${
    commonConstants.UNAUTHENTICATED_TIMEOUT_SECONDS
  } seconds when not authenticated`, () => {
    isAuthenticated = false;
    const wrapper = setup();

    wrapper.instance().componentDidMount();
    expect(setTimeout).toBeCalled();

    jest.advanceTimersByTime(commonConstants.UNAUTHENTICATED_TIMEOUT_SECONDS * 1000);
    expect(logOut).toBeCalledWith('activity-rooms', usage);

    wrapper.instance().componentWillUnmount();
    expect(clearTimeout).toBeCalled();
  });

  it('should cancel unauthenticated timer after authenticated is set to true after initialization', () => {
    isAuthenticated = false;
    const wrapper = setup();

    wrapper.instance().componentDidMount();
    expect(setTimeout).toBeCalled();

    wrapper.setProps({ isAuthenticated: true });
    expect(clearTimeout).toBeCalled();
  });
});
