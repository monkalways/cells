import { mapStateToProps, mapDispatchToProps } from '../CellDialogContainer';

describe('CellDialogContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const currentActivity = 'activity';
    const isAssigningToRoom = false;

    const result = mapStateToProps(state, currentActivity, isAssigningToRoom);

    expect(result).toEqual({
      currentActivity,
      isAssigningToRoom,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should getAvailableActivityRooms', () => {
      const { moveDetaineeToCell } = mapDispatchToProps(dispatch);
      const moveDetaineeToCellMock = jest.fn();
      const detaineeId = 'id';
      const originRoom = 'C1';
      const destinationRoom = 'T4';
      const goBack = jest.fn();

      moveDetaineeToCell(
        detaineeId,
        originRoom,
        destinationRoom,
        goBack,
        moveDetaineeToCellMock,
      );

      expect(dispatch).toBeCalled();
      expect(moveDetaineeToCellMock).toBeCalledWith(
        detaineeId,
        originRoom,
        destinationRoom,
        goBack,
      );
    });

    it('should checkDetaineeInToCell', () => {
      const { checkDetaineeInToCell } = mapDispatchToProps(dispatch);
      const checkDetaineeInToCellMock = jest.fn();
      const detaineeId = 'id';
      const cellName = 'C1';
      const goBack = jest.fn();

      checkDetaineeInToCell(
        detaineeId,
        cellName,
        goBack,
        checkDetaineeInToCellMock,
      );

      expect(dispatch).toBeCalled();
      expect(checkDetaineeInToCellMock).toBeCalledWith(
        detaineeId,
        cellName,
        goBack,
      );
    });
  });
});
