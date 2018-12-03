import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import services from '../services';
import constants from '../../constants';

describe('ActivityRoom services', () => {
  it('should getActivityRoomDetainees', async () => {
    const usage = 'phone';
    const detainees = [
      {
        id: '123',
        arrestId: '456',
        personId: '789',
        assignedCellName: 'C1',
        activityRoomName: 'T1',
        location: 'Phone - In Transit',
        detentionUnitName: 'EPS',
        division: ['EPS'],
        firstName: 'John',
        lastName: 'Smith',
        gender: 'M',
        intakePhotoResourceUri: 'some picture',
        extraField: 'that should not be mapped', // should not be included in the result
      },
    ];
    const mock = new MockAdapter(axios);
    mock
      .onGet(constants.GET_ACTIVITY_ROOM_DETAINEES_URL(usage))
      .reply(200, detainees);

    const result = await services.getActivityRoomDetainees(usage);
    expect(result).toEqual([
      {
        id: '123',
        arrestId: '456',
        personId: '789',
        assignedCellName: 'C1',
        activityRoomName: 'T1',
        location: 'Phone - In Transit',
        detentionUnitName: 'EPS',
        division: ['EPS'],
        firstName: 'John',
        lastName: 'Smith',
        gender: 'M',
        intakePhotoResourceUri: 'some picture',
      },
    ]);
  });

  it('should checkIntoActivityRoom', async () => {
    const detaineeId = '123';
    const usage = 'phone';
    const mock = new MockAdapter(axios);
    mock.onGet(constants.CHECK_INTO_ACTIVITY_ROOM_URL(usage)).reply(200);

    const result = await services.checkIntoActivityRoom(detaineeId, usage);
    expect(result).toBe(true);
  });
});
