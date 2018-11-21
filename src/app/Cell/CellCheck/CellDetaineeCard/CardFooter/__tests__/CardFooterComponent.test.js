import React from 'react';
import { shallow } from 'enzyme';

import { CardFooterComponent } from '../CardFooterComponent';

describe('CardFooterComponent', () => {
  let onVisualClick;
  let onVerbalClick;
  let cellCheck;

  beforeEach(() => {
    onVisualClick = jest.fn();
    onVerbalClick = jest.fn();
    cellCheck = null;
  });

  const setup = () => {
    const classes = {
      actions: 'actions',
      leftButtonSelected: 'leftButtonSelected',
      leftButton: 'leftButton',
      rightButtonSelected: 'rightButtonSelected',
      rightButton: 'rightButton',
      img: 'img',
    };
    return shallow(<CardFooterComponent
      classes={classes}
      onVisualClick={onVisualClick}
      onVerbalClick={onVerbalClick}
      cellCheck={cellCheck}
    />);
  };

  it('should not render any buttons if cell check is null', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render visual and verbal buttons if cell check is not null', () => {
    cellCheck = {
      visual: true,
      verbal: false,
    };
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('#visualCheckButton')).toExist();
    expect(wrapper.find('#verbalCheckButton')).toExist();
  });

  it('should render visual button as selected if visual check is selected', () => {
    cellCheck = {
      visual: true,
      verbal: false,
    };
    const wrapper = setup();

    expect(wrapper.find('#visualCheckButton')).toHaveProp(
      'className',
      'leftButtonSelected',
    );
    expect(wrapper.find('#verbalCheckButton')).toHaveProp(
      'className',
      'rightButton',
    );
  });

  it('should render verbal button as selected if verbal check is selected', () => {
    cellCheck = {
      visual: false,
      verbal: true,
    };
    const wrapper = setup();

    expect(wrapper.find('#visualCheckButton')).toHaveProp(
      'className',
      'leftButton',
    );
    expect(wrapper.find('#verbalCheckButton')).toHaveProp(
      'className',
      'rightButtonSelected',
    );
  });

  it('should handle visual check', () => {
    cellCheck = {
      visual: true,
      verbal: false,
    };
    const wrapper = setup();

    wrapper.find('#visualCheckButton').simulate('click');
    expect(onVisualClick).toBeCalled();
  });

  it('should handle verbal check', () => {
    cellCheck = {
      visual: false,
      verbal: true,
    };
    const wrapper = setup();

    wrapper.find('#verbalCheckButton').simulate('click');
    expect(onVerbalClick).toBeCalled();
  });
});
