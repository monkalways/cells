import { mapStateToProps, mapDispatchToProps } from '../HeaderMenuContainer';

describe('HeaderMenuContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const menuAnchorElement = {};
    const open = false;

    const result = mapStateToProps(state, menuAnchorElement, open);

    expect(result).toEqual({
      menuAnchorElement,
      open,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should handleMenuOpen', () => {
      const { handleMenuOpen } = mapDispatchToProps(dispatch);
      const toggleMenuOpenMock = jest.fn();
      const event = {
        currentTarget: {},
      };

      handleMenuOpen(event, toggleMenuOpenMock);

      expect(dispatch).toBeCalled();
      expect(toggleMenuOpenMock).toBeCalledWith(event.currentTarget);
    });

    it('should handleMenuClose', () => {
      const { handleMenuClose } = mapDispatchToProps(dispatch);
      const toggleMenuCloseMock = jest.fn();

      handleMenuClose(toggleMenuCloseMock);

      expect(dispatch).toBeCalled();
      expect(toggleMenuCloseMock).toBeCalled();
    });

    it('should handleModalOpen', () => {
      const { handleModalOpen } = mapDispatchToProps(dispatch);
      const handleModalOpenMock = jest.fn();

      handleModalOpen(handleModalOpenMock);

      expect(dispatch).toBeCalled();
      expect(handleModalOpenMock).toBeCalled();
    });
  });
});
