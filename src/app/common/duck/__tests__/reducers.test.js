import types from '../types';
import { versionsReducer } from '../reducers';

describe('versionsReducer', () => {
  it('should setup default state', () => {
    const defaultState = {
      data: [],
    };
    const result = versionsReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual(defaultState);
  });

  it('should update state by GET_VERSIONS_SUCCESS', () => {
    const payload = [
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
      payload,
    });
    expect(result.data).toEqual(payload);
  });
});
