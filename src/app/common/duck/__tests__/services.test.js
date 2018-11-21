import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import services from '../services';
import constants from '../../../constants';

describe('Common services', () => {
  it('should getVersions', async () => {
    const versions = [
      {
        name: 'Detainee Management Service',
        version: '1.0.0',
      },
      {
        name: 'EPROS Service',
        version: '1.0.0',
      },
    ];
    const mock = new MockAdapter(axios);
    mock.onGet(constants.VERSION_URL).reply(200, versions);

    const result = await services.getVersions();
    expect(result).toEqual(versions);
  });
});
