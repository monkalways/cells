import React from 'react';
import { shallow } from 'enzyme';

import { HomeComponent } from '../HomeComponent';

describe('HomeComponent', () => {
  let classes;
  let push;
  let versions;
  let getVersions;

  beforeEach(() => {
    classes = {
      paper: 'paper',
      form: 'form',
      submit: 'submit',
    };
    push = jest.fn();
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

  const setup = () => shallow(<HomeComponent
    classes={classes}
    history={{ push }}
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
});
