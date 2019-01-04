import types from '../types';
import actions from '../actions';

describe('Detainee actions', () => {
  it('should create assignToRoom action object', () => {
    const result = actions.assignToRoom();
    expect(result).toEqual({ type: types.ASSIGN_TO_ROOM });
  });

  it('should create assignToRoomFailure action object', () => {
    const result = actions.assignToRoomFailure();
    expect(result).toEqual({ type: types.ASSIGN_TO_ROOM_FAILURE });
  });

  it('should create assignToRoomSuccess action object', () => {
    const result = actions.assignToRoomSuccess();
    expect(result).toEqual({ type: types.ASSIGN_TO_ROOM_SUCCESS });
  });

  it('should create declinePhoneCall action object', () => {
    const result = actions.declinePhoneCall();
    expect(result).toEqual({ type: types.DECLINE_PHONECALL });
  });

  it('should create declinePhoneCallFailure action object', () => {
    const result = actions.declinePhoneCallFailure();
    expect(result).toEqual({ type: types.DECLINE_PHONECALL_FAILURE });
  });

  it('should create declinePhoneCallSuccess action object', () => {
    const result = actions.declinePhoneCallSuccess();
    expect(result).toEqual({ type: types.DECLINE_PHONECALL_SUCCESS });
  });

  it('should create getAvailableActivityRooms action object', () => {
    const result = actions.getAvailableActivityRooms();
    expect(result).toEqual({ type: types.GET_AVAILABLE_ACTIVITY_ROOMS });
  });

  it('should create getAvailableActivityRoomsRefresh action object', () => {
    const result = actions.getAvailableActivityRoomsRefresh();
    expect(result).toEqual({
      type: types.GET_AVAILABLE_ACTIVITY_ROOMS_REFRESH,
    });
  });

  it('should create getAvailableActivityRoomsSuccess action object', () => {
    const payload = {};
    const result = actions.getAvailableActivityRoomsSuccess(payload);
    expect(result).toEqual({
      type: types.GET_AVAILABLE_ACTIVITY_ROOMS_SUCCESS,
      payload,
    });
  });

  it('should create getAvailableReleaseRooms action object', () => {
    const result = actions.getAvailableReleaseRooms();
    expect(result).toEqual({ type: types.GET_AVAILABLE_RELEASE_ROOMS });
  });

  it('should create getAvailableReleaseRoomsRefresh action object', () => {
    const result = actions.getAvailableReleaseRoomsRefresh();
    expect(result).toEqual({
      type: types.GET_AVAILABLE_RELEASE_ROOMS_REFRESH,
    });
  });

  it('should create getAvailableReleaseRoomsSuccess action object', () => {
    const payload = {};
    const result = actions.getAvailableReleaseRoomsSuccess(payload);
    expect(result).toEqual({
      type: types.GET_AVAILABLE_RELEASE_ROOMS_SUCCESS,
      payload,
    });
  });

  it('should create getAvailableRemandRooms action object', () => {
    const result = actions.getAvailableRemandRooms();
    expect(result).toEqual({ type: types.GET_AVAILABLE_Remand_ROOMS });
  });

  it('should create getAvailableRemandRoomsRefresh action object', () => {
    const result = actions.getAvailableRemandRoomsRefresh();
    expect(result).toEqual({
      type: types.GET_AVAILABLE_Remand_ROOMS_REFRESH,
    });
  });

  it('should create getAvailableRemandRoomsSuccess action object', () => {
    const payload = {};
    const result = actions.getAvailableRemandRoomsSuccess(payload);
    expect(result).toEqual({
      type: types.GET_AVAILABLE_Remand_ROOMS_SUCCESS,
      payload,
    });
  });

  it('should create getDetainee action object', () => {
    const result = actions.getDetainee();
    expect(result).toEqual({
      type: types.GET_DETAINEE,
    });
  });

  it('should create getDetaineeSuccess action object', () => {
    const payload = {};
    const result = actions.getDetaineeSuccess(payload);
    expect(result).toEqual({
      type: types.GET_DETAINEE_SUCCESS,
      payload,
    });
  });
});
