import selectors from '../selectors';

describe('Authentication selectors', () => {
  it('should select isAuthenticatedState', () => {
    const state = {
      authentication: {
        authenticated: false,
      },
    };
    const result = selectors.isAuthenticatedState(state);
    expect(result).toBe(state.authentication.authenticated);
  });

  it('should select isSignInDialogOpenState', () => {
    const state = {
      authentication: {
        signInDialogOpen: false,
      },
    };
    const result = selectors.isSignInDialogOpenState(state);
    expect(result).toBe(state.authentication.signInDialogOpen);
  });

  it('should select isAuthenticatingState', () => {
    const state = {
      authentication: {
        authenticating: false,
      },
    };
    const result = selectors.isAuthenticatingState(state);
    expect(result).toBe(state.authentication.authenticating);
  });

  it('should select isAuthenticationFailedState', () => {
    const state = {
      authentication: {
        authenticationFailed: false,
      },
    };
    const result = selectors.isAuthenticationFailedState(state);
    expect(result).toBe(state.authentication.authenticationFailed);
  });

  it('should select userName', () => {
    const state = {
      authentication: {
        userName: 'test',
      },
    };
    const result = selectors.getUserNameState(state);
    expect(result).toBe(state.authentication.userName);
  });

  it('should select errorMessage', () => {
    const state = {
      authentication: {
        errorMessage: 'Scan Card Problem',
      },
    };
    const result = selectors.getErrorMessageState(state);
    expect(result).toBe(state.authentication.errorMessage);
  });
});
