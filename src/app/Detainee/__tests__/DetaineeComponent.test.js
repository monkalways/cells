import React from 'react';
import { shallow } from 'enzyme';

import { DetaineeComponent } from '../DetaineeComponent';

describe('DetaineeComponent', () => {
  let classes;
  let getAvailableActivityRooms;
  let getDetainee;
  let push; // history
  let search; // location
  let id; // match
  let logOut;

  const first = 'cells';
  const second = 'B4';

  beforeEach(() => {
    classes = {
      body: 'body',
    };
    getAvailableActivityRooms = jest.fn();
    getDetainee = jest.fn();
    push = jest.fn();
    search = `first=${first}&second=${second}`;
    id = '1';
    logOut = jest.fn();
  });

  const setup = () => shallow(<DetaineeComponent
    classes={classes}
    getAvailableActivityRooms={getAvailableActivityRooms}
    getDetainee={getDetainee}
    history={{ push }}
    location={{ search }}
    logOut={logOut}
    match={{
      params: {
        id,
      },
    }}
  />);

  it('should render component', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getDetainee and getAvailableActivityRooms when componentDidMount is called', () => {
    const wrapper = setup();

    wrapper.instance().componentDidMount();

    expect(getDetainee).toBeCalledWith(id);
    expect(getAvailableActivityRooms).toBeCalled();
  });

  it('should call logOut when handleLogout is called', () => {
    const wrapper = setup();

    wrapper.instance().handleLogout();

    expect(logOut).toBeCalledWith(first, second);
  });
});
