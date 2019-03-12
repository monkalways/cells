import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import services from '../services';
import constants from '../../constants';

describe('ActivityRoom services', () => {
  it('should checkInToCell', async () => {
    const detaineeId = '123';
    const cellName = 'C1';
    const mock = new MockAdapter(axios);
    mock.onPost(constants.CHECK_IN_TO_CELL_URL(cellName)).reply(204);

    const result = await services.checkInToCell(detaineeId, cellName);
    expect(result).toBe(true);
  });

  it('should getAvailableActivityRooms', async () => {
    const availableRooms = [
      {
        usage: 'usage',
        availableRooms: ['T1', 'T2'],
        extraField: 'should not be mapped',
      },
    ];

    const mock = new MockAdapter(axios);
    mock
      .onGet(constants.GET_AVAILABLE_ACTIVITY_ROOMS_URL)
      .reply(200, availableRooms);

    const result = await services.getAvailableActivityRooms();
    expect(result).toEqual([
      {
        usage: 'usage',
        availableRooms: ['T1', 'T2'],
      },
    ]);
  });

  it('should getAvailableReleaseRooms', async () => {
    const availableRooms = [
      {
        name: 'name',
        typeCodes: ['MA', 'MJ'],
        extraField: 'should not be mapped',
      },
    ];

    const mock = new MockAdapter(axios);
    mock
      .onGet(constants.GET_AVAILABLE_RELEASE_ROOMS_URL)
      .reply(200, availableRooms);

    const result = await services.getAvailableReleaseRooms();
    expect(result).toEqual([
      {
        name: 'name',
        typeCodes: ['MA', 'MJ'],
      },
    ]);
  });

  it('should getAvailableRemandRooms', async () => {
    const availableRooms = [
      {
        name: 'name',
        typeCodes: ['MA', 'MJ'],
        extraField: 'should not be mapped',
      },
    ];

    const mock = new MockAdapter(axios);
    mock
      .onGet(constants.GET_AVAILABLE_REMAND_ROOMS_URL)
      .reply(200, availableRooms);

    const result = await services.getAvailableRemandRooms();
    expect(result).toEqual([
      {
        name: 'name',
        typeCodes: ['MA', 'MJ'],
      },
    ]);
  });

  it('should getDetainee', async () => {
    const detaineeId = '123';
    const detainee = {
      arrestId: 'arrestId',
      assignedCellId: 'assignedCelllId',
      assignedCellName: 'assignedCellName',
      bailHearingCount: 1,
      breathTestCount: 2,
      cautionsArray: ['A', 'B'],
      currentActivityRoom: 'currentActivityRoom',
      detentionUnitName: 'detentionUnitName',
      division: 'division',
      dob: 'dob',
      fingerPrintCount: 3,
      firstName: 'firstName',
      fullDob: 'fullDob',
      gender: 'gender',
      genderTypeCode: 'genderTypeCode',
      hasWarning: true,
      custodyEventId: 'custodyEventId',
      intakePhotoResourceUri: 'intakePhotoResourceUri',
      interviewCount: 4,
      isContagious: false,
      isSuicidal: false,
      isUnderMedication: false,
      lastName: 'lastName',
      location: 'Phone - In Transit',
      mealAcceptedCount: 5,
      mealDeclinedCount: 6,
      medicalCount: 7,
      medicationAcceptedCount: 8,
      medicationRefusedCount: 9,
      mustBeKeptAlone: true,
      overrideFingerprintingWarning: false,
      personId: 'personId',
      propertyBagNumber: 'bagId',
      telephoneAcceptedCount: 10,
      telephoneDeclinedCount: 11,
      verbalCellCheckCount: 12,
      visualCellCheckCount: 13,
      withCaution: false,
      extraField: 'should not be mapped',
    };
    const mock = new MockAdapter(axios);
    mock.onGet(constants.GET_DETAINEE_URL(detaineeId)).reply(200, detainee);

    const result = await services.getDetainee(detaineeId);
    expect(result).toEqual({
      arrestId: 'arrestId',
      assignedCellId: 'assignedCelllId',
      assignedCellName: 'assignedCellName',
      bailHearingCount: 1,
      breathTestCount: 2,
      cautionsArray: ['A', 'B'],
      currentActivityRoom: 'currentActivityRoom',
      detentionUnitName: 'detentionUnitName',
      division: 'division',
      dob: 'dob',
      fingerPrintCount: 3,
      firstName: 'firstName',
      fullDob: 'fullDob',
      gender: 'gender',
      genderTypeCode: 'genderTypeCode',
      hasWarning: true,
      id: 'custodyEventId',
      intakePhotoResourceUri: 'intakePhotoResourceUri',
      interviewCount: 4,
      isContagious: false,
      isSuicidal: false,
      isUnderMedication: false,
      lastName: 'lastName',
      location: 'Phone - In Transit',
      mealAcceptedCount: 5,
      mealDeclinedCount: 6,
      medicalCount: 7,
      medicationAcceptedCount: 8,
      medicationRefusedCount: 9,
      mustBeKeptAlone: true,
      overrideFingerprintingWarning: false,
      personId: 'personId',
      propertyBagNumber: 'bagId',
      telephoneAcceptedCount: 10,
      telephoneDeclinedCount: 11,
      verbalCellCheckCount: 12,
      visualCellCheckCount: 13,
      withCaution: false,
    });
  });

  it('should moveDetaineeToRoom', async () => {
    const detaineeId = '123';
    const originRoom = 'origin';
    const destinationRoom = 'destination';
    const mock = new MockAdapter(axios);
    mock
      .onPost(constants.MOVE_DETAINEE_TO_ROOM_URL(originRoom, destinationRoom))
      .reply(204);

    const result = await services.moveDetaineeToRoom(
      detaineeId,
      originRoom,
      destinationRoom,
    );
    expect(result).toBe(true);
  });

  it('should savePhoneCallDecline', async () => {
    const arrestId = 'arrestID';
    const userName = 'BobW';
    const mock = new MockAdapter(axios);
    mock.onPost(constants.CREATE_DETENTION_LOG_URL(arrestId)).reply(204);

    const result = await services.savePhoneCallDecline(arrestId, userName);
    expect();
  });
});
