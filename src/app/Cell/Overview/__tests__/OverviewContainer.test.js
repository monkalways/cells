import { mapStateToProps, mapDispatchToProps } from '../OverviewContainer';

describe('OverviewContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const cellDetainees = [];
    const cellName = 'c1';
    const isAnyDetaineeUnderMedication = false;
    const isAuthenticated = false;
    const isCellDetaineesLoaded = false;

    const result = mapStateToProps(
      state,
      cellDetainees,
      cellName,
      isAnyDetaineeUnderMedication,
      isAuthenticated,
      isCellDetaineesLoaded,
    );

    expect(result).toEqual({
      cellDetainees,
      cellName,
      isAnyDetaineeUnderMedication,
      isAuthenticated,
      isCellDetaineesLoaded,
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
      const isAuthenticated = false;
      const getCellDetaineesMock = jest.fn();

      getCellDetainees(name, isAuthenticated, getCellDetaineesMock);

      expect(dispatch).toBeCalled();
      expect(getCellDetaineesMock).toBeCalledWith(name, isAuthenticated);
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
