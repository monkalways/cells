import { mapStateToProps, mapDispatchToProps } from '../PhoneDeclineContainer';

describe('PhoneDeclineContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const cellName = 'C1';
    const isUpdatingDetentionLog = false;
    const userName = 'Alfred';

    const result = mapStateToProps(
      state,
      cellName,
      isUpdatingDetentionLog,
      userName,
    );

    expect(result).toEqual({
      cellName,
      isUpdatingDetentionLog,
      userName,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should savePhoneCallDecline', () => {
      const { savePhoneCallDecline } = mapDispatchToProps(dispatch);
      const savePhoneCallDeclineMock = jest.fn();
      const arrestId = 'arrestId';
      const cellName = 'C1';
      const userName = 'Rocko';

      savePhoneCallDecline(
        arrestId,
        cellName,
        userName,
        savePhoneCallDeclineMock,
      );

      expect(dispatch).toBeCalled();
      expect(savePhoneCallDeclineMock).toBeCalledWith(
        arrestId,
        cellName,
        userName,
      );
    });
  });
});
