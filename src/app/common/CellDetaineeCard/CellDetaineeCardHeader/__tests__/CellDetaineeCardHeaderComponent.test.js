import React from 'react';
import { shallow } from 'enzyme';

import { CellDetaineeCardHeaderComponent } from '../CellDetaineeCardHeaderComponent';

describe('CellDetaineeCardHeaderComponent', () => {
  let classes;
  let cellDetainee;

  beforeEach(() => {
    classes = {
      header: 'header',
      heading: 'heading',
      subtitle: 'subtitle',
      avatar: 'avatar',
    };
    cellDetainee = {
      firstName: 'John',
      lastName: 'Smith',
      division: ['EPS', 'RCMP'],
    };
  });

  const setup = () => shallow(<CellDetaineeCardHeaderComponent
    classes={classes}
    cellDetainee={cellDetainee}
  />);

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
