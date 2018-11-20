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
      cellDetainee={{}}
      cellName="c1"
      isAuthenticated={false}
      cellCheck={{}}
      onVisualClick={jest.fn()}
      onVerbalClick={jest.fn()}
    />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
