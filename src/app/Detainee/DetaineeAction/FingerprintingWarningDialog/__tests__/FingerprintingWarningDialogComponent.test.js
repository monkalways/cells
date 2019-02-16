import React from 'react';
import { shallow } from 'enzyme';
import { Dialog } from '@material-ui/core';

import FingerprintingWarningDialogComponent from '../FingerprintingWarningDialogComponent';

describe('FingerprintingWarningDialogComponent', () => {
  let isDialogOpen;
  let handleCancel;
  let handleClose;
  let handleIgnore;

  beforeEach(() => {
    isDialogOpen = true;
    handleCancel = jest.fn();
    handleClose = jest.fn();
    handleIgnore = jest.fn();
  });

  const setup = () => shallow(<FingerprintingWarningDialogComponent
    isDialogOpen={isDialogOpen}
    handleCancel={handleCancel}
    handleClose={handleClose}
    handleIgnore={handleIgnore}
  />);

  it('should render correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should handleClose', () => {
    const wrapper = setup();
    wrapper.find(Dialog).simulate('close');
    expect(handleClose).toBeCalled();
  });

  it('should handleCancel', () => {
    const wrapper = setup();
    wrapper.find('#cancelButton').simulate('click');
    expect(handleCancel).toBeCalled();
  });

  it('should handleIgnore', () => {
    const wrapper = setup();
    wrapper.find('#ignoreButton').simulate('click');
    expect(handleIgnore).toBeCalled();
  });
});
