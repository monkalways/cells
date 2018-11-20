import { mapStateToProps, mapDispatchToProps } from '../CellCheckContainer';

describe('CellCheckContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const isAuthenticated = false;
    const userName = 'test';
    const cellDetainees = [];
    const cellName = 'c1';
    const isCellDetaineesLoaded = false;
    const cellCheck = {};
    const isSavingCellCheck = false;

    const result = mapStateToProps(
      state,
      isAuthenticated,
      userName,
      cellDetainees,
      cellName,
      isCellDetaineesLoaded,
      cellCheck,
      isSavingCellCheck,
    );

    expect(result).toEqual({
      isAuthenticated,
      userName,
      cellDetainees,
      cellName,
      isCellDetaineesLoaded,
      cellCheck,
      isSavingCellCheck,
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

    it('should visualCheck', () => {
      const { visualCheck } = mapDispatchToProps(dispatch);
      const detainee = {};
      const visualCheckMock = jest.fn();

      visualCheck(detainee, visualCheckMock);

      expect(dispatch).toBeCalled();
      expect(visualCheckMock).toBeCalledWith(detainee);
    });

    it('should verbalCheck', () => {
      const { verbalCheck } = mapDispatchToProps(dispatch);
      const detainee = {};
      const verbalCheckMock = jest.fn();

      verbalCheck(detainee, verbalCheckMock);

      expect(dispatch).toBeCalled();
      expect(verbalCheckMock).toBeCalledWith(detainee);
    });

    it('should visualCheckAll', () => {
      const { visualCheckAll } = mapDispatchToProps(dispatch);
      const detainees = [
        {
          id: '123',
        },
        {
          id: '456',
        },
      ];
      const visualCheckMock = jest.fn();

      visualCheckAll(detainees, visualCheckMock);

      expect(dispatch).toBeCalled();
      expect(visualCheckMock).toBeCalledTimes(2);
    });

    it('should verbalCheckAll', () => {
      const { verbalCheckAll } = mapDispatchToProps(dispatch);
      const detainees = [
        {
          id: '123',
        },
        {
          id: '456',
        },
      ];
      const verbalCheckMock = jest.fn();

      verbalCheckAll(detainees, verbalCheckMock);

      expect(dispatch).toBeCalled();
      expect(verbalCheckMock).toBeCalledTimes(2);
    });
  });
});
