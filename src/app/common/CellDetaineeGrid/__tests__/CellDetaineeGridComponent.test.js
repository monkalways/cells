import React from 'react';
import { shallow } from 'enzyme';

import { CellDetaineeGridComponent } from '../CellDetaineeGridComponent';

describe('CellDetaineeGridComponent', () => {
  let classes;
  let children;

  beforeEach(() => {
    classes = {
      container: 'container',
    };
    children = <div>Hello Test</div>;
  });

  const setup = () => shallow(<CellDetaineeGridComponent classes={classes} children={children} />);

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
