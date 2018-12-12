import React from 'react';
import { shallow } from 'enzyme';
import { Dialog, Typography } from '@material-ui/core';

import CellDialogComponent from '../CellDialogComponent';
import Loading from '../../../../common/Loading';
import constants from '../../../constants';

describe('CellDialogComponent', () => {
  let checkDetaineeInToCell;
  let currentActivity;
  let detainee;
  let isDialogOpen;
  let isAssigningToRoom;
  let moveDetaineeToCell;
  let onClose;

  beforeEach(() => {
    checkDetaineeInToCell = jest.fn();
    currentActivity = 'activity';
    detainee = {
      assignedCellName: 'C1',
      currentActivityRoom: null,
      firstName: 'Bob',
      id: '123',
      lastName: 'Saget',
      location: 'location',
    };
    isDialogOpen = false;
    isAssigningToRoom = false;
    moveDetaineeToCell = jest.fn();
    onClose = jest.fn();
  });

  const setup = () => shallow(<CellDialogComponent
    checkDetaineeInToCell={checkDetaineeInToCell}
    currentActivity={currentActivity}
    detainee={detainee}
    isAssigningToRoom={isAssigningToRoom}
    isDialogOpen={isDialogOpen}
    moveDetaineeToCell={moveDetaineeToCell}
    onClose={onClose}
  />);

  it('should render "Place in Cell" dialog title if current activity is Cell', () => {
    currentActivity = constants.CELL;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Typography)).toHaveLength(2);
  });

  it('should render "Moving to Cell" dialog title if activity is not Cell', () => {
    currentActivity = '';

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Typography)).toHaveLength(0);
  });

  it('should render Loading component if app is assinging detainee to room', () => {
    isAssigningToRoom = true;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Loading)).toExist();
  });

  it('should handle the dialog closing', () => {
    const wrapper = setup();
    wrapper.find(Dialog).simulate('close');
    expect(onClose).toBeCalled();
  });

  it('should handle confirm button click when activity is Cell', () => {
    const { id, assignedCellName } = detainee;
    currentActivity = constants.CELL;

    const wrapper = setup();
    wrapper.find('#confirmButton').simulate('click');
    expect(checkDetaineeInToCell).toBeCalledWith(id, assignedCellName);
  });

  it('should handle confirm button click when activity is not Cell', () => {
    const { id, currentActivityRoom, assignedCellName } = detainee;
    currentActivity = '';

    const wrapper = setup();
    wrapper.find('#confirmButton').simulate('click');
    expect(moveDetaineeToCell).toBeCalledWith(
      id,
      currentActivityRoom,
      assignedCellName,
    );
  });

  it('should handle cancel button click', () => {
    const wrapper = setup();
    wrapper.find('#cancelButton').simulate('click');
    expect(onClose).toBeCalled();
  });
});
