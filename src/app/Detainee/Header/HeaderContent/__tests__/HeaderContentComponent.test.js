import React from 'react';
import { shallow } from 'enzyme';

import { HeaderContentComponent } from '../HeaderContentComponent';

describe('HeaderContentComponent', () => {
  let detainee;

  beforeEach(() => {
    detainee = {
      assignedCellName: 'B4',
    };
  });

  const setup = () => {
    const classes = {
      div: 'div',
      text: 'text',
    };
    return shallow(<HeaderContentComponent classes={classes} detainee={detainee} />);
  };
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
