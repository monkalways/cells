import React from 'react';
import { shallow } from 'enzyme';

import { IconButton } from '@material-ui/core';
import { HeaderComponent } from '../HeaderComponent';

describe('HeaderComponent', () => {
  let usage;
  let onLogout;
  let isAuthenticated;

  beforeEach(() => {
    usage = 'phone';
    onLogout = jest.fn();
    isAuthenticated = false;
  });

  const setup = () => {
    const classes = {
      root: {},
      appBar: {},
      menuButton: {},
      logoutButton: {},
    };
    return shallow(<HeaderComponent
      classes={classes}
      usage={usage}
      onLogout={onLogout}
      isAuthenticated={isAuthenticated}
    />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render logout button if authenticated', () => {
    isAuthenticated = true;
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(IconButton)).toExist();
  });
});
