import React from 'react';
import { shallow } from 'enzyme';
import { Dialog } from '@material-ui/core';

import ActivityRoomDialogComponent from '../ActivityRoomDialogComponent';
import Loading from '../../../../common/Loading';

describe('ActivityRoomDialogComponent', () => {
  let areActivityRoomsRefreshing;
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
    currentRoom = 'C1';
    destinationRoom = 'T4';
    detainee = {
      firstName: 'Bob',
      id: '123',
      lastName: 'Saget',
      location: 'location',
    };
    getAvailableActivityRoomsRefresh = jest.fn();
    isAnyRoomForGivenActivityAvailable = false;
    isDialogOpen = false;
    isAssigningToRoom = false;
    moveDetaineeToActivityRoom = jest.fn();
    onClose = jest.fn();
    usage = 'usage';
  });

  const setup = () => shallow(<ActivityRoomDialogComponent
    areActivityRoomsRefreshing={areActivityRoomsRefreshing}
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
    wrapper.find('#confirmButton').simulate('click');
    expect(moveDetaineeToActivityRoom).toBeCalledWith(
      detainee.id,
      currentRoom,
      destinationRoom,
    );
  });

  it('should handle cancel button click', () => {
    areActivityRoomsRefreshing = false;
    isAnyRoomForGivenActivityAvailable = true;

    const wrapper = setup();
    wrapper.find('#cancelButton').simulate('click');
    expect(onClose).toBeCalled();
  });
});
