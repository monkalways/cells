import selectors from '../selectors';

describe('Common selectors', () => {
  it('should select getVersionsState', () => {
    const state = {
      versions: [],
    };
    const result = selectors.getVersionsState(state);
    expect(result).toEqual(state.versions);
  });
});
