import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import types from '../../../common/duck/types';
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

  it('should redirect to "/" if not authenticated', () => {
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

    const refreshAction = { type: 'app/common/REFRESH_AUTHENTICATION_TIMEOUT' };

    const wrapper = setup();
    wrapper.find('#authenticatedRoot').simulate('click');
    expect(store.getActions()).toContainEqual(refreshAction);
  });
});
