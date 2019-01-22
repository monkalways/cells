import { mapStateToProps, mapDispatchToProps } from '../CellContainer';

describe('CellContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const isAuthenticated = false;
    const cellDetails = {};

    const result = mapStateToProps(state, cellDetails, isAuthenticated);

    expect(result).toEqual({
      cellDetails,
      isAuthenticated,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should getCellDetails', () => {
      const { getCellDetails } = mapDispatchToProps(dispatch);
      const name = 'c1';
      const getCellDetailsMock = jest.fn();

      getCellDetails(name, getCellDetailsMock);

      expect(dispatch).toBeCalled();
      expect(getCellDetailsMock).toBeCalledWith(name);
    });

    it('should logOut', () => {
      const { logOut } = mapDispatchToProps(dispatch);
      const logOutMock = jest.fn();
      const first = 'cells';
      const second = 'c1';

      logOut(first, second, logOutMock);

      expect(dispatch).toBeCalled();
      expect(logOutMock).toBeCalled();
    });

    it('should refreshAuthenticationTimeout', () => {
      const { refreshAuthenticationTimeout } = mapDispatchToProps(dispatch);
      const refreshAuthenticationTimeoutMock = jest.fn();

      refreshAuthenticationTimeout(refreshAuthenticationTimeoutMock);

      expect(dispatch).toBeCalled();
      expect(refreshAuthenticationTimeoutMock).toBeCalled();
    });

    it('should startAuthenticationTimeout', () => {
      const { startAuthenticationTimeout } = mapDispatchToProps(dispatch);
      const startAuthenticationTimeoutMock = jest.fn();
      const logoutMock = jest.fn();

      startAuthenticationTimeout(logoutMock, startAuthenticationTimeoutMock);

      expect(dispatch).toBeCalled();
      expect(startAuthenticationTimeoutMock).toBeCalledWith(logoutMock);
    });

    it('should startAuthenticationTimeout', () => {
      const { stopAuthenticationTimeout } = mapDispatchToProps(dispatch);
      const stopAuthenticationTimeoutMock = jest.fn();

      stopAuthenticationTimeout(stopAuthenticationTimeoutMock);

      expect(dispatch).toBeCalled();
      expect(stopAuthenticationTimeoutMock).toBeCalled();
    });
  });
});
