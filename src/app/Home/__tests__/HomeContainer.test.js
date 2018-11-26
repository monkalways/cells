import { mapStateToProps, mapDispatchToProps } from '../HomeContainer';

describe('HomeContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const versions = [];

    const result = mapStateToProps(state, versions);

    expect(result).toEqual({
      versions,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should getVersions', () => {
      const { getVersions } = mapDispatchToProps(dispatch);
      const getVersionsMock = jest.fn();

      getVersions(getVersionsMock);

      expect(dispatch).toBeCalled();
      expect(getVersionsMock).toBeCalled();
    });
  });
});
