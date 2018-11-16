import types from '../types';
import actions from '../actions';

describe('Cell actions', () => {
  it('should create getCellDetailsSuccess action object', () => {
    const cellDetails = {};
    const result = actions.getCellDetailsSuccess(cellDetails);
    expect(result).toEqual({
      type: types.GET_CELL_DETAILS_SUCCESS,
      cellDetails,
    });
  });

  it('should create getCellDetainees action object', () => {
    const result = actions.getCellDetainees();
    expect(result).toEqual({
      type: types.GET_CELL_DETAINEES,
    });
  });

  it('should create getCellDetaineesSuccess action object', () => {
    const cellDetainees = [];
    const result = actions.getCellDetaineesSuccess(cellDetainees);
    expect(result).toEqual({
      type: types.GET_CELL_DETAINEES_SUCCESS,
      cellDetainees,
    });
  });

  it('should create visualCheck action object', () => {
    const detainee = {};
    const result = actions.visualCheck(detainee);
    expect(result).toEqual({
      type: types.VISUAL_CHECK,
      detainee,
    });
  });

  it('should create verbalCheck action object', () => {
    const detainee = {};
    const result = actions.verbalCheck(detainee);
    expect(result).toEqual({
      type: types.VERBAL_CHECK,
      detainee,
    });
  });

  it('should create saveCellCheck action object', () => {
    const result = actions.saveCellCheck();
    expect(result).toEqual({
      type: types.SAVE_CELL_CHECK,
    });
  });

  it('should create saveCellCheckSuccess action object', () => {
    const result = actions.saveCellCheckSuccess();
    expect(result).toEqual({
      type: types.SAVE_CELL_CHECK_SUCCESS,
    });
  });

  it('should create acceptMeal action object', () => {
    const detainee = {};
    const result = actions.acceptMeal(detainee);
    expect(result).toEqual({
      type: types.ACCEPT_MEAL,
      detainee,
    });
  });

  it('should create rejectMeal action object', () => {
    const detainee = {};
    const result = actions.rejectMeal(detainee);
    expect(result).toEqual({
      type: types.REJECT_MEAL,
      detainee,
    });
  });

  it('should create notApplicableMeal action object', () => {
    const detainee = {};
    const result = actions.notApplicableMeal(detainee);
    expect(result).toEqual({
      type: types.NOT_APPLICABLE_MEAL,
      detainee,
    });
  });

  it('should create saveMeal action object', () => {
    const result = actions.saveMeal();
    expect(result).toEqual({
      type: types.SAVE_MEAL,
    });
  });

  it('should create saveMealSuccess action object', () => {
    const result = actions.saveMealSuccess();
    expect(result).toEqual({
      type: types.SAVE_MEAL_SUCCESS,
    });
  });

  it('should create acceptMedication action object', () => {
    const detainee = {};
    const result = actions.acceptMedication(detainee);
    expect(result).toEqual({
      type: types.ACCEPT_MEDICATION,
      detainee,
    });
  });

  it('should create rejectMedication action object', () => {
    const detainee = {};
    const result = actions.rejectMedication(detainee);
    expect(result).toEqual({
      type: types.REJECT_MEDICATION,
      detainee,
    });
  });

  it('should create notApplicableMedication action object', () => {
    const detainee = {};
    const result = actions.notApplicableMedication(detainee);
    expect(result).toEqual({
      type: types.NOT_APPLICABLE_MEDICATION,
      detainee,
    });
  });

  it('should create saveMedication action object', () => {
    const result = actions.saveMedication();
    expect(result).toEqual({
      type: types.SAVE_MEDICATION,
    });
  });

  it('should create saveMedicationSuccess action object', () => {
    const result = actions.saveMedicationSuccess();
    expect(result).toEqual({
      type: types.SAVE_MEDICATION_SUCCESS,
    });
  });
});
