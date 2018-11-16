import React from 'react';
import { shallow } from 'enzyme';

import { ActivityRoomDetaineeCardComponent } from '../ActivityRoomDetaineeCardComponent';

describe('ActivityRoomDetaineeCardComponent', () => {
  it('should render', () => {
    const classes = { card: {} };
    const detainee = {};
    const wrapper = shallow(<ActivityRoomDetaineeCardComponent
      classes={classes}
      detainee={detainee}
      usage="phone"
      isAuthenticated={false}
      isCheckingIn={false}
      onCheckIn={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
