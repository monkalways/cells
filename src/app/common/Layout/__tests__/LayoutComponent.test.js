import React from 'react';
import { shallow } from 'enzyme';

import { LayoutComponent } from '../LayoutComponent';

describe('Layout', () => {
  let classes;
  let children;

  beforeEach(() => {
    classes = {
      container: 'container',
    };
    children = <h1>Hello Test</h1>;
  });

  const setup = () => shallow(<LayoutComponent classes={classes} children={children} />);

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
