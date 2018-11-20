import React from 'react';
import { shallow } from 'enzyme';

import { CardFooterComponent } from '../CardFooterComponent';

describe('CardFooterComponent', () => {
  let onAcceptClick;
  let onRejectClick;
  let onNotApplicableClick;
  let medication;

  beforeEach(() => {
    onAcceptClick = jest.fn();
    onRejectClick = jest.fn();
    onNotApplicableClick = jest.fn();
    medication = null;
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
      medication={medication}
    />);
  };

  it('should not render any buttons if medication is null', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render accept, reject and not-applicable buttons if medication is not null', () => {
    medication = {
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

  it('should render accept button as selected if accept medication is selected', () => {
    medication = {
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

  it('should render reject button as selected if reject medication is selected', () => {
    medication = {
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
    medication = {
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
    medication = {
      accept: true,
      reject: false,
      notApplicable: false,
    };
    const wrapper = setup();

    wrapper.find('#acceptButton').simulate('click');
    expect(onAcceptClick).toBeCalled();
  });

  it('should handle reject click', () => {
    medication = {
      accept: false,
      reject: true,
      notApplicable: false,
    };
    const wrapper = setup();

    wrapper.find('#rejectButton').simulate('click');
    expect(onRejectClick).toBeCalled();
  });

  it('should handle not-applicable click', () => {
    medication = {
      accept: false,
      reject: false,
      notApplicable: true,
    };
    const wrapper = setup();

    wrapper.find('#notApplicableButton').simulate('click');
    expect(onNotApplicableClick).toBeCalled();
  });
});
