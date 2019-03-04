import React from 'react';
import { shallow } from 'enzyme';
import HeaderMenuComponent from '../HeaderMenuComponent';

describe('HeaderMenuComponent', () => {
  let name;
  let handleMenuOpen;
  let handleMenuClose;
  let open;
  let menuAnchorElement;
  let push;

  beforeEach(() => {
    name = 'c1';
    handleMenuOpen = jest.fn();
    handleMenuClose = jest.fn();
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
      history={{ push }}
      cellDetails={{ name }}
    />);
  };

  it('should render', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  // it('should handleCellCheckClick if authenticated', () => {
  //   const wrapper = setup();

  //   wrapper.find('#cellCheckButton').simulate('click');
  //   expect(push).toBeCalledWith('/cells/c1/home/cell-check');
  // });

  // it('should handleMealClick if authenticated', () => {
  //   const wrapper = setup();

  //   wrapper.find('#mealButton').simulate('click');
  //   expect(push).toBeCalledWith('/cells/c1/home/meal');
  // });

  // it('should handleMedicationClick if authenticated', () => {
  //   const wrapper = setup();

  //   wrapper.find('#medicationButton').simulate('click');
  //   expect(push).toBeCalledWith('/cells/c1/home/medication');
  // });
});
