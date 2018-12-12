import React from 'react';
import { shallow } from 'enzyme';
import { Dialog, RadioGroup } from '@material-ui/core';

import { RoomSelectionDialogComponent } from '../RoomSelectionDialogComponent';
import Loading from '../../../../common/Loading';

describe('RoomSelectionDialogComponent', () => {
  let areActivityRoomsRefreshing;
  let availableRooms;
  let currentRoom;
  let destinationRoom;
  let detainee;
  let getAvailableActivityRoomsRefresh;
  let isAnyRoomForGivenActivityAvailable;
  let isDialogOpen;
  let isAssigningToRoom;
  let moveDetaineeToActivityRoom;
  let onClose;
  let usage;

  beforeEach(() => {
    areActivityRoomsRefreshing = false;
    availableRooms = [];
    currentRoom = 'B4';
    destinationRoom = 'T4';
    detainee = {
      firstName: 'Bob',
      id: '123',
      lastName: 'Saget',
    };
    getAvailableActivityRoomsRefresh = jest.fn();
    isAnyRoomForGivenActivityAvailable = false;
    isDialogOpen = false;
    isAssigningToRoom = false;
    moveDetaineeToActivityRoom = jest.fn();
    onClose = jest.fn();
    usage = 'usage';
  });

  const setup = () => {
    const classes = { radioButton: 'radioButton' };

    return shallow(<RoomSelectionDialogComponent
      areActivityRoomsRefreshing={areActivityRoomsRefreshing}
      availableRooms={availableRooms}
      classes={classes}
      currentRoom={currentRoom}
      destinationRoom={destinationRoom}
      detainee={detainee}
      getAvailableActivityRoomsRefresh={getAvailableActivityRoomsRefresh}
      isAnyRoomForGivenActivityAvailable={isAnyRoomForGivenActivityAvailable}
      isDialogOpen={isDialogOpen}
      isAssigningToRoom={isAssigningToRoom}
      moveDetaineeToActivityRoom={moveDetaineeToActivityRoom}
      onClose={onClose}
      usage={usage}
    />);
  };

  it('should render Loading component if activity rooms are refreshing', () => {
    areActivityRoomsRefreshing = true;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Loading)).toExist();
  });

  it('should show a close button when the room is no longer available', () => {
    areActivityRoomsRefreshing = false;
    isAnyRoomForGivenActivityAvailable = false;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#closeButton')).toExist();
  });

  it('should show confirm and cancel buttons when moving a detainee', () => {
    areActivityRoomsRefreshing = false;
    isAnyRoomForGivenActivityAvailable = true;
    isAssigningToRoom = false;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#cancelButton')).toExist();
    expect(wrapper.find('#confirmButton')).toExist();
    expect(wrapper.find(Loading)).not.toExist();
  });

  it('should show a loading component when it is assigning the detainee to a room', () => {
    areActivityRoomsRefreshing = false;
    isAnyRoomForGivenActivityAvailable = true;
    isAssigningToRoom = true;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#cancelButton')).toExist();
    expect(wrapper.find('#confirmButton')).toExist();
    expect(wrapper.find(Loading)).toExist();
  });

  it('should handle the dialog closing', () => {
    const wrapper = setup();
    wrapper.find(Dialog).simulate('close');
    expect(onClose).toBeCalled();
  });

  it('should handle close button click', () => {
    areActivityRoomsRefreshing = false;
    isAnyRoomForGivenActivityAvailable = false;

    const wrapper = setup();
    wrapper.find('#closeButton').simulate('click');
    expect(onClose).toBeCalled();
  });

  it('should handle confirm button click', () => {
    areActivityRoomsRefreshing = false;
    isAnyRoomForGivenActivityAvailable = true;

    const wrapper = setup();
    wrapper.setState({ value: 'T4' });
    wrapper.find('#confirmButton').simulate('click');
    expect(moveDetaineeToActivityRoom).toBeCalledWith(
      detainee.id,
      currentRoom,
      'T4',
    );
  });

  it.each([
    [null, { areActivityRoomsRefreshing: true, availableRooms: null }, null],
    [
      null,
      { areActivityRoomsRefreshing: false, availableRooms: ['T1', 'T2'] },
      'T1',
    ],
    ['T1', { areActivityRoomsRefreshing: false, availableRooms: null }, 'T1'],
  ])(
    'should set value to first available room when activity rooms have finished refreshing',
    (previousValue, nextProps, nextValue) => {
      const wrapper = setup();
      wrapper.setState({ value: previousValue });
      wrapper.instance().componentWillReceiveProps(nextProps);
      expect(wrapper).toHaveState('value', nextValue);
    },
  );

  it('should update value when radio selection changes', () => {
    areActivityRoomsRefreshing = false;
    isAnyRoomForGivenActivityAvailable = true;
    isAssigningToRoom = false;

    const wrapper = setup();
    const event = {
      target: {
        value: 'CHU1',
      },
    };
    wrapper.find(RadioGroup).simulate('change', event);
    expect(wrapper.state().value).toEqual('CHU1');
  });

  it('should handle cancel button click', () => {
    areActivityRoomsRefreshing = false;
    isAnyRoomForGivenActivityAvailable = true;

    const wrapper = setup();
    wrapper.find('#cancelButton').simulate('click');
    expect(onClose).toBeCalled();
  });
});
