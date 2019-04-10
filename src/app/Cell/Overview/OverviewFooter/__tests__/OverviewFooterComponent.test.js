import React from 'react';
import { shallow } from 'enzyme';

import { BottomNavigationAction } from '@material-ui/core';
import { OverviewFooterComponent } from '../OverviewFooterComponent';

describe('OverviewFooterComponent', () => {
  let cellName;
  let isAnyDetaineeUnderMedication;
  let isAuthenticated;
  let onSignIn;
  let push;

  beforeEach(() => {
    cellName = 'c1';
    isAnyDetaineeUnderMedication = false;
    isAuthenticated = true;
    onSignIn = jest.fn();
    push = jest.fn();
  });

  const setup = () => {
    const classes = {
      appBar: 'appBar',
      button: 'button',
      disabled: 'disabled',
      navigation: 'navigation',
      navigationImage: 'navigationImage',
      root: 'root',
    };
    return shallow(<OverviewFooterComponent
      cellName={cellName}
      classes={classes}
      history={{ push }}
      isAnyDetaineeUnderMedication={isAnyDetaineeUnderMedication}
      isAuthenticated={isAuthenticated}
      onSignIn={onSignIn}
    />);
  };

  it('should render sign in button if not authenticated', () => {
    isAuthenticated = false;
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#signInButton')).toExist();
    expect(wrapper.find(BottomNavigationAction)).not.toExist();
  });

  it('should handle sign in if not authenticated', () => {
    isAuthenticated = false;
    const wrapper = setup();

    wrapper.find('#signInButton').simulate('click');

    expect(onSignIn).toBeCalled();
  });

  it('should render bottom navigation actions if authenticated', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('#cellCheckButton')).toExist();
    expect(wrapper.find('#mealButton')).toExist();
    expect(wrapper.find('#medicationButton')).toExist();

    expect(wrapper.find('#signInButton')).not.toExist();
  });

  it('should handleCellCheckClick if authenticated', () => {
    const wrapper = setup();

    wrapper.find('#cellCheckButton').simulate('click');
    expect(push).toBeCalledWith('/cells/c1/home/cell-check');
  });

  it('should handleMealClick if authenticated', () => {
    const wrapper = setup();

    wrapper.find('#mealButton').simulate('click');
    expect(push).toBeCalledWith('/cells/c1/home/meal');
  });

  it('should handleMedicationClick if authenticated', () => {
    const wrapper = setup();

    wrapper.find('#medicationButton').simulate('click');
    expect(push).toBeCalledWith('/cells/c1/home/medication');
  });
});
