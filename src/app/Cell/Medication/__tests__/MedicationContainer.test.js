import { mapStateToProps, mapDispatchToProps } from '../MedicationContainer';

describe('MedicationContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const isAuthenticated = false;
    const userName = 'test';
    const cellDetainees = [];
    const cellName = 'c1';
    const isCellDetaineesLoaded = false;
    const medication = {};
    const isSavingMedication = false;

    const result = mapStateToProps(
      state,
      cellDetainees,
      cellName,
      isCellDetaineesLoaded,
      isAuthenticated,
      userName,
      medication,
      isSavingMedication,
    );

    expect(result).toEqual({
      cellDetainees,
      cellName,
      isCellDetaineesLoaded,
      isAuthenticated,
      userName,
      medication,
      isSavingMedication,
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should getCellDetainees', () => {
      const { getCellDetainees } = mapDispatchToProps(dispatch);
      const name = 'c1';
      const getCellDetaineesMock = jest.fn();

      getCellDetainees(name, getCellDetaineesMock);

      expect(dispatch).toBeCalled();
      expect(getCellDetaineesMock).toBeCalledWith(name);
    });

    it('should acceptMedication', () => {
      const { acceptMedication } = mapDispatchToProps(dispatch);
      const detainee = {};
      const acceptMedicationMock = jest.fn();

      acceptMedication(detainee, acceptMedicationMock);

      expect(dispatch).toBeCalled();
      expect(acceptMedicationMock).toBeCalledWith(detainee);
    });

    it('should rejectMedication', () => {
      const { rejectMedication } = mapDispatchToProps(dispatch);
      const detainee = {};
      const rejectMedicationMock = jest.fn();

      rejectMedication(detainee, rejectMedicationMock);

      expect(dispatch).toBeCalled();
      expect(rejectMedicationMock).toBeCalledWith(detainee);
    });

    it('should notApplicableMedication', () => {
      const { notApplicableMedication } = mapDispatchToProps(dispatch);
      const detainee = {};
      const notApplicableMealMock = jest.fn();

      notApplicableMedication(detainee, notApplicableMealMock);

      expect(dispatch).toBeCalled();
      expect(notApplicableMealMock).toBeCalledWith(detainee);
    });

    it('should acceptMedicationAll', () => {
      const { acceptMedicationAll } = mapDispatchToProps(dispatch);
      const detainees = [
        {
          id: '123',
        },
        {
          id: '456',
        },
      ];
      const acceptMedicationAllMock = jest.fn();

      acceptMedicationAll(detainees, acceptMedicationAllMock);

      expect(dispatch).toBeCalled();
      expect(acceptMedicationAllMock).toBeCalledTimes(2);
    });

    it('should rejectMedicationAll', () => {
      const { rejectMedicationAll } = mapDispatchToProps(dispatch);
      const detainees = [
        {
          id: '123',
        },
        {
          id: '456',
        },
      ];
      const rejectMedicationAllMock = jest.fn();

      rejectMedicationAll(detainees, rejectMedicationAllMock);

      expect(dispatch).toBeCalled();
      expect(rejectMedicationAllMock).toBeCalledTimes(2);
    });

    it('should notApplicableMedicationAll', () => {
      const { notApplicableMedicationAll } = mapDispatchToProps(dispatch);
      const detainees = [
        {
          id: '123',
        },
        {
          id: '456',
        },
      ];
      const notApplicableMedicationAllMock = jest.fn();

      notApplicableMedicationAll(detainees, notApplicableMedicationAllMock);

      expect(dispatch).toBeCalled();
      expect(notApplicableMedicationAllMock).toBeCalledTimes(2);
    });

    it('should onSave', () => {
      const { onSave } = mapDispatchToProps(dispatch);
      const medication = {};
      const cellName = 'c1';
      const userName = 'test';
      const saveMealMock = jest.fn();

      onSave(medication, cellName, userName, saveMealMock);

      expect(saveMealMock).toBeCalled();
    });
  });
});
