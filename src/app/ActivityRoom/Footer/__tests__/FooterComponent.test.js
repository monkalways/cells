import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '@material-ui/core';
import { FooterComponent } from '../FooterComponent';

describe('FooterComponent', () => {
  let push;
  let onSignIn;
  let isAuthenticated;

  beforeEach(() => {
    push = jest.fn();
    onSignIn = jest.fn();
    isAuthenticated = false;
  });

  const setup = () => {
    const classes = {
      root: {},
      appBar: {},
      button: {},
    };
    return shallow(<FooterComponent
      classes={classes}
      onSignIn={onSignIn}
      history={{ push }}
      isAuthenticated={isAuthenticated}
    />);
  };

  it('should not render Scan ID Card button when authenticated', () => {
    isAuthenticated = true;
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Button)).not.toExist();
  });

  it('should render Scan ID Card button when not authenticated', () => {
    isAuthenticated = false;
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Button)).toExist();
  });

  it('should call onSignIn() button when Scan ID Card button is clicked', () => {
    isAuthenticated = false;
    const wrapper = setup();

    expect(wrapper.find(Button)).toExist();
    wrapper.find(Button).simulate('click');
    expect(onSignIn).toBeCalled();
  });
});
