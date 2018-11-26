import types from '../types';
import actions from '../actions';

describe('Common actions', () => {
  it('should create getVersionsSuccess action object', () => {
    const versions = [];
    const result = actions.getVersionsSuccess(versions);
    expect(result).toEqual({
      type: types.GET_VERSIONS_SUCCESS,
      versions,
    });
  });
});
