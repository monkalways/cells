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
        mealAcceptedCount: 0,
        mealDeclinedCount: 1,
        medicationAcceptedCount: 2,
        medicationRefusedCount: 3,
        verbalCellCheckCount: 4,
        visualCellCheckCount: 5,
      }}
    />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
