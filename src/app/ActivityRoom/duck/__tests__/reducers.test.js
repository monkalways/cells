import activityRoomReducer from '../reducers';
import types from '../types';
import { types as authenticationTypes } from '../../../Authentication/duck';

describe('activityRoomReducer', () => {
  it('should setup default state', () => {
    const result = activityRoomReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual({
      usage: '',
      loaded: false,
      detainees: [],
      checkingIn: false,
      checkingInSuccess: true,
    });
  });

  it('should update state by GET_ACTIVITY_ROOM_DETAINEES', () => {
    const usage = 'phone';
    const result = activityRoomReducer(undefined, {
      type: types.GET_ACTIVITY_ROOM_DETAINEES,
      usage,
    });
    expect(result.loaded).toBe(false);
    expect(result.usage).toEqual(usage);
  });

  it('should update state by GET_ACTIVITY_ROOM_DETAINEES_SUCCESS', () => {
    const detainees = [];
    const result = activityRoomReducer(undefined, {
      type: types.GET_ACTIVITY_ROOM_DETAINEES_SUCCESS,
      detainees,
    });
    expect(result.loaded).toBe(true);
    expect(result.detainees).toEqual(detainees);
  });

  it('should update state by CHECK_IN', () => {
    const result = activityRoomReducer(undefined, {
      type: types.CHECK_IN,
    });
    expect(result.checkingIn).toBe(true);
    expect(result.checkingInSuccess).toBe(false);
  });

  it('should update state by CHECK_IN_SUCCESS', () => {
    const result = activityRoomReducer(undefined, {
      type: types.CHECK_IN_SUCCESS,
    });
    expect(result.checkingIn).toBe(false);
    expect(result.checkingInSuccess).toBe(true);
  });

  it('should update state by CHECK_IN_FAIL', () => {
    const result = activityRoomReducer(undefined, {
      type: types.CHECK_IN_FAIL,
    });
    expect(result.checkingIn).toBe(false);
    expect(result.checkingInSuccess).toBe(false);
  });

  it('should update state by authentication action type LOG_OUT', () => {
    const result = activityRoomReducer(undefined, {
      type: authenticationTypes.LOG_OUT,
    });
    expect(result).toEqual({
      usage: '',
      loaded: false,
      detainees: [],
      checkingIn: false,
      checkingInSuccess: true,
    });
  });
});
