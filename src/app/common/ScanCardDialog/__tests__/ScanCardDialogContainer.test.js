import {
  mapStateToProps,
  mapDispatchToProps,
} from '../ScanCardDialogContainer';

describe('ScanCardDialogContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const isSignInDialogOpen = false;
    const isAuthenticating = false;
    const isAuthenticationFailed = false;

    const result = mapStateToProps(
      state,
      isSignInDialogOpen,
      isAuthenticating,
      isAuthenticationFailed,
    );

    expect(result).toEqual({
      isSignInDialogOpen,
      isAuthenticating,
      isAuthenticationFailed,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should authenticate', () => {
      const { authenticate } = mapDispatchToProps(dispatch);
      const cardId = '123';
      const authenticateMock = jest.fn();

      authenticate(cardId, authenticateMock);

      expect(dispatch).toBeCalled();
      expect(authenticateMock).toBeCalledWith(cardId);
    });

    it('should onClose', () => {
      const { onClose } = mapDispatchToProps(dispatch);

      onClose();

      expect(dispatch).toBeCalled();
    });

    it('should handleSignIn', () => {
      const { handleSignIn } = mapDispatchToProps(dispatch);
      const startSignInMock = jest.fn();

      handleSignIn(startSignInMock);

      expect(dispatch).toBeCalled();
      expect(startSignInMock).toBeCalled();
    });
  });
});
