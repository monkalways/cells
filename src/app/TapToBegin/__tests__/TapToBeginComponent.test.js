import React from 'react';
import { shallow } from 'enzyme';

import { TapToBeginComponent } from '../TapToBeginComponent';

describe('TapToBeginComponent', () => {
  let classes;
  let push;
  let first;
  let second;
  let versions;
  let getVersions;

  beforeEach(() => {
    classes = {
      body: 'body',
    };
    push = jest.fn();
    first = 'cells';
    second = 'c1';
    versions = [
      {
        name: 'Cell App',
        version: '1.0.0',
      },
      {
        name: 'Detainee Management Service',
        version: '1.0.0',
      },
      {
        name: 'EPROS Service',
        version: '1.0.0',
      },
    ];
    getVersions = jest.fn();
  });

  const setup = () => shallow(<TapToBeginComponent
    classes={classes}
    history={{ push }}
    match={{
      params: {
        first,
        second,
      },
    }}
    versions={versions}
    getVersions={getVersions}
  />);

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call get versions when componentDidMount is called', () => {
    const wrapper = setup();
    wrapper.instance().componentDidMount();

    expect(getVersions).toBeCalled();
  });

  it('should handle click', () => {
    const wrapper = setup();
    wrapper.find('#mainGrid').simulate('click');

    expect(push).toBeCalledWith(`/${first}/${second}/home`);
  });
});
