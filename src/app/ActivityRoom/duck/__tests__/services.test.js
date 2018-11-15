import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import services from '../services';
import constants from '../../constants';

test('should getLastTempAbsence', async () => {
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

test('should getLastTempAbsence', async () => {
  const detaineeId = '123';
  const detainee = {
    id: '123',
    custodyEventId: '456',
    personId: '789',
    reason: 'Phone - In Transit',
    startTime: new Date(),
    endTime: new Date(),
    remarks: 'T1',
    extraField: 'that should not be mapped', // should not be included in the result
  };
  const mock = new MockAdapter(axios);
  mock
    .onGet(constants.GET_LAST_TEMP_ABSENCE_URL(detaineeId))
    .reply(200, detainee);

  const result = await services.getLastTempAbsence(detaineeId);
  expect(result).toEqual({
    id: detainee.id,
    custodyEventId: detainee.custodyEventId,
    personId: detainee.personId,
    reason: detainee.reason,
    startTime: detainee.startTime.toISOString(),
    endTime: detainee.endTime.toISOString(),
    remarks: detainee.remarks,
  });
});

test('should createTempAbsence', async () => {
  const detaineeId = '123';
  const reason = 'Phone - In Progress';
  const activityRoomName = 'T1';
  const mock = new MockAdapter(axios);
  mock.onPost(constants.CREATE_TEMP_ABSENCE_URL).reply(200);

  const result = await services.createTempAbsence({
    detaineeId,
    reason,
    activityRoomName,
  });

  expect(result).toBe(true);
});

test('should updateTempAbsence', async () => {
  const detaineeId = '123';
  const tempAbsenceId = '456';
  const reason = 'Phone - In Progress';
  const activityRoomName = 'T1';
  const startTime = new Date();
  const endTime = new Date();
  const mock = new MockAdapter(axios);
  mock.onPut(constants.UPDATE_TEMP_ABSENCE_URL).reply(200);

  const result = await services.updateTempAbsence({
    tempAbsenceId,
    detaineeId,
    startTime,
    endTime,
    reason,
    activityRoomName,
  });

  expect(result).toBe(true);
});
