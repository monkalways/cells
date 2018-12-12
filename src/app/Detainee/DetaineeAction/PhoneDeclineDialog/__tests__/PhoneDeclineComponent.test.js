import React from 'react';
import { shallow } from 'enzyme';
import { Dialog } from '@material-ui/core';

import PhoneDeclineComponent from '../PhoneDeclineComponent';
import Loading from '../../../../common/Loading';

describe('PhoneDeclineComponent', () => {
  let cellName;
  let detainee;
  let isDialogOpen;
  let isUpdatingDetentionLog;
  let onClose;
  let savePhoneCallDecline;
  let userName;

  beforeEach(() => {
    cellName = 'C1';
    detainee = {
      arrestId: 'arrestId',
      firstName: 'Bob',
      lastName: 'Saget',
    };
    isDialogOpen = false;
    isUpdatingDetentionLog = false;
    onClose = jest.fn();
    savePhoneCallDecline = jest.fn();
    userName = 'Jay';
  });

  const setup = () => shallow(<PhoneDeclineComponent
    cellName={cellName}
    detainee={detainee}
    isDialogOpen={isDialogOpen}
    isUpdatingDetentionLog={isUpdatingDetentionLog}
    onClose={onClose}
    savePhoneCallDecline={savePhoneCallDecline}
    userName={userName}
  />);

  it('should render content when detention log is not being updated', () => {
    isUpdatingDetentionLog = false;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Loading)).not.toExist();
  });

  it('should render Loading component when detention log is being updated', () => {
    isUpdatingDetentionLog = true;

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
    const { arrestId } = detainee;

    const wrapper = setup();
    wrapper.find('#confirmButton').simulate('click');
    expect(savePhoneCallDecline).toBeCalledWith(arrestId, cellName, userName);
  });

  it('should handle cancel button click', () => {
    const wrapper = setup();
    wrapper.find('#cancelButton').simulate('click');
    expect(onClose).toBeCalled();
  });
});
