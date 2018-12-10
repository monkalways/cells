import React from 'react';
import { shallow } from 'enzyme';

import { FooterComponent } from '../FooterComponent';

describe('FooterComponent', () => {
  let goBack;

  beforeEach(() => {
    goBack = jest.fn();
  });

  const setup = () => {
    const classes = {
      root: 'root',
      appBar: 'appBar',
      icon: 'icon',
      navigation: 'navigation',
    };

    return shallow(<FooterComponent classes={classes} history={{ goBack }} />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.goBack when back button is clicked ', () => {
    const wrapper = setup();
    wrapper.find('#backButton').simulate('click');
    expect(goBack).toBeCalled();
  });
});
