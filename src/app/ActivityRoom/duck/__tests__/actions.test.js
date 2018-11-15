import actions from '../actions';
import types from '../types';

test('should setup getActivityRoomDetainees action object', () => {
  const usage = 'phone';
  const action = actions.getActivityRoomDetainees(usage);
  expect(action).toEqual({
    type: types.GET_ACTIVITY_ROOM_DETAINEES,
    usage,
  });
});

test('should setup getActivityRoomDetaineesSuccess action object', () => {
  const detainees = [];
  const action = actions.getActivityRoomDetaineesSuccess(detainees);
  expect(action).toEqual({
    type: types.GET_ACTIVITY_ROOM_DETAINEES_SUCCESS,
    detainees,
  });
});

test('should setup checkIn action object', () => {
  const action = actions.checkIn();
  expect(action).toEqual({
    type: types.CHECK_IN,
  });
});

test('should setup checkInSuccess action object', () => {
  const action = actions.checkInSuccess();
  expect(action).toEqual({
    type: types.CHECK_IN_SUCCESS,
  });
});

test('should setup checkInFail action object', () => {
  const action = actions.checkInFail();
  expect(action).toEqual({
    type: types.CHECK_IN_FAIL,
  });
});
