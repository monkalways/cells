import React from 'react';
import { shallow } from 'enzyme';

import { Select, Button } from '@material-ui/core';
import { GotoActivityRoomComponent } from '../GotoActivityRoomComponent';

describe('GotoActivityRoomComponent', () => {
  let classes;
  let push;

  beforeEach(() => {
    classes = {
      paper: 'paper',
      form: 'form',
      submit: 'submit',
    };
    push = jest.fn();
  });

  const setup = () => shallow(<GotoActivityRoomComponent classes={classes} history={{ push }} />);

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should set initial state', () => {
    const wrapper = setup();
    expect(wrapper.state().usage).toEqual('');
    expect(wrapper.state().open).toBe(false);
  });

  it('should update open state when select is opened or closed', () => {
    const wrapper = setup();

    wrapper.find(Select).simulate('open');
    expect(wrapper.state().open).toBe(true);

    wrapper.find(Select).simulate('close');
    expect(wrapper.state().open).toBe(false);
  });

  it('should update usage state when select value changes', () => {
    const wrapper = setup();
    const event = {
      target: {
        value: 'phone',
      },
    };
    wrapper.find(Select).simulate('change', event);
    expect(wrapper.state().usage).toEqual('phone');
  });

  it('should handle submit', () => {
    const wrapper = setup();
    wrapper.setState({ usage: 'phone' });
    const preventDefault = jest.fn();
    wrapper.find(Button).simulate('click', { preventDefault });

    expect(preventDefault).toBeCalled();
    expect(push).toBeCalledWith('/activity-rooms/phone/');
  });
});
