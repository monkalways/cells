import React from 'react';
import { shallow } from 'enzyme';

import { CardFooterComponent } from '../CardFooterComponent';

describe('CardFooterComponent', () => {
  let onAcceptClick;
  let onRejectClick;
  let onNotApplicableClick;
  let meal;

  beforeEach(() => {
    onAcceptClick = jest.fn();
    onRejectClick = jest.fn();
    onNotApplicableClick = jest.fn();
    meal = null;
  });

  const setup = () => {
    const classes = {
      actions: 'actions',
      buttonSelected: 'buttonSelected',
      button: 'button',
      img: 'img',
    };
    return shallow(<CardFooterComponent
      classes={classes}
      onAcceptClick={onAcceptClick}
      onRejectClick={onRejectClick}
      onNotApplicableClick={onNotApplicableClick}
      meal={meal}
    />);
  };

  it('should not render any buttons if meal is null', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render accept, reject and not-applicable buttons if meal is not null', () => {
    meal = {
      accept: true,
      reject: false,
      notApplicable: false,
    };
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('#acceptButton')).toExist();
    expect(wrapper.find('#rejectButton')).toExist();
    expect(wrapper.find('#notApplicableButton')).toExist();
  });

  it('should render accept button as selected if accept meal is selected', () => {
    meal = {
      accept: true,
      reject: false,
      notApplicable: false,
    };
    const wrapper = setup();

    expect(wrapper.find('#acceptButton')).toHaveProp(
      'className',
      'buttonSelected',
    );
    expect(wrapper.find('#rejectButton')).toHaveProp('className', 'button');
    expect(wrapper.find('#notApplicableButton')).toHaveProp(
      'className',
      'button',
    );
  });

  it('should render reject button as selected if reject meal is selected', () => {
    meal = {
      accept: false,
      reject: true,
      notApplicable: false,
    };
    const wrapper = setup();

    expect(wrapper.find('#rejectButton')).toHaveProp(
      'className',
      'buttonSelected',
    );
    expect(wrapper.find('#acceptButton')).toHaveProp('className', 'button');
    expect(wrapper.find('#notApplicableButton')).toHaveProp(
      'className',
      'button',
    );
  });

  it('should render not-applicable button as selected if not-applicable is selected', () => {
    meal = {
      accept: false,
      reject: false,
      notApplicable: true,
    };
    const wrapper = setup();

    expect(wrapper.find('#notApplicableButton')).toHaveProp(
      'className',
      'buttonSelected',
    );
    expect(wrapper.find('#acceptButton')).toHaveProp('className', 'button');
    expect(wrapper.find('#rejectButton')).toHaveProp('className', 'button');
  });

  it('should handle accept click', () => {
    meal = {
      accept: true,
      reject: false,
      notApplicable: false,
    };
    const wrapper = setup();

    wrapper.find('#acceptButton').simulate('click');
    expect(onAcceptClick).toBeCalled();
  });

  it('should handle reject click', () => {
    meal = {
      accept: false,
      reject: true,
      notApplicable: false,
    };
    const wrapper = setup();

    wrapper.find('#rejectButton').simulate('click');
    expect(onRejectClick).toBeCalled();
  });

  it('should handle not-applicable click', () => {
    meal = {
      accept: false,
      reject: false,
      notApplicable: true,
    };
    const wrapper = setup();

    wrapper.find('#notApplicableButton').simulate('click');
    expect(onNotApplicableClick).toBeCalled();
  });
});
