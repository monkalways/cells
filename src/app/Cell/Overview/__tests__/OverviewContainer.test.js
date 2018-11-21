import { mapStateToProps, mapDispatchToProps } from '../OverviewContainer';

describe('OverviewContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const isAuthenticated = false;
    const cellDetainees = [];
    const cellName = 'c1';
    const isCellDetaineesLoaded = false;

    const result = mapStateToProps(
      state,
      cellDetainees,
      cellName,
      isCellDetaineesLoaded,
      isAuthenticated,
    );

    expect(result).toEqual({
      cellDetainees,
      cellName,
      isCellDetaineesLoaded,
      isAuthenticated,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should getCellDetainees', () => {
      const { getCellDetainees } = mapDispatchToProps(dispatch);
      const name = 'c1';
      const getCellDetaineesMock = jest.fn();

      getCellDetainees(name, getCellDetaineesMock);

      expect(dispatch).toBeCalled();
      expect(getCellDetaineesMock).toBeCalledWith(name);
    });

    it('should handleSignIn', () => {
      const { handleSignIn } = mapDispatchToProps(dispatch);
      const handleSignInMock = jest.fn();

      handleSignIn(handleSignInMock);

      expect(dispatch).toBeCalled();
      expect(handleSignInMock).toBeCalled();
    });
  });
});
