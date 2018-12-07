import React from 'react';
import { shallow } from 'enzyme';

import { LocationComponent } from '../LocationComponent';

describe('LocationComponent', () => {
  let detainee;

  beforeEach(() => {
    detainee = {
      location: 'location',
    };
  });

  const setup = () => {
    const classes = {
      div: 'div',
      text: 'text',
    };
    return shallow(<LocationComponent classes={classes} detainee={detainee} />);
  };
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
