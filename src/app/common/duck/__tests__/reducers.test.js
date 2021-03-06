import types from '../types';
import { authenticationTimeoutReducer, versionsReducer } from '../reducers';

describe('Common reducers', () => {
  describe('authenticationTimeoutReducer', () => {
    it('should set up default state', () => {
      const defaultState = {
        logout: null,
        timeout: null,
      };
      const result = authenticationTimeoutReducer(undefined, {
        types: '@@INIT',
      });
      expect(result).toEqual(defaultState);
    });
  });

  it('should refresh authentication timeout if timeout is not null', () => {
    const previousState = {
      timeout: setTimeout(
        () => {},
        process.env.REACT_APP_AUTHENTICATION_TIMEOUT_SEC * 1000,
      ),
    };

    const result = authenticationTimeoutReducer(previousState, {
      type: types.REFRESH_AUTHENTICATION_TIMEOUT,
    });
    expect(result.timeout).not.toBeNull();
  });

  it('should not refresh authentication timeout if timeout is null', () => {
    const previousState = {
      logout: null,
      timeout: null,
    };

    const result = authenticationTimeoutReducer(previousState, {
      type: types.REFRESH_AUTHENTICATION_TIMEOUT,
    });
    expect(result.timeout).toBeNull();
  });

  it('should start authentication timeout', () => {
    const result = authenticationTimeoutReducer(undefined, {
      type: types.START_AUTHENTICATION_TIMEOUT,
    });
    expect(result.timeout).not.toBeNull();
  });

  it('should stop authentication timeout', () => {
    const result = authenticationTimeoutReducer(undefined, {
      type: types.STOP_AUTHENTICATION_TIMEOUT,
    });
    expect(result.timeout).toBeNull();
  });

  describe('versionsReducer', () => {
    it('should set up default state', () => {
      const defaultState = {
        data: [],
      };
      const result = versionsReducer(undefined, { type: '@@INIT' });
      expect(result).toEqual(defaultState);
    });

    it('should update state by GET_VERSIONS_SUCCESS', () => {
      const payload = [
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
      const result = versionsReducer(undefined, {
        type: types.GET_VERSIONS_SUCCESS,
        payload,
      });
      expect(result.data).toEqual(payload);
    });
  });
});
