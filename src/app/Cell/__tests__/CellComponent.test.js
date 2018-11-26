import React from 'react';
import { shallow } from 'enzyme';

import { CellComponent } from '../CellComponent';
import Header from '../Header';
import commonConstants from '../../constants';

describe('CellComponent', () => {
  let classes;
  let cellDetails;
  let isCellDetaineesLoaded;
  let isAuthenticated;
  let cellName;
  let getCellDetails;
  let logOut;
  let push;

  beforeEach(() => {
    classes = {
      body: 'body',
    };
    cellDetails = null;
    isAuthenticated = false;
    cellName = 'c1';
    getCellDetails = jest.fn();
    logOut = jest.fn();
    push = jest.fn();

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const setup = () => shallow(<CellComponent
    classes={classes}
    history={{ push }}
    match={{
      params: {
        name: cellName,
      },
    }}
    cellDetails={cellDetails}
    isCellDetaineesLoaded={isCellDetaineesLoaded}
    isAuthenticated={isAuthenticated}
    logOut={logOut}
    getCellDetails={getCellDetails}
  />);

  it('should render if cell details is not null', () => {
    cellDetails = {};

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Header)).toExist();
  });

  it('should get cell details when componentDidMount is called', () => {
    const wrapper = setup();

    wrapper.instance().componentDidMount();

    expect(getCellDetails).toBeCalledWith(cellName);
  });

  it('should not set unauthenticated timer when authenticated', () => {
    isAuthenticated = true;
    const wrapper = setup();

    wrapper.instance().componentDidMount();

    expect(setTimeout).not.toBeCalled();
  });

  it(`should set unauthenticated timer to call logout in ${
    commonConstants.UNAUTHENTICATED_TIMEOUT_SECONDS
  } seconds when not authenticated and clear timeout after unmount`, () => {
    isAuthenticated = false;
    const wrapper = setup();

    wrapper.instance().componentDidMount();
    expect(setTimeout).toBeCalled();

    jest.advanceTimersByTime(commonConstants.UNAUTHENTICATED_TIMEOUT_SECONDS * 1000);
    expect(logOut).toBeCalledWith('cells', cellName);

    wrapper.instance().componentWillUnmount();
    expect(clearTimeout).toBeCalled();
  });

  it('should cancel unauthenticated timer after authenticated is set to true after initialization', () => {
    isAuthenticated = false;
    const wrapper = setup();

    wrapper.instance().componentDidMount();
    expect(setTimeout).toBeCalled();

    wrapper.setProps({ isAuthenticated: true });
    expect(clearTimeout).toBeCalled();
  });
});
