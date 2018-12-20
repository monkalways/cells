import { common } from '@material-ui/core/colors';
import selectors from '../selectors';
import constants from '../../constants';
import commonConstants from '../../../constants';

describe('Detainee selectors', () => {
  it('should select areActivityRoomsRefreshingState', () => {
    const isRefreshing = true;
    const state = {
      detainee: {
        activityRooms: {
          isRefreshing,
        },
      },
    };

    const result = selectors.areActivityRoomsRefreshingState(state);
    expect(result).toEqual(isRefreshing);
  });

  it('should select getAllAvailableActivityRoomsState', () => {
    const usage = 'phone';
    const state = {
      detainee: {
        activityRooms: {
          availableActivityRooms: [
            {
              usage: 'Medical',
              availableRooms: ['MD'],
            },
            {
              usage: 'Phone',
              availableRooms: ['T2', 'T4', 'T5'],
            },
          ],
        },
      },
    };

    const result = selectors.getAllAvailableActivityRoomsState(state, usage);
    expect(result).toEqual(['T2', 'T4', 'T5']);
  });

  it.each([
    ['?first=cells&second=B4', constants.CELL],
    ['?first=activity-rooms&second=phone', 'phone'],
  ])(
    'should select getCurrentActivityRoomState',
    (search, currentActivityRoom) => {
      const state = {
        router: {
          location: {
            search,
          },
        },
      };

      const result = selectors.getCurrentActivityRoomState(state);
      expect(result).toEqual(currentActivityRoom);
    },
  );

  it.each([
    ['?first=cells&second=B4', 'B4'],
    ['?first=activity-rooms&second=phone', 'T1'],
  ])('should select getCurrentRoomState', (search, roomName) => {
    const state = {
      router: {
        location: {
          search,
        },
      },
      detainee: {
        detaineeProfile: {
          data: {
            currentActivityRoom: 'T1',
          },
        },
      },
    };

    const result = selectors.getCurrentRoomState(state);
    expect(result).toEqual(roomName);
  });

  it('should select getDetaineeState', () => {
    const data = {};
    const state = {
      detainee: {
        detaineeProfile: {
          data,
        },
      },
    };

    const result = selectors.getDetaineeState(state);
    expect(result).toEqual(data);
  });

  it.each([['Phone', 'T2'], ['Medical', null]])(
    'should select getFirstAvailableActivityRoomState',
    (usage, roomName) => {
      const state = {
        detainee: {
          activityRooms: {
            availableActivityRooms: [
              {
                usage: 'Medical',
                availableRooms: [],
              },
              {
                usage: 'Phone',
                availableRooms: ['T2', 'T4', 'T5'],
              },
            ],
          },
        },
      };

      const result = selectors.getFirstAvailableActivityRoomState(state, usage);
      expect(result).toEqual(roomName);
    },
  );

  it.each([
    [
      // Move to phone room from cell screen, rooms available
      'Phone',
      commonConstants.PHONE_IN_PROGRESS,
      commonConstants.PHONE_IN_TRANSIT,
      '?first=cells&second=B4',
      ['T1', 'T2'],
      '',
      true,
    ],
    [
      // Move to phone room from cell screen, rooms not available
      'Phone',
      commonConstants.PHONE_IN_PROGRESS,
      commonConstants.PHONE_IN_TRANSIT,
      '?first=cells&second=B4',
      [],
      '',
      false,
    ],
    [
      // Move to phone room from cell screen, detainee location is 'Phone - In Progress'
      'Phone',
      commonConstants.PHONE_IN_PROGRESS,
      commonConstants.PHONE_IN_TRANSIT,
      '?first=cells&second=B4',
      ['T1', 'T2'],
      commonConstants.PHONE_IN_PROGRESS,
      false,
    ],
    [
      // Move to phone room from cell screen, detainee location is 'Phone - In Transit'
      'Phone',
      commonConstants.PHONE_IN_PROGRESS,
      commonConstants.PHONE_IN_TRANSIT,
      '?first=cells&second=B4',
      ['T1', 'T2'],
      commonConstants.PHONE_IN_TRANSIT,
      false,
    ],
    [
      // Move to phone room from activity room screen, detainee location is 'Phone - In Progress'
      'Phone',
      commonConstants.PHONE_IN_PROGRESS,
      commonConstants.PHONE_IN_TRANSIT,
      '?first=activity-rooms&second=phone',
      ['T1', 'T2'],
      commonConstants.PHONE_IN_PROGRESS,
      false,
    ],
    [
      // Move to medical room from activity room screen, detainee location is 'Phone - In Progress'
      'Medical',
      commonConstants.MEDICAL_IN_PROGRESS,
      commonConstants.MEDICAL_IN_TRANSIT,
      '?first=activity-rooms&second=phone',
      ['T1', 'T2'],
      commonConstants.PHONE_IN_PROGRESS,
      true,
    ],
    [
      // Move to medical room from activity room screen, detainee location is 'Phone - In Transit'
      'Medical',
      commonConstants.MEDICAL_IN_PROGRESS,
      commonConstants.MEDICAL_IN_TRANSIT,
      '?first=activity-rooms&second=phone',
      ['T1', 'T2'],
      commonConstants.PHONE_IN_TRANSIT,
      true,
    ],
  ])(
    'should select getCurrentRoomState',
    (
      usage,
      usageInProgress,
      usageInTransit,
      search,
      availableRooms,
      location,
      isActivityOptionAvailable,
    ) => {
      const state = {
        router: {
          location: {
            search,
          },
        },
        detainee: {
          activityRooms: {
            availableActivityRooms: [
              {
                usage: 'Medical',
                availableRooms: ['MD'],
              },
              {
                usage: 'Phone',
                availableRooms,
              },
            ],
          },
          detaineeProfile: {
            data: {
              location,
            },
          },
        },
      };

      const result = selectors.isActivityRoomOptionAvailableState(
        state,
        usage,
        usageInProgress,
        usageInTransit,
      );
      expect(result).toEqual(isActivityOptionAvailable);
    },
  );

  it.each([['Phone', true], ['Medical', false]])(
    'should select isAnyRoomForGivenActivityAvailableState',
    (usage, isAnyRoomAvailable) => {
      const state = {
        detainee: {
          activityRooms: {
            availableActivityRooms: [
              {
                usage: 'Medical',
                availableRooms: [],
              },
              {
                usage: 'Phone',
                availableRooms: ['T2', 'T4', 'T5'],
              },
            ],
          },
        },
      };

      const result = selectors.isAnyRoomForGivenActivityAvailableState(
        state,
        usage,
      );
      expect(result).toEqual(isAnyRoomAvailable);
    },
  );

  it('should select isAssigningToRoomState', () => {
    const assigningToRoom = true;
    const state = {
      detainee: {
        activityRooms: {
          assigningToRoom,
        },
      },
    };

    const result = selectors.isAssigningToRoomState(state);
    expect(result).toEqual(assigningToRoom);
  });

  it.each([
    [true, true, true],
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])(
    'should select isAnyRoomForGivenActivityAvailableState',
    (activityRoomLoaded, detaineeProfileLoaded, isDetaineeProfileLoaded) => {
      const state = {
        detainee: {
          activityRooms: {
            loaded: activityRoomLoaded,
          },
          detaineeProfile: { loaded: detaineeProfileLoaded },
        },
      };

      const result = selectors.isDetaineeProfileLoadedState(state);
      expect(result).toEqual(isDetaineeProfileLoaded);
    },
  );

  it.each([
    [
      // User came from cell management screen and detainee is "Cell - In Transit".
      // Enable button so detainee can be checked in.
      '?first=cells&second=B4',
      commonConstants.CELL_IN_TRANSIT,
      true,
    ],
    [
      // User came from activity room screen and detainee is not "Cell - In Transit"
      // Enable button so detainee can be send back to cell.
      '?first=activity-rooms&second=phone',
      commonConstants.PHONE_IN_PROGRESS,
      true,
    ],
    [
      // User came from activity room screen and detainee is  "Cell - In Transit"
      // Disable button because detainee is already en route to cell.
      '?first=activity-rooms&second=phone',
      commonConstants.CELL_IN_TRANSIT,
      false,
    ],
  ])(
    'should select isInCellOptionAvailableState',
    (search, location, isInCellOptionAvailable) => {
      const state = {
        router: {
          location: {
            search,
          },
        },
        detainee: {
          detaineeProfile: {
            data: {
              location,
            },
          },
        },
      };

      const result = selectors.isInCellOptionAvailableState(state);
      expect(result).toEqual(isInCellOptionAvailable);
    },
  );

  it.each([
    ['?first=cells&second=B4', '', true],
    ['?first=cells&second=B4', commonConstants.CELL_IN_TRANSIT, false],
    [
      '?first=activity-rooms&second=phone',
      commonConstants.PHONE_IN_PROGRESS,
      false,
    ],
  ])(
    'should select isPhoneDeclineOptionAvailableState',
    (search, location, isDeclinePhoneOptionAvailable) => {
      const state = {
        router: {
          location: {
            search,
          },
        },
        detainee: {
          detaineeProfile: {
            data: {
              location,
            },
          },
        },
      };

      const result = selectors.isPhoneDeclineOptionAvailableState(state);
      expect(result).toEqual(isDeclinePhoneOptionAvailable);
    },
  );

  it('should select isUpdatingDetentionLogState', () => {
    const updatingDetentionLog = true;
    const state = {
      detainee: {
        activityRooms: {
          updatingDetentionLog,
        },
      },
    };

    const result = selectors.isUpdatingDetentionLogState(state);
    expect(result).toEqual(updatingDetentionLog);
  });
});
