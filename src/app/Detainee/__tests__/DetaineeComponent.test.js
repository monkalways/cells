import React from 'react';
import { shallow } from 'enzyme';

import { DetaineeComponent } from '../DetaineeComponent';

describe('DetaineeComponent', () => {
  let initialize;
  let push; // history
  let search; // location
  let id; // match
  let logOut;

  const first = 'cells';
  const second = 'B4';

  beforeEach(() => {
    initialize = jest.fn();
    push = jest.fn();
    search = `first=${first}&second=${second}`;
    id = '1';
    logOut = jest.fn();
  });

  const setup = () => {
    const classes = {
      body: 'body',
    };

    return shallow(<DetaineeComponent
      classes={classes}
      initialize={initialize}
      history={{ push }}
      location={{ search }}
      logOut={logOut}
      match={{
        params: {
          id,
        },
      }}
    />);
  };

  it('should render component', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call initialize when componentDidMount is called', () => {
    const wrapper = setup();

    wrapper.instance().componentDidMount();

    expect(initialize).toBeCalledWith(id);
  });

  it('should call logOut when handleLogout is called', () => {
    const wrapper = setup();

    wrapper.instance().handleLogout();

    expect(logOut).toBeCalledWith(first, second);
  });
});
