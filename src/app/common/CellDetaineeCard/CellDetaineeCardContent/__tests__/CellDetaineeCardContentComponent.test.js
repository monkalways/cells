import React from 'react';
import { shallow } from 'enzyme';

import { CardMedia } from '@material-ui/core';
import { CellDetaineeCardContentComponent } from '../CellDetaineeCardContentComponent';

describe('CellDetaineeCardContentComponent', () => {
  let classes;
  let cellDetainee;
  let first;
  let second;
  let isAuthenticated;
  let push;

  beforeEach(() => {
    classes = {
      body: 'body',
    };
    cellDetainee = {
      id: '123',
      firstName: 'John',
      lastName: 'Smith',
    };
    first = 'cells';
    second = 'c1';
    isAuthenticated = false;
    push = jest.fn();
  });

  const setup = () => shallow(<CellDetaineeCardContentComponent
    classes={classes}
    cellDetainee={cellDetainee}
    first={first}
    second={second}
    isAuthenticated={isAuthenticated}
    history={{ push }}
  />);

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render "anonymous-detainee.PNG" image if not authenticated', () => {
    const wrapper = setup();

    expect(wrapper.find(CardMedia)).toHaveProp(
      'image',
      'detainee-anonymous.PNG',
    );
  });

  it('should render "detainee.PNG" image if authenticated and the detainee photo is not available', () => {
    isAuthenticated = true;
    const wrapper = setup();

    expect(wrapper.find(CardMedia)).toHaveProp('image', 'detainee.PNG');
  });

  it('should render detainee photo if authenticated and the detainee photo is available', () => {
    isAuthenticated = true;
    cellDetainee.intakePhotoResourceUri = 'john-smith-intake-photo.JPEG';
    const wrapper = setup();

    expect(wrapper.find(CardMedia)).toHaveProp(
      'image',
      'john-smith-intake-photo.JPEG',
    );
  });

  it('should handle click if authenticated', () => {
    isAuthenticated = true;
    const wrapper = setup();

    wrapper.find(CardMedia).simulate('click');

    expect(push).toBeCalledWith('/detainees/123?first=cells&second=c1');
  });

  it('should not handle click if not authenticated', () => {
    const wrapper = setup();

    wrapper.find(CardMedia).simulate('click');

    expect(push).not.toBeCalled();
  });
});
