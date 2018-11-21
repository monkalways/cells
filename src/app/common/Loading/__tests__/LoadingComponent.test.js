import React from 'react';
import { shallow } from 'enzyme';

import { CircularProgress } from '@material-ui/core';
import { LoadingComponent } from '../LoadingComponent';

describe('LoadingComponent', () => {
  let classes;
  let size;

  beforeEach(() => {
    classes = {
      container: 'container',
      progress: 'progress',
    };
    size = null;
  });

  it('should render with default size 100', () => {
    const wrapper = shallow(<LoadingComponent classes={classes} />);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(CircularProgress)).toHaveProp('size', 100);
  });

  it('should render with provided size', () => {
    size = 50;
    const wrapper = shallow(<LoadingComponent classes={classes} size={size} />);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(CircularProgress)).toHaveProp('size', size);
  });
});
