import React from 'react';
import { shallow } from 'enzyme';

import { CellCheckFooterComponent } from '../CellCheckFooterComponent';
import FooterRadioButtonGroup from '../FooterRadioButtonGroup';

describe('CellCheckFooterComponent', () => {
  let goBack;
  let onSave;
  let isSavingCellCheck;
  let isSaveDisabled;

  beforeEach(() => {
    goBack = jest.fn();
    onSave = jest.fn();
    isSavingCellCheck = false;
    isSaveDisabled = false;
  });

  const setup = () => {
    const classes = {
      root: '',
      appBar: '',
      container: '',
      navigation: '',
      icon: '',
    };
    const radioButtonValue = 'visual';
    const onRadioGroupChange = jest.fn();
    return shallow(<CellCheckFooterComponent
      classes={classes}
      history={{ goBack }}
      onSave={onSave}
      isSaveDisabled={isSaveDisabled}
      isSavingCellCheck={isSavingCellCheck}
      radioButtonValue={radioButtonValue}
      onRadioGroupChange={onRadioGroupChange}
    />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should disable all buttons and FooterRadioButtonGroup when saving cell check', () => {
    isSavingCellCheck = true;
    const wrapper = setup();

    expect(wrapper.find('#backButton')).toBeDisabled();
    expect(wrapper.find('#saveButton')).toBeDisabled();
    expect(wrapper.find(FooterRadioButtonGroup)).toBeDisabled();
  });

  it('should disable save button and FooterRadioButtonGroup when save is disabled', () => {
    isSaveDisabled = true;
    const wrapper = setup();

    expect(wrapper.find('#saveButton')).toBeDisabled();
    expect(wrapper.find(FooterRadioButtonGroup)).toBeDisabled();
    expect(wrapper.find('#backButton')).not.toBeDisabled();
  });

  it('should handle save when save button is enabled and clicked', () => {
    const wrapper = setup();

    wrapper.find('#saveButton').simulate('click');
    expect(onSave).toBeCalled();
  });

  it('should go back when back button is enabled and clicked', () => {
    const wrapper = setup();

    wrapper.find('#backButton').simulate('click');
    expect(goBack).toBeCalled();
  });
});
