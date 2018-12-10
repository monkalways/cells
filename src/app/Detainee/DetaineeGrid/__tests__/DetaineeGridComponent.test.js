import React from 'react';
import { shallow } from 'enzyme';

import { DetaineeGridComponent } from '../DetaineeGridComponent';

describe('DetaineeGridComponent', () => {
  let children;

  beforeEach(() => {
    children = <h1>Hello Test</h1>;
  });

  const setup = () => {
    const classes = {
      container: 'container',
    };

    return shallow(<DetaineeGridComponent classes={classes} children={children} />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
