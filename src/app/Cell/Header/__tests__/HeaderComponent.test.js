import React from 'react';
import { shallow } from 'enzyme';

import { HeaderComponent } from '../HeaderComponent';

describe('HeaderComponent', () => {
  let isAuthenticated;
  let onLogout;

  beforeEach(() => {
    isAuthenticated = false;
    onLogout = jest.fn();
  });

  const setup = () => {
    const classes = {
      root: 'root',
      appBar: 'appBar',
      menuButton: 'menuButton',
      logoutButton: 'logoutButton',
    };
    const cellDetails = {
      name: 'c1',
      designation: 'Male Adult',
      occupancy: 2,
      occupancyCount: 2,
      cellStatus: 'Allocated',
    };
    return shallow(<HeaderComponent
      classes={classes}
      cellDetails={cellDetails}
      onLogout={onLogout}
      isAuthenticated={isAuthenticated}
    />);
  };

  it('should render', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render logout button and handle logout if authenticated', () => {
    isAuthenticated = true;
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();

    const logoutButton = wrapper.find('#logoutButton');
    expect(logoutButton).toExist();

    logoutButton.simulate('click');
    expect(onLogout).toBeCalled();
  });
});
