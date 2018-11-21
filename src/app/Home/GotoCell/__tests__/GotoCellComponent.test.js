import React from 'react';
import { shallow } from 'enzyme';

import { Button, Input } from '@material-ui/core';
import { GotoCellComponent } from '../GotoCellComponent';

describe('GotoCellComponent', () => {
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

  const setup = () => shallow(<GotoCellComponent classes={classes} history={{ push }} />);

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should set initial state', () => {
    const wrapper = setup();
    expect(wrapper.state().cellName).toEqual('');
  });

  it('should update usage state when input value changes', () => {
    const wrapper = setup();
    const event = {
      target: {
        value: 'c1',
      },
    };
    wrapper.find(Input).simulate('change', event);
    expect(wrapper.state().cellName).toEqual('c1');
  });

  it('should handle submit', () => {
    const wrapper = setup();
    wrapper.setState({ cellName: 'c1' });
    const preventDefault = jest.fn();
    wrapper.find(Button).simulate('click', { preventDefault });

    expect(preventDefault).toBeCalled();
    expect(push).toBeCalledWith('/cells/c1/');
  });
});
