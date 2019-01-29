import React from 'react';
import { shallow } from 'enzyme';

import { CellComponent } from '../CellComponent';
import Header from '../Header';
import commonConstants from '../../constants';
import Loading from '../../common/Loading';

describe('CellComponent', () => {
  let classes;
  let cellDetails;
  let isCellDetaineesLoaded;
  let isAuthenticated;
  let cellName;
  let getCellDetails;
  let handleLogOut;
  let push;
  let refreshAuthenticationTimeout;
  let startAuthenticationTimeout;
  let stopAuthenticationTimeout;

  beforeEach(() => {
    classes = {
      body: 'body',
    };
    cellDetails = null;
    isAuthenticated = false;
    cellName = 'c1';
    getCellDetails = jest.fn();
    handleLogOut = jest.fn();
    push = jest.fn();
    refreshAuthenticationTimeout = jest.fn();
    startAuthenticationTimeout = jest.fn();
    stopAuthenticationTimeout = jest.fn();

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
    handleLogOut={handleLogOut}
    getCellDetails={getCellDetails}
    refreshAuthenticationTimeout={refreshAuthenticationTimeout}
    startAuthenticationTimeout={startAuthenticationTimeout}
    stopAuthenticationTimeout={stopAuthenticationTimeout}
  />);

  it('should render if cell details is not null', () => {
    cellDetails = {};

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Header)).toExist();
  });

  it('should render Loading component if cell details is null', () => {
    cellDetails = null;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Loading)).toExist();
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

  it(`should set unauthenticated timer to call handle logout in ${
    commonConstants.UNAUTHENTICATED_TIMEOUT_SECONDS
  } seconds when not authenticated and clear timeout after unmount`, () => {
    isAuthenticated = false;
    const wrapper = setup();

    wrapper.instance().componentDidMount();
    expect(setTimeout).toBeCalled();

    jest.advanceTimersByTime(commonConstants.UNAUTHENTICATED_TIMEOUT_SECONDS * 1000);
    expect(handleLogOut).toBeCalledWith('cells', cellName);

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

  it('should start authentication timeout if componentDidUpdate is called and page is authenticated', () => {
    isAuthenticated = true;
    const wrapper = setup();

    wrapper.instance().componentDidUpdate();
    expect(startAuthenticationTimeout).toBeCalled();
  });

  it('should not start authentication timeout if componentDidUpdate is called and page is not authenticated', () => {
    isAuthenticated = false;
    const wrapper = setup();

    wrapper.instance().componentDidUpdate();
    expect(startAuthenticationTimeout).not.toBeCalled();
  });

  it('should refresh authentication timeout on handleClick if page is authenticated', () => {
    isAuthenticated = true;
    const wrapper = setup();

    wrapper.find('#authenticatedCellComponentRoot').simulate('click');
    expect(refreshAuthenticationTimeout).toBeCalled();
  });

  it('should not refresh authentication timeout on handleClick if page is not authenticated', () => {
    isAuthenticated = false;
    const wrapper = setup();

    wrapper.find('#authenticatedCellComponentRoot').simulate('click');
    expect(refreshAuthenticationTimeout).not.toBeCalled();
  });
});
