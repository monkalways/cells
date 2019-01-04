import {
  activityRoomsReducer,
  detaineeProfileReducer,
  releaseRoomsReducer,
  remandRoomsReducer,
} from '../reducers';
import types from '../types';
import { types as authenticationTypes } from '../../../Authentication/duck';

describe('Detainee reducers', () => {
  describe('activityRoomsReducer', () => {
    it('should set up the default state', () => {
      const defaultState = {
        availableActivityRooms: [],
        assigningToRoom: false,
        loaded: false,
        isRefreshing: false,
        updatingDetentionLog: false,
      };
      const result = activityRoomsReducer(undefined, { type: '@@INIT' });
      expect(result).toEqual(defaultState);
    });
    it('should update state by GET_AVAILABLE_ACTIVITY_ROOMS', () => {
      const result = activityRoomsReducer(undefined, {
        type: types.GET_AVAILABLE_ACTIVITY_ROOMS,
      });
      expect(result.loaded).toBe(false);
    });
    it('should update state by GET_AVAILABLE_ACTIVITY_ROOMS_REFRESH', () => {
      const result = activityRoomsReducer(undefined, {
        type: types.GET_AVAILABLE_ACTIVITY_ROOMS_REFRESH,
      });
      expect(result.isRefreshing).toBe(true);
    });
    it('should update state by GET_AVAILABLE_ACTIVITY_ROOMS_SUCCESS', () => {
      const payload = ['T1', 'T2'];
      const result = activityRoomsReducer(undefined, {
        type: types.GET_AVAILABLE_ACTIVITY_ROOMS_SUCCESS,
        payload,
      });
      expect(result.loaded).toBe(true);
      expect(result.isRefreshing).toBe(false);
      expect(result.availableActivityRooms).toEqual(payload);
    });
    it('should update state by ASSIGN_TO_ROOM', () => {
      const result = activityRoomsReducer(undefined, {
        type: types.ASSIGN_TO_ROOM,
      });
      expect(result.assigningToRoom).toBe(true);
    });
    it('should update state by ASSIGN_TO_ROOM_SUCCESS', () => {
      const result = activityRoomsReducer(undefined, {
        type: types.ASSIGN_TO_ROOM_SUCCESS,
      });
      expect(result.assigningToRoom).toBe(false);
    });
    it('should update state by ASSIGN_TO_ROOM_FAILURE', () => {
      const result = activityRoomsReducer(undefined, {
        type: types.ASSIGN_TO_ROOM_FAILURE,
      });
      expect(result.assigningToRoom).toBe(false);
    });
    it('should update state by DECLINE_PHONECALL', () => {
      const result = activityRoomsReducer(undefined, {
        type: types.DECLINE_PHONECALL,
      });
      expect(result.updatingDetentionLog).toBe(true);
    });
    it('should update state by DECLINE_PHONECALL_FAILURE', () => {
      const result = activityRoomsReducer(undefined, {
        type: types.DECLINE_PHONECALL_FAILURE,
      });
      expect(result.updatingDetentionLog).toBe(false);
    });
    it('should update state by DECLINE_PHONECALL_SUCCESS', () => {
      const result = activityRoomsReducer(undefined, {
        type: types.DECLINE_PHONECALL_SUCCESS,
      });
      expect(result.updatingDetentionLog).toBe(false);
    });
    it('should update state by authentication action type LOG_OUT', () => {
      const result = activityRoomsReducer(undefined, {
        type: authenticationTypes.LOG_OUT,
      });
      expect(result).toEqual({
        availableActivityRooms: [],
        assigningToRoom: false,
        loaded: false,
        isRefreshing: false,
        updatingDetentionLog: false,
      });
    });
  });

  describe('detaineeProfileReducer', () => {
    it('should set up the default state ', () => {
      const defaultState = {
        data: {},
        loaded: false,
      };
      const result = detaineeProfileReducer(undefined, { type: '@@INIT' });
      expect(result).toEqual(defaultState);
    });
    it('should update state by GET_DETAINEE', () => {
      const result = detaineeProfileReducer(undefined, {
        type: types.GET_DETAINEE,
      });
      expect(result.loaded).toBe(false);
    });
    it('should update state by GET_DETAINEE_SUCCESS', () => {
      const payload = {
        firstName: 'Bob',
        id: '123',
        lastName: 'Barker',
      };
      const result = detaineeProfileReducer(undefined, {
        type: types.GET_DETAINEE_SUCCESS,
        payload,
      });
      expect(result.loaded).toBe(true);
      expect(result.data).toEqual(payload);
    });
    it('should update state by authentication action type LOG_OUT', () => {
      const result = detaineeProfileReducer(undefined, {
        type: authenticationTypes.LOG_OUT,
      });
      expect(result).toEqual({
        data: {},
        loaded: false,
      });
    });
  });

  describe('releaseRoomsReducer', () => {
    it('should set up the default state', () => {
      const defaultState = {
        data: {},
        loaded: false,
        refreshing: false,
      };
      const result = releaseRoomsReducer(undefined, { type: '@@INIT' });
      expect(result).toEqual(defaultState);
    });
    it('should update state by GET_AVAILABLE_RELEASE_ROOMS', () => {
      const result = releaseRoomsReducer(undefined, {
        type: types.GET_AVAILABLE_RELEASE_ROOMS,
      });
      expect(result.loaded).toBe(false);
    });
    it('should update state by GET_AVAILABLE_RELEASE_ROOMS_REFRESH', () => {
      const result = releaseRoomsReducer(undefined, {
        type: types.GET_AVAILABLE_RELEASE_ROOMS_REFRESH,
      });
      expect(result.refreshing).toBe(true);
    });
    it('should update state by GET_AVAILABLE_RELEASE_ROOMS_SUCCESS', () => {
      const payload = [
        {
          designation: 'designation',
          gender: 'gender',
          id: 'id',
          name: 'name',
          usage: 'usage',
        },
      ];
      const result = releaseRoomsReducer(undefined, {
        type: types.GET_AVAILABLE_RELEASE_ROOMS_SUCCESS,
        payload,
      });
      expect(result.loaded).toBe(true);
      expect(result.refreshing).toBe(false);
      expect(result.data).toEqual(payload);
    });
  });

  describe('remandRoomsReducer', () => {
    it('should set up the default state', () => {
      const defaultState = {
        data: {},
        loaded: false,
        refreshing: false,
      };
      const result = remandRoomsReducer(undefined, { type: '@@INIT' });
      expect(result).toEqual(defaultState);
    });
    it('should update state by GET_AVAILABLE_REMAND_ROOMS', () => {
      const result = remandRoomsReducer(undefined, {
        type: types.GET_AVAILABLE_REMAND_ROOMS,
      });
      expect(result.loaded).toBe(false);
    });
    it('should update state by GET_AVAILABLE_REMAND_ROOMS_REFRESH', () => {
      const result = remandRoomsReducer(undefined, {
        type: types.GET_AVAILABLE_REMAND_ROOMS_REFRESH,
      });
      expect(result.refreshing).toBe(true);
    });
    it('should update state by GET_AVAILABLE_REMAND_ROOMS_SUCCESS', () => {
      const payload = [
        {
          designation: 'designation',
          gender: 'gender',
          id: 'id',
          name: 'name',
          usage: 'usage',
        },
      ];
      const result = remandRoomsReducer(undefined, {
        type: types.GET_AVAILABLE_REMAND_ROOMS_SUCCESS,
        payload,
      });
      expect(result.loaded).toBe(true);
      expect(result.refreshing).toBe(false);
      expect(result.data).toEqual(payload);
    });
  });
});
