import React from 'react';
import { shallow } from 'enzyme';

import NotificationComponent from '../NotificationComponent';

describe('NotificationComponent', () => {
  it('should render', () => {
    const wrapper = shallow(<NotificationComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
