import React from 'react';
import { shallow } from 'enzyme';

import { HeaderComponent } from '../HeaderComponent';
import HeaderContent from '../HeaderContent';

describe('HeaderComponent', () => {
  let detainee;
  let isDetaineeProfileLoaded;
  let onLogout;

  beforeEach(() => {
    detainee = {
      assignedCellName: 'C1',
    };
    isDetaineeProfileLoaded = true;
    onLogout = jest.fn();
  });

  const setup = () => {
    const classes = {
      root: 'root',
      appBar: 'appBar',
      menuButton: 'menuButton',
      logoutButton: 'logoutButton',
      logoutIcon: 'logoutIcon',
    };

    return shallow(<HeaderComponent
      classes={classes}
      detainee={detainee}
      isDetaineeProfileLoaded={isDetaineeProfileLoaded}
      onLogout={onLogout}
    />);
  };

  it('should not render HeaderContent if detainee profile is not loaded', () => {
    isDetaineeProfileLoaded = false;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(HeaderContent)).not.toExist();
  });

  it('should render HeaderContent if detainee profile is loaded', () => {
    isDetaineeProfileLoaded = true;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(HeaderContent)).toExist();
  });
});
