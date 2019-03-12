import React from 'react';
import { shallow } from 'enzyme';
import Fab from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { HeaderMenuComponent } from '../HeaderMenuComponent';

describe('HeaderMenuComponent', () => {
  let name;
  let handleMenuOpen;
  let handleMenuClose;
  let handleModalOpen;
  let open;
  let menuAnchorElement;
  let push;

  beforeEach(() => {
    name = 'c1';
    handleMenuOpen = jest.fn();
    handleMenuClose = jest.fn();
    handleModalOpen = jest.fn();
    open = false;
    menuAnchorElement = {};
    push = jest.fn();
  });

  const setup = () => {
    const classes = {};
    return shallow(<HeaderMenuComponent
      classes={classes}
      menuAnchorElement={menuAnchorElement}
      open={open}
      handleMenuOpen={handleMenuOpen}
      handleMenuClose={handleMenuClose}
      handleModalOpen={handleModalOpen}
      history={{ push }}
      cellDetails={{ name }}
    />);
  };

  it('should render', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handleCellHistoryReportClick', () => {
    const wrapper = setup();

    wrapper.find(MenuItem).simulate('click');
    expect(handleMenuClose).toBeCalled();
    expect(handleModalOpen).toBeCalled();
  });

  it('should handleMenuOpen', () => {
    const wrapper = setup();

    wrapper.find(Fab).simulate('click');
    expect(handleMenuOpen).toBeCalled();
  });
});
