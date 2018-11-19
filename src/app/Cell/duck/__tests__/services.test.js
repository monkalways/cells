import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import services from '../services';
import constants from '../../constants';

describe('Cell services', () => {
  it.each([
    ['FA', 'Female Adult'],
    ['FJ', 'Female Juvenile'],
    ['FY', 'Female Youth'],
    ['MA', 'Male Adult'],
    ['MJ', 'Male Juvenile'],
    ['MY', 'Male Youth'],
    ['Other', 'Other'],
    ['', ''],
  ])(
    'should getCellDetails for various designation',
    async (genderLabel, designation) => {
      const name = 'g1';
      const cellDetails = {
        isActivityRoom: false,
        occupancyLabel: '1/2',
        genderLabel,
        borderColor: '#64dd17', // should not be mapped
        genderColor: '#4fc3f7',
        cellStatus: 'Available',
        id: '123',
        name,
        usage: 'Holding Cell',
        occupancy: 2,
        occupancyCount: 1,
        remarks: '',
        typeCodes: ['MJ'],
        statusCode: 'ABL',
        effectiveFromTime: '2018-06-13T00:00:00',
        effectiveToTime: null,
      };
      const mock = new MockAdapter(axios);
      mock.onGet(constants.GET_CELL_URL(name)).reply(200, cellDetails);

      const result = await services.getCellDetails(name);
      expect(result).toEqual({
        isActivityRoom: false,
        occupancyLabel: '1/2',
        genderLabel,
        designation,
        genderColor: '#4fc3f7',
        cellStatus: 'Available',
        id: '123',
        name: 'G1', // should be in uppercase
        usage: 'Holding Cell',
        occupancy: 2,
        occupancyCount: 1,
        remarks: '',
        typeCodes: ['MJ'],
        statusCode: 'ABL',
        effectiveFromTime: '2018-06-13T00:00:00',
        effectiveToTime: null,
      });
    },
  );

  it('should getCellDetainees', async () => {
    const name = 'g1';
    const detainees = [
      {
        id: '123',
        arrestId: '456',
        personId: '789',
        assignedCellId: '321',
        custodyCostCategoryCode: ';EPS;',
        detentionUnitId: '654',
        detentionUnitName: 'DETAINEE MANAGEMENT UNIT',
        propertyBagNumber: '',
        carePlanHealthAndWellBeingRiskCode: '',
        carePlanSafetyToOthersRiskCode: '',
        carePlanSafetyToSelfRiskCode: '',
        hasWarning: false,
        mustBeKeptAlone: false,
        closed: false,
        dob: '2002-01-01',
        location: '',
        division: ['EPS'],
        withCaution: false,
        cautionsArray: [],
        isUnderMedication: false,
        isSuicidal: false,
        isContagious: false,
        firstName: 'John',
        lastName: 'Smith',
        gender: 'Male',
        intakePhotoResourceUri: '',
      },
    ];
    const mock = new MockAdapter(axios);
    mock.onGet(constants.GET_CELL_DETAINEES_URL(name)).reply(200, detainees);

    const result = await services.getCellDetainees(name);
    expect(result).toEqual([
      {
        id: '123',
        arrestId: '456',
        personId: '789',
        assignedCellId: '321',
        // custodyCostCategoryCode: ';EPS;', // should not be mapped
        detentionUnitId: '654',
        detentionUnitName: 'DETAINEE MANAGEMENT UNIT',
        // propertyBagNumber: '', // should not be mapped
        carePlanHealthAndWellBeingRiskCode: '',
        carePlanSafetyToOthersRiskCode: '',
        carePlanSafetyToSelfRiskCode: '',
        hasWarning: false,
        mustBeKeptAlone: false,
        closed: false,
        dob: '2002-01-01',
        location: '',
        division: ['EPS'],
        withCaution: false,
        cautionsArray: [],
        isUnderMedication: false,
        isSuicidal: false,
        isContagious: false,
        firstName: 'John',
        lastName: 'Smith',
        gender: 'Male',
        intakePhotoResourceUri: '',
      },
    ]);
  });

  it('should saveCellCheck for visual check', async () => {
    const cellCheck = {
      123: {
        detainee: {
          arrestId: '456',
        },
        visual: true,
      },
    };
    const userName = 'test';
    const mock = new MockAdapter(axios);
    mock
      .onPost(constants.DETENTION_LOGS_URL, {
        arrestId: '456',
        detentionLogType: constants.DETENTION_LOG_DATA_TYPE_CELL_CHECK,
        detentionLogAction: constants.DETENTION_LOG_ACTION_TYPE_VISUAL,
        userName,
      })
      .reply(201);

    const result = await services.saveCellCheck(cellCheck, userName);

    expect(result).toBe(true);
  });

  it('should saveCellCheck for verbal check', async () => {
    const cellCheck = {
      123: {
        detainee: {
          arrestId: '456',
        },
        visual: false,
      },
    };
    const userName = 'test';
    const mock = new MockAdapter(axios);
    mock
      .onPost(constants.DETENTION_LOGS_URL, {
        arrestId: '456',
        detentionLogType: constants.DETENTION_LOG_DATA_TYPE_CELL_CHECK,
        detentionLogAction: constants.DETENTION_LOG_ACTION_TYPE_VERBAL,
        userName,
      })
      .reply(201);

    const result = await services.saveCellCheck(cellCheck, userName);

    expect(result).toBe(true);
  });

  it('should saveMeal for accepting meal', async () => {
    const meal = {
      123: {
        detainee: {
          arrestId: '456',
        },
        accept: true,
      },
    };
    const userName = 'test';
    const mock = new MockAdapter(axios);
    mock
      .onPost(constants.DETENTION_LOGS_URL, {
        arrestId: '456',
        detentionLogType: constants.DETENTION_LOG_DATA_TYPE_MEAL,
        detentionLogAction: constants.DETENTION_LOG_ACTION_TYPE_ACCEPT,
        userName,
      })
      .reply(201);

    const result = await services.saveMeal(meal, userName);

    expect(result).toBe(true);
  });

  it('should not saveMeal if not applicable', async () => {
    const meal = {
      123: {
        detainee: {
          arrestId: '456',
        },
        notApplicable: true,
      },
    };
    const userName = 'test';

    const result = await services.saveMeal(meal, userName);

    expect(result).toBe(false);
  });

  it('should saveMeal for rejecting meal', async () => {
    const meal = {
      123: {
        detainee: {
          arrestId: '456',
        },
        accept: false,
      },
    };
    const userName = 'test';
    const mock = new MockAdapter(axios);
    mock
      .onPost(constants.DETENTION_LOGS_URL, {
        arrestId: '456',
        detentionLogType: constants.DETENTION_LOG_DATA_TYPE_MEAL,
        detentionLogAction: constants.DETENTION_LOG_ACTION_TYPE_REJECT,
        userName,
      })
      .reply(201);

    const result = await services.saveMeal(meal, userName);

    expect(result).toBe(true);
  });

  it('should saveMedication for accepting medication', async () => {
    const medication = {
      123: {
        detainee: {
          arrestId: '456',
        },
        accept: true,
      },
    };
    const userName = 'test';
    const mock = new MockAdapter(axios);
    mock
      .onPost(constants.DETENTION_LOGS_URL, {
        arrestId: '456',
        detentionLogType: constants.DETENTION_LOG_DATA_TYPE_MEDICATION,
        detentionLogAction: constants.DETENTION_LOG_ACTION_TYPE_ACCEPT,
        userName,
      })
      .reply(201);

    const result = await services.saveMedication(medication, userName);

    expect(result).toBe(true);
  });

  it('should not saveMedication if not applicable', async () => {
    const meal = {
      123: {
        detainee: {
          arrestId: '456',
        },
        notApplicable: true,
      },
    };
    const userName = 'test';

    const result = await services.saveMedication(meal, userName);

    expect(result).toBe(false);
  });

  it('should saveMedication for rejecting medication', async () => {
    const medication = {
      123: {
        detainee: {
          arrestId: '456',
        },
        accept: false,
      },
    };
    const userName = 'test';
    const mock = new MockAdapter(axios);
    mock
      .onPost(constants.DETENTION_LOGS_URL, {
        arrestId: '456',
        detentionLogType: constants.DETENTION_LOG_DATA_TYPE_MEDICATION,
        detentionLogAction: constants.DETENTION_LOG_ACTION_TYPE_REJECT,
        userName,
      })
      .reply(201);

    const result = await services.saveMedication(medication, userName);

    expect(result).toBe(true);
  });
});
