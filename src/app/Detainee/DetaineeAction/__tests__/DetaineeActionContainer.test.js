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

    it('should handleClose', () => {
      const { handleClose } = mapDispatchToProps(dispatch);
      const id = 'id';
      const getAvailableActivityRoomsMock = jest.fn();
      const getAvailableReleaseRoomsMock = jest.fn();
      const getAvailableRemandRoomsMock = jest.fn();
      const getDetaineeMock = jest.fn();

      handleClose(
        id,
        getAvailableActivityRoomsMock,
        getAvailableReleaseRoomsMock,
        getAvailableRemandRoomsMock,
        getDetaineeMock,
      );

      expect(dispatch).toBeCalled();
      expect(getAvailableActivityRoomsMock).toBeCalled();
      expect(getAvailableReleaseRoomsMock).toBeCalled();
      expect(getAvailableRemandRoomsMock).toBeCalled();
      expect(getDetaineeMock).toBeCalledWith(id);
    });
  });
});
