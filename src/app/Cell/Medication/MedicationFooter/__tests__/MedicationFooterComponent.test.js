import React from 'react';
import { shallow } from 'enzyme';

import { MedicationFooterComponent } from '../MedicationFooterComponent';
import FooterRadioButtonGroup from '../FooterRadioButtonGroup';

describe('MedicationFooterComponent', () => {
  let goBack;
  let onSave;
  let isSavingMedication;
  let isSaveDisabled;

  beforeEach(() => {
    goBack = jest.fn();
    onSave = jest.fn();
    isSavingMedication = false;
    isSaveDisabled = false;
  });

  const setup = () => {
    const classes = {
      root: '',
      appBar: '',
      navigation: '',
      icon: '',
    };
    const radioButtonValue = 'accept';
    const onRadioGroupChange = jest.fn();
    return shallow(<MedicationFooterComponent
      classes={classes}
      history={{ goBack }}
      isSaveDisabled={isSaveDisabled}
      isSavingMedication={isSavingMedication}
      radioButtonValue={radioButtonValue}
      onRadioGroupChange={onRadioGroupChange}
      onSave={onSave}
    />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should disable all buttons and FooterRadioButtonGroup when saving meal', () => {
    isSavingMedication = true;
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
