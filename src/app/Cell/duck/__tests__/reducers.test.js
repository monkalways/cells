import {
  detailsReducer,
  detaineesReducer,
  cellCheckReducer,
  mealReducer,
  medicationReducer,
  menuReducer,
  modalReducer,
} from '../reducers';
import types from '../types';
import { types as authenticationTypes } from '../../../Authentication/duck';

describe('Cell reducers', () => {
  describe('detailsReducer', () => {
    it('should setup default state', () => {
      const result = detailsReducer(undefined, { type: '@@INIT' });
      expect(result).toBeNull();
    });

    it('should update state by GET_CELL_DETAILS_SUCCESS', () => {
      const cellDetails = {
        name: 'c1',
        cellStatus: 'Allocated',
      };
      const result = detailsReducer(undefined, {
        type: types.GET_CELL_DETAILS_SUCCESS,
        cellDetails,
      });
      expect(result).toEqual(cellDetails);
    });

    it('should update state by authentication action type LOG_OUT', () => {
      const result = detailsReducer(undefined, {
        type: authenticationTypes.LOG_OUT,
      });
      expect(result).toBeNull();
    });
  });

  describe('detaineesReducer', () => {
    it('should setup default state', () => {
      const defaultState = {
        loaded: false,
        data: [],
      };
      const result = detaineesReducer(undefined, { type: '@@INIT' });
      expect(result).toEqual(defaultState);
    });

    it('should update state by GET_CELL_DETAINEES', () => {
      const result = detaineesReducer(undefined, {
        type: types.GET_CELL_DETAINEES,
      });
      expect(result.loaded).toBe(false);
    });

    it('should update state by GET_CELL_DETAINEES_SUCCESS', () => {
      const cellDetainees = [];
      const result = detaineesReducer(undefined, {
        type: types.GET_CELL_DETAINEES_SUCCESS,
        cellDetainees,
      });
      expect(result.loaded).toBe(true);
      expect(result.data).toEqual(cellDetainees);
    });

    it('should update state by authentication action type LOG_OUT', () => {
      const result = detaineesReducer(undefined, {
        type: authenticationTypes.LOG_OUT,
      });
      expect(result).toEqual({
        loaded: false,
        data: [],
      });
    });
  });

  describe('cellCheckReducer', () => {
    it('should setup default state', () => {
      const defaultState = {
        saving: false,
        data: {},
      };
      const result = cellCheckReducer(undefined, { type: '@@INIT' });
      expect(result).toEqual(defaultState);
    });

    it('should update state by VISUAL_CHECK', () => {
      const detainee = {
        id: '123',
      };
      const result = cellCheckReducer(undefined, {
        type: types.VISUAL_CHECK,
        detainee,
      });
      expect(result.data['123']).toEqual({
        detainee,
        visual: true,
        verbal: false,
      });
    });

    it('should update state by VERBAL_CHECK', () => {
      const detainee = {
        id: '123',
      };
      const result = cellCheckReducer(undefined, {
        type: types.VERBAL_CHECK,
        detainee,
      });
      expect(result.data['123']).toEqual({
        detainee,
        visual: false,
        verbal: true,
      });
    });

    it('should update state by SAVE_CELL_CHECK', () => {
      const result = cellCheckReducer(undefined, {
        type: types.SAVE_CELL_CHECK,
      });
      expect(result.saving).toBe(true);
    });

    it('should update state by SAVE_CELL_CHECK_SUCCESS', () => {
      const result = cellCheckReducer(undefined, {
        type: types.SAVE_CELL_CHECK_SUCCESS,
      });
      expect(result.saving).toBe(false);
      expect(result.data).toEqual({});
    });

    it('should update state by authentication action type LOG_OUT', () => {
      const result = cellCheckReducer(undefined, {
        type: authenticationTypes.LOG_OUT,
      });
      expect(result).toEqual({
        saving: false,
        data: {},
      });
    });
  });

  describe('mealReducer', () => {
    it('should setup default state', () => {
      const defaultState = {
        saving: false,
        data: {},
      };
      const result = mealReducer(undefined, { type: '@@INIT' });
      expect(result).toEqual(defaultState);
    });

    it('should update state by ACCEPT_MEAL', () => {
      const detainee = {
        id: '123',
      };
      const result = mealReducer(undefined, {
        type: types.ACCEPT_MEAL,
        detainee,
      });
      expect(result.data['123']).toEqual({
        detainee,
        accept: true,
        reject: false,
        notApplicable: false,
      });
    });

    it('should update state by REJECT_MEAL', () => {
      const detainee = {
        id: '123',
      };
      const result = mealReducer(undefined, {
        type: types.REJECT_MEAL,
        detainee,
      });
      expect(result.data['123']).toEqual({
        detainee,
        accept: false,
        reject: true,
        notApplicable: false,
      });
    });

    it('should update state by NOT_APPLICABLE_MEAL', () => {
      const detainee = {
        id: '123',
      };
      const result = mealReducer(undefined, {
        type: types.NOT_APPLICABLE_MEAL,
        detainee,
      });
      expect(result.data['123']).toEqual({
        detainee,
        accept: false,
        reject: false,
        notApplicable: true,
      });
    });

    it('should update state by SAVE_MEAL', () => {
      const result = mealReducer(undefined, {
        type: types.SAVE_MEAL,
      });
      expect(result.saving).toBe(true);
    });

    it('should update state by SAVE_MEAL_SUCCESS', () => {
      const result = mealReducer(undefined, {
        type: types.SAVE_MEAL_SUCCESS,
      });
      expect(result.saving).toBe(false);
      expect(result.data).toEqual({});
    });

    it('should update state by authentication action type LOG_OUT', () => {
      const result = mealReducer(undefined, {
        type: authenticationTypes.LOG_OUT,
      });
      expect(result).toEqual({
        saving: false,
        data: {},
      });
    });
  });

  describe('medicationReducer', () => {
    it('should setup default state', () => {
      const defaultState = {
        saving: false,
        data: {},
      };
      const result = medicationReducer(undefined, { type: '@@INIT' });
      expect(result).toEqual(defaultState);
    });

    it('should update state by ACCEPT_MEDICATION', () => {
      const detainee = {
        id: '123',
      };
      const result = medicationReducer(undefined, {
        type: types.ACCEPT_MEDICATION,
        detainee,
      });
      expect(result.data['123']).toEqual({
        detainee,
        accept: true,
        reject: false,
        notApplicable: false,
      });
    });

    it('should update state by REJECT_MEDICATION', () => {
      const detainee = {
        id: '123',
      };
      const result = medicationReducer(undefined, {
        type: types.REJECT_MEDICATION,
        detainee,
      });
      expect(result.data['123']).toEqual({
        detainee,
        accept: false,
        reject: true,
        notApplicable: false,
      });
    });

    it('should update state by NOT_APPLICABLE_MEDICATION', () => {
      const detainee = {
        id: '123',
      };
      const result = medicationReducer(undefined, {
        type: types.NOT_APPLICABLE_MEDICATION,
        detainee,
      });
      expect(result.data['123']).toEqual({
        detainee,
        accept: false,
        reject: false,
        notApplicable: true,
      });
    });

    it('should update state by SAVE_MEDICATION', () => {
      const result = medicationReducer(undefined, {
        type: types.SAVE_MEDICATION,
      });
      expect(result.saving).toBe(true);
    });

    it('should update state by SAVE_MEDICATION_SUCCESS', () => {
      const result = medicationReducer(undefined, {
        type: types.SAVE_MEDICATION_SUCCESS,
      });
      expect(result.saving).toBe(false);
      expect(result.data).toEqual({});
    });

    it('should update state by authentication action type LOG_OUT', () => {
      const result = medicationReducer(undefined, {
        type: authenticationTypes.LOG_OUT,
      });
      expect(result).toEqual({
        saving: false,
        data: {},
      });
    });
  });

  describe('menuReducer', () => {
    it('should setup default state', () => {
      const defaultState = {
        anchorElement: null,
      };
      const result = menuReducer(undefined, { type: '@@INIT' });
      expect(result).toEqual(defaultState);
    });

    it('should update state by TOGGLE_MENU_OPEN', () => {
      const anchorElement = {};
      const result = menuReducer(undefined, {
        type: types.TOGGLE_MENU_OPEN,
        payload: anchorElement,
      });
      expect(result).toEqual({
        anchorElement,
      });
    });

    it('should update state by TOGGLE_MENU_CLOSE', () => {
      const result = menuReducer(undefined, {
        type: types.TOGGLE_MENU_CLOSE,
      });
      expect(result).toEqual({
        anchorElement: null,
      });
    });
  });

  describe('modalReducer', () => {
    it('should setup default state', () => {
      const defaultState = {
        open: false,
      };
      const result = modalReducer(undefined, { type: '@@INIT' });
      expect(result).toEqual(defaultState);
    });

    it('should update state by TOGGLE_MODAL_OPEN', () => {
      const result = modalReducer(undefined, {
        type: types.TOGGLE_MODAL_OPEN,
      });
      expect(result).toEqual({
        open: true,
      });
    });

    it('should update state by TOGGLE_MODAL_CLOSE', () => {
      const result = modalReducer(undefined, {
        type: types.TOGGLE_MODAL_CLOSE,
      });
      expect(result).toEqual({
        open: false,
      });
    });
  });
});
