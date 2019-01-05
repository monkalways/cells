import {
  mapStateToProps,
  mapDispatchToProps,
} from '../DetaineeActionContainer';

describe('DetaineeActionContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const isBailHearingRoom1OptionAvailable = false;
    const isBailHearingRoom2OptionAvailable = false;
    const isBreathTestRoomOptionAvailable = false;
    const isFingerprintingRoomOptionAvailable = false;
    const isInCellOptionAvailable = false;
    const isInterviewRoomOptionAvailable = false;
    const isMedicalRoomOptionAvailable = false;
    const isPhoneDeclineOptionAvailable = false;
    const isPhoneRoomOptionAvailable = false;
    const isReleaseRoomOptionAvailable = false;
    const isRemandRoomOptionAvailable = false;

    const result = mapStateToProps(
      state,
      isBailHearingRoom1OptionAvailable,
      isBailHearingRoom2OptionAvailable,
      isBreathTestRoomOptionAvailable,
      isFingerprintingRoomOptionAvailable,
      isInCellOptionAvailable,
      isInterviewRoomOptionAvailable,
      isMedicalRoomOptionAvailable,
      isPhoneDeclineOptionAvailable,
      isPhoneRoomOptionAvailable,
      isReleaseRoomOptionAvailable,
      isRemandRoomOptionAvailable,
    );

    expect(result).toEqual({
      isBailHearingRoom1OptionAvailable,
      isBailHearingRoom2OptionAvailable,
      isBreathTestRoomOptionAvailable,
      isFingerprintingRoomOptionAvailable,
      isInCellOptionAvailable,
      isInterviewRoomOptionAvailable,
      isMedicalRoomOptionAvailable,
      isPhoneDeclineOptionAvailable,
      isPhoneRoomOptionAvailable,
      isReleaseRoomOptionAvailable,
      isRemandRoomOptionAvailable,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should getAvailableActivityRooms', () => {
      const { getAvailableActivityRooms } = mapDispatchToProps(dispatch);
      const getAvailableActivityRoomsMock = jest.fn();

      getAvailableActivityRooms(getAvailableActivityRoomsMock);

      expect(dispatch).toBeCalled();
      expect(getAvailableActivityRoomsMock).toBeCalled();
    });

    it('should getAvailableReleaseRooms', () => {
      const { getAvailableReleaseRooms } = mapDispatchToProps(dispatch);
      const getAvailableReleaseRoomsMock = jest.fn();

      getAvailableReleaseRooms(getAvailableReleaseRoomsMock);

      expect(dispatch).toBeCalled();
      expect(getAvailableReleaseRoomsMock).toBeCalled();
    });

    it('should getAvailableRemandRooms', () => {
      const { getAvailableRemandRooms } = mapDispatchToProps(dispatch);
      const getAvailableRemandRoomsMock = jest.fn();

      getAvailableRemandRooms(getAvailableRemandRoomsMock);

      expect(dispatch).toBeCalled();
      expect(getAvailableRemandRoomsMock).toBeCalled();
    });

    it('should getDetainee', () => {
      const { getDetainee } = mapDispatchToProps(dispatch);
      const id = '123';
      const getDetaineeMock = jest.fn();

      getDetainee(id, getDetaineeMock);

      expect(dispatch).toBeCalled();
      expect(getDetaineeMock).toBeCalledWith(id);
    });
  });
});
