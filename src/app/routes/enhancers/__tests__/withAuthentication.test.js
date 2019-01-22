import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import types from '../../../common/duck/types'
import withAuthentication from '../withAuthentication';

describe('withAuthenticationComponent', () => {
  const TestComponent = () => <div>Hello Test</div>;
  const mockStore = configureStore();
  let initialState;
  let location;
  let store;

  const setup = () => {
    store = mockStore(initialState);
    const WrappedComponent = withAuthentication(TestComponent);
    return mount(<BrowserRouter>
      <WrappedComponent store={store} location={location} />
                 </BrowserRouter>);
  };

  it('should redirect to "/" if not authenticated and no cell name in state or querystring', () => {
    location = {
      search: null,
    };
    initialState = {
      cell: {
        details: null,
      },
      authentication: {
        authenticated: false,
      },
    };
    const wrapper = setup();
    expect(wrapper.find(Redirect)).toExist();
    expect(wrapper.find(Redirect)).toHaveProp('to', '/');
  });

  it('should redirect to cell home page if not authenticated but cell name is in state', () => {
    location = {
      search: null,
    };
    initialState = {
      cell: {
        details: {
          name: 'c1',
        },
      },
      authentication: {
        authenticated: false,
      },
    };
    const wrapper = setup();
    expect(wrapper.find(Redirect)).toExist();
    expect(wrapper.find(Redirect)).toHaveProp('to', '/cells/c1/home');
  });

  it('should redirect to cell home page if not authenticated but cell name is in query string', () => {
    location = {
      search: '?first=cells&second=c2',
    };
    initialState = {
      cell: {
        details: null,
      },
      authentication: {
        authenticated: false,
      },
    };
    const wrapper = setup();
    expect(wrapper.find(Redirect)).toExist();
    expect(wrapper.find(Redirect)).toHaveProp('to', '/cells/c2/home');
  });

  it('should not redirect if authenticated', () => {
    location = {
      search: '?first=cells&second=c2',
    };
    initialState = {
      cell: {
        details: {
          name: 'c1',
        },
      },
      authentication: {
        authenticated: true,
      },
    };
    const wrapper = setup();
    expect(wrapper.find(Redirect)).not.toExist();
    expect(wrapper.find(TestComponent)).toExist();
  });

  it('should call startAuthenticationTimeout if authenticated', () => {
    location = {
      search: '?first=cells&second=c2',
    };
    initialState = {
      cell: {
        details: {
          name: 'c1',
        },
      },
      authentication: {
        authenticated: true,
      },
    };

    setup();
    expect(store.getActions()[0].type).toEqual(types.START_AUTHENTICATION_TIMEOUT)
  });

  it('should call refreshAuthenticationTimeout when handleClick is clicked', () => {
    location = {
      search: '?first=cells&second=c2',
    };
    initialState = {
      cell: {
        details: {
          name: 'c1',
        },
      },
      authentication: {
        authenticated: true,
      },
    };

    const refreshAction = {"type": "app/common/REFRESH_AUTHENTICATION_TIMEOUT"}

    const wrapper = setup();
    wrapper.find('#refreshAuthenticationTimeoutHandler').simulate('click')    
    expect(store.getActions()).toContainEqual(refreshAction)
    expect(store.getActions()[0].type).toEqual(types.START_AUTHENTICATION_TIMEOUT)
  });
});
