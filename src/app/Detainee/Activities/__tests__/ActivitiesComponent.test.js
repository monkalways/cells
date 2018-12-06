import React from 'react';
import { shallow } from 'enzyme';

import { ActivitiesComponent } from '../ActivitiesComponent';

describe('ActivitiesComponent', () => {
  const setup = () => {
    const classes = {
      avatar: 'avatar',
      bottomLeft: 'bottomLeft',
      bottomCenter: 'bottomCenter',
      bottomRight: 'bottomRight',
      grid: 'grid',
      gridItem: 'gridItem',
      text: 'test',
      topLeft: 'topLeft',
      topCenter: 'topCenter',
      topRight: 'topRight',
    };
    return shallow(<ActivitiesComponent
      classes={classes}
      detainee={{
        medicalCount: 0,
        telephoneAcceptedCount: 1,
        telephoneDeclinedCount: 2,
        fingerPrintCount: 3,
        breathTestCount: 4,
        interviewCount: 5,
        bailHearingCount: 6,
      }}
    />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
