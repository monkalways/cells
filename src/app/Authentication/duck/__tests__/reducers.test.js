import types from '../types';
import authenticationReducer from '../reducers';

describe('authenticationReducer', () => {
  it('should setup default state', () => {
    const result = authenticationReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual({
      authenticated: false,
      signInDialogOpen: false,
      authenticating: false,
      authenticationFailed: false,
      cardId: null,
      userName: null,
    });
  });

  it('should update state by START_SIGN_IN', () => {
    const result = authenticationReducer(undefined, {
      type: types.START_SIGN_IN,
    });
    expect(result.signInDialogOpen).toBe(true);
  });

  it('should update state by START_AUTHENTICATE', () => {
    const result = authenticationReducer(undefined, {
      type: types.START_AUTHENTICATE,
      cardId: '123',
    });
    expect(result.cardId).toEqual('123');
    expect(result.authenticating).toBe(true);
  });

  it('should update state by AUTHENTICATE_SUCCESS', () => {
    const result = authenticationReducer(undefined, {
      type: types.AUTHENTICATE_SUCCESS,
      userName: 'john',
    });
    expect(result.authenticating).toBe(false);
    expect(result.authenticated).toBe(true);
    expect(result.signInDialogOpen).toBe(false);
    expect(result.userName).toEqual('john');
  });

  it('should update state by AUTHENTICATE_FAIL', () => {
    const result = authenticationReducer(undefined, {
      type: types.AUTHENTICATE_FAIL,
    });
    expect(result.authenticating).toBe(false);
    expect(result.authenticated).toBe(false);
  });

  it('should update state by CANCEL_AUTHENTICATE', () => {
    const result = authenticationReducer(undefined, {
      type: types.CANCEL_AUTHENTICATE,
    });
    expect(result).toEqual({
      authenticated: false,
      signInDialogOpen: false,
      authenticating: false,
      authenticationFailed: false,
      cardId: null,
      userName: null,
    });
  });

  it('should update state by LOG_OUT', () => {
    const result = authenticationReducer(undefined, {
      type: types.LOG_OUT,
    });
    expect(result).toEqual({
      authenticated: false,
      signInDialogOpen: false,
      authenticating: false,
      authenticationFailed: false,
      cardId: null,
      userName: null,
    });
  });
});
