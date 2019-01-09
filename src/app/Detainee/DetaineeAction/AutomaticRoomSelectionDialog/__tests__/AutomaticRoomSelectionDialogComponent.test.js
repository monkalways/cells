import React from 'react';
import { shallow } from 'enzyme';
import { Dialog } from '@material-ui/core';

import AutomaticRoomSelectionDialogComponent from '../AutomaticRoomSelectionDialogComponent';
import Loading from '../../../../common/Loading';

describe('ActivityRoomDialogComponent', () => {
  let areRoomsRefreshing;
  let currentRoom;
  let destinationRoom;
  let detainee;
  let getAvailableRoomsRefresh;
  let isAnyRoomAvailable;
  let isDialogOpen;
  let isAssigningToRoom;
  let moveDetaineeToRoom;
  let onClose;
  let usage;

  beforeEach(() => {
    areRoomsRefreshing = false;
    currentRoom = 'C1';
    destinationRoom = 'T4';
    detainee = {
      firstName: 'Bob',
      id: '123',
      lastName: 'Saget',
      location: 'location',
    };
    getAvailableRoomsRefresh = jest.fn();
    isAnyRoomAvailable = false;
    isDialogOpen = false;
    isAssigningToRoom = false;
    moveDetaineeToRoom = jest.fn();
    onClose = jest.fn();
    usage = 'usage';
  });

  const setup = () => shallow(<AutomaticRoomSelectionDialogComponent
    areRoomsRefreshing={areRoomsRefreshing}
    currentRoom={currentRoom}
    destinationRoom={destinationRoom}
    detainee={detainee}
    getAvailableRoomsRefresh={getAvailableRoomsRefresh}
    isAnyRoomAvailable={isAnyRoomAvailable}
    isDialogOpen={isDialogOpen}
    isAssigningToRoom={isAssigningToRoom}
    moveDetaineeToRoom={moveDetaineeToRoom}
    onClose={onClose}
    usage={usage}
  />);

  it('should render Loading component if activity rooms are refreshing', () => {
    areRoomsRefreshing = true;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Loading)).toExist();
  });

  it('should show a close button when the room is no longer available', () => {
    areRoomsRefreshing = false;
    isAnyRoomAvailable = false;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#closeButton')).toExist();
  });

  it('should show confirm and cancel buttons when moving a detainee', () => {
    areRoomsRefreshing = false;
    isAnyRoomAvailable = true;
    isAssigningToRoom = false;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#cancelButton')).toExist();
    expect(wrapper.find('#confirmButton')).toExist();
    expect(wrapper.find(Loading)).not.toExist();
  });

  it('should show a loading component when it is assigning the detainee to a room', () => {
    areRoomsRefreshing = false;
    isAnyRoomAvailable = true;
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
    areRoomsRefreshing = false;
    isAnyRoomAvailable = false;

    const wrapper = setup();
    wrapper.find('#closeButton').simulate('click');
    expect(onClose).toBeCalled();
  });

  it('should handle confirm button click', () => {
    areRoomsRefreshing = false;
    isAnyRoomAvailable = true;

    const wrapper = setup();
    wrapper.find('#confirmButton').simulate('click');
    expect(moveDetaineeToRoom).toBeCalledWith(
      detainee.id,
      currentRoom,
      destinationRoom,
    );
  });

  it('should handle cancel button click', () => {
    areRoomsRefreshing = false;
    isAnyRoomAvailable = true;

    const wrapper = setup();
    wrapper.find('#cancelButton').simulate('click');
    expect(onClose).toBeCalled();
  });
});
