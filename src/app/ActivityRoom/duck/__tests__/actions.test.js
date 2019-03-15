import actions from '../actions';
import types from '../types';

describe('ActivityRoom actions', () => {
  it('should setup getActivityRoomDetainees action object', () => {
    const usage = 'phone';
    const action = actions.getActivityRoomDetainees(usage);
    expect(action).toEqual({
      type: types.GET_ACTIVITY_ROOM_DETAINEES,
      usage,
    });
  });

  it('should setup getActivityRoomDetaineesSuccess action object', () => {
    const detainees = [];
    const action = actions.getActivityRoomDetaineesSuccess(detainees);
    expect(action).toEqual({
      type: types.GET_ACTIVITY_ROOM_DETAINEES_SUCCESS,
      detainees,
    });
  });

  it('should setup checkIn action object', () => {
    const detaineeId = '123';
    const action = actions.checkIn(detaineeId);
    expect(action).toEqual({
      type: types.CHECK_IN,
      detaineeId,
    });
  });

  it('should setup checkInSuccess action object', () => {
    const action = actions.checkInSuccess();
    expect(action).toEqual({
      type: types.CHECK_IN_SUCCESS,
    });
  });

  it('should setup checkInFail action object', () => {
    const action = actions.checkInFail();
    expect(action).toEqual({
      type: types.CHECK_IN_FAIL,
    });
  });
});
