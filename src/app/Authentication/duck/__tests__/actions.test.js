import types from '../types';
import actions from '../actions';

describe('Authentication actions', () => {
  it('should create startSignIn action object', () => {
    const result = actions.startSignIn();
    expect(result).toEqual({
      type: types.START_SIGN_IN,
    });
  });

  it('should create startAuthenticate action object', () => {
    const cardId = '123';
    const result = actions.startAuthenticate(cardId);
    expect(result).toEqual({
      type: types.START_AUTHENTICATE,
      cardId,
    });
  });

  it('should create authenticateSuccess action object', () => {
    const userName = 'john';
    const result = actions.authenticateSuccess(userName);
    expect(result).toEqual({
      type: types.AUTHENTICATE_SUCCESS,
      userName,
    });
  });

  it('should create authenticateFail action object', () => {
    const result = actions.authenticateFail();
    expect(result).toEqual({
      type: types.AUTHENTICATE_FAIL,
    });
  });

  it('should create cancelAuthenticate action object', () => {
    const result = actions.cancelAuthenticate();
    expect(result).toEqual({
      type: types.CANCEL_AUTHENTICATE,
    });
  });

  it('should create logOut action object', () => {
    const result = actions.logOut();
    expect(result).toEqual({
      type: types.LOG_OUT,
    });
  });
});
