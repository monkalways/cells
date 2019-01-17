import selectors from '../selectors';

describe('Common selectors', () => {
  it('should select getVersionsState', () => {
    const data = [];
    const state = {
      common: {
        versions: {
          data,
        },
      },
    };
    const result = selectors.getVersionsState(state);
    expect(result).toEqual(data);
  });
});
