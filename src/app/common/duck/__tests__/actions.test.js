import types from '../types';
import actions from '../actions';

describe('Common actions', () => {
  it('should create getVersionsSuccess action object', () => {
    const payload = [];
    const result = actions.getVersionsSuccess(payload);
    expect(result).toEqual({
      type: types.GET_VERSIONS_SUCCESS,
      payload,
    });
  });

  it('should create refreshAuthenticationTimeout action object', () => {
    const result = actions.refreshAuthenticationTimeout();
    expect(result).toEqual({
      type: types.REFRESH_AUTHENTICATION_TIMEOUT,
    });
  });

  it('should create startAuthenticationTimeout action object', () => {
    const result = actions.startAuthenticationTimeout();
    expect(result).toEqual({
      type: types.START_AUTHENTICATION_TIMEOUT,
    });
  });

  it('should create stopAuthenticationTimeout action object', () => {
    const result = actions.stopAuthenticationTimeout();
    expect(result).toEqual({
      type: types.STOP_AUTHENTICATION_TIMEOUT,
    });
  });
});
