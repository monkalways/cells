import React from 'react';
import { shallow } from 'enzyme';

import { PersonalStatsComponent } from '../PersonalStatsComponent';

describe('CellDetaineeCardContentComponent', () => {
  let detainee;

  beforeEach(() => {
    detainee = {
      detentionUnitName: 'DMU',
      dob: '2001-01-01',
      firstName: 'Bob',
      gender: 'Other',
      lastName: 'Burger',
      propertyBagNumber: '20',
    };
  });

  const setup = () => {
    const classes = {
      text: 'text',
    };

    return shallow(<PersonalStatsComponent classes={classes} detainee={detainee} />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
