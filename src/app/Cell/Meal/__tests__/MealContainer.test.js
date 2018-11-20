import { mapStateToProps, mapDispatchToProps } from '../MealContainer';

describe('MealContainer', () => {
  it('should mapStateToProps', () => {
    const state = {};
    const isAuthenticated = false;
    const userName = 'test';
    const cellDetainees = [];
    const cellName = 'c1';
    const isCellDetaineesLoaded = false;
    const meal = {};
    const isSavingMeal = false;

    const result = mapStateToProps(
      state,
      cellDetainees,
      cellName,
      isCellDetaineesLoaded,
      isAuthenticated,
      userName,
      meal,
      isSavingMeal,
    );

    expect(result).toEqual({
      cellDetainees,
      cellName,
      isCellDetaineesLoaded,
      isAuthenticated,
      userName,
      meal,
      isSavingMeal,
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

    it('should acceptMeal', () => {
      const { rejectMeal } = mapDispatchToProps(dispatch);
      const detainee = {};
      const acceptMealMock = jest.fn();

      rejectMeal(detainee, acceptMealMock);

      expect(dispatch).toBeCalled();
      expect(acceptMealMock).toBeCalledWith(detainee);
    });

    it('should rejectMeal', () => {
      const { rejectMeal } = mapDispatchToProps(dispatch);
      const detainee = {};
      const rejectMealMock = jest.fn();

      rejectMeal(detainee, rejectMealMock);

      expect(dispatch).toBeCalled();
      expect(rejectMealMock).toBeCalledWith(detainee);
    });

    it('should notApplicableMeal', () => {
      const { notApplicableMeal } = mapDispatchToProps(dispatch);
      const detainee = {};
      const notApplicableMealMock = jest.fn();

      notApplicableMeal(detainee, notApplicableMealMock);

      expect(dispatch).toBeCalled();
      expect(notApplicableMealMock).toBeCalledWith(detainee);
    });

    it('should acceptMealAll', () => {
      const { acceptMealAll } = mapDispatchToProps(dispatch);
      const detainees = [
        {
          id: '123',
        },
        {
          id: '456',
        },
      ];
      const acceptMealAllMock = jest.fn();

      acceptMealAll(detainees, acceptMealAllMock);

      expect(dispatch).toBeCalled();
      expect(acceptMealAllMock).toBeCalledTimes(2);
    });

    it('should rejectMealAll', () => {
      const { rejectMealAll } = mapDispatchToProps(dispatch);
      const detainees = [
        {
          id: '123',
        },
        {
          id: '456',
        },
      ];
      const rejectMealAllMock = jest.fn();

      rejectMealAll(detainees, rejectMealAllMock);

      expect(dispatch).toBeCalled();
      expect(rejectMealAllMock).toBeCalledTimes(2);
    });

    it('should notApplicableMealAll', () => {
      const { notApplicableMealAll } = mapDispatchToProps(dispatch);
      const detainees = [
        {
          id: '123',
        },
        {
          id: '456',
        },
      ];
      const notApplicableMealAllMock = jest.fn();

      notApplicableMealAll(detainees, notApplicableMealAllMock);

      expect(dispatch).toBeCalled();
      expect(notApplicableMealAllMock).toBeCalledTimes(2);
    });

    it('should onSave', () => {
      const { onSave } = mapDispatchToProps(dispatch);
      const meal = {};
      const cellName = 'c1';
      const userName = 'test';
      const saveMealMock = jest.fn();

      onSave(meal, cellName, userName, saveMealMock);

      expect(saveMealMock).toBeCalled();
    });
  });
});
