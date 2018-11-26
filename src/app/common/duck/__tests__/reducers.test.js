import types from '../types';
import versionsReducer from '../reducers';

describe('versionsReducer', () => {
  it('should setup default state', () => {
    const result = versionsReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual([]);
  });

  it('should update state by GET_VERSIONS_SUCCESS', () => {
    const versions = [
      {
        name: 'Cell App',
        version: '1.0.0',
      },
      {
        name: 'Detainee Management Service',
        version: '1.0.0',
      },
      {
        name: 'EPROS Service',
        version: '1.0.0',
      },
    ];
    const result = versionsReducer(undefined, {
      type: types.GET_VERSIONS_SUCCESS,
      versions,
    });
    expect(result).toEqual(versions);
  });
});
