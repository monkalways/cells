import React from 'react';
import { shallow } from 'enzyme';

import { CellDetaineeCardComponent } from '../CellDetaineeCardComponent';

describe('CellDetaineeCardComponent', () => {
  const setup = () => {
    const classes = {
      card: 'card',
    };
    return shallow(<CellDetaineeCardComponent
      classes={classes}
      cellDetainee={{
        firstName: 'John',
        lastName: 'Smith',
      }}
      cellName="c1"
      isAuthenticated={false}
    />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
