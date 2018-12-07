import React from 'react';
import { shallow } from 'enzyme';

import { PersonalStatsComponent } from '../PersonalStatsComponent';

describe('CellDetaineeCardContentComponent', () => {
  let classes;
  let detainee;

  beforeEach(() => {
    classes = {
      text: 'text',
    };
    detainee = {
      detentionUnitName: 'DMU',
      dob: '2001-01-01',
      firstName: 'Bob',
      gender: 'Other',
      lastName: 'Burger',
      propertyBagNumber: '20',
    };
  });

  const setup = () => shallow(<PersonalStatsComponent classes={classes} detainee={detainee} />);

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
