import React from 'react';
import { shallow } from 'enzyme';

import { HeaderContentComponent } from '../HeaderContentComponent';

describe('HeaderContentComponent', () => {
  const setup = () => {
    const classes = {
      grid: 'grid',
      headerTitle: 'headerTitle',
      headerContent: 'headerContent',
    };
    const cellDetails = {
      name: 'c1',
      designation: 'Male Adult',
      occupancy: 2,
      occupancyCount: 2,
      cellStatus: 'Allocated',
    };
    return shallow(<HeaderContentComponent classes={classes} cellDetails={cellDetails} />);
  };

  it('should render', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
