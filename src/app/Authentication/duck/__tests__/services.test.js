import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import services from '../services';
import constants from '../../constants';

describe('Authentication services', () => {
  it('should authenticate', async () => {
    const cardId = '123';
    const userName = 'john';
    const mock = new MockAdapter(axios);
    mock.onGet(constants.AUTHENTICATE_URL).reply(200, userName);

    const result = await services.authenticate(cardId);
    expect(result).toEqual(userName);
  });
});
