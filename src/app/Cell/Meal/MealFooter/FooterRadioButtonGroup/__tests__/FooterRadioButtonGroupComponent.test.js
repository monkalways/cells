import React from 'react';
import { shallow } from 'enzyme';

import { RadioGroup } from '@material-ui/core';
import { FooterRadioButtonGroupComponent } from '../FooterRadioButtonGroupComponent';

describe('FooterRadioButtonGroupComponent', () => {
  let onRadioGroupChange;

  beforeEach(() => {
    onRadioGroupChange = jest.fn();
  });

  const setup = () => {
    const classes = { group: '', radioButton: '' };
    const radioButtonValue = 'accept';
    const disable = false;
    return shallow(<FooterRadioButtonGroupComponent
      classes={classes}
      radioButtonValue={radioButtonValue}
      disable={disable}
      onRadioGroupChange={onRadioGroupChange}
    />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle radio group change', () => {
    const wrapper = setup();

    wrapper.find(RadioGroup).simulate('change');
    expect(onRadioGroupChange).toBeCalled();
  });
});
