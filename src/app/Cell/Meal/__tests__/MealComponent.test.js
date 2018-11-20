import React from 'react';
import { shallow } from 'enzyme';

import { MealComponent } from '../MealComponent';
import Loading from '../../../common/Loading';

describe('MealComponent', () => {
  let cellDetainees;
  let isCellDetaineesLoaded;
  let isAuthenticated;
  let userName;
  let cellName;
  let getCellDetainees;
  let meal;
  let isSavingMeal;
  let acceptMeal;
  let rejectMeal;
  let notApplicableMeal;
  let acceptMealAll;
  let rejectMealAll;
  let notApplicableMealAll;
  let onSave;

  beforeEach(() => {
    cellDetainees = [];
    isCellDetaineesLoaded = false;
    isAuthenticated = false;
    userName = null;
    cellName = 'c1';
    getCellDetainees = jest.fn();
    meal = {};
    isSavingMeal = false;
    acceptMeal = jest.fn();
    rejectMeal = jest.fn();
    notApplicableMeal = jest.fn();
    acceptMealAll = jest.fn();
    rejectMealAll = jest.fn();
    notApplicableMealAll = jest.fn();
    onSave = jest.fn();
  });

  const setup = () => shallow(<MealComponent
    cellDetainees={cellDetainees}
    isCellDetaineesLoaded={isCellDetaineesLoaded}
    isAuthenticated={isAuthenticated}
    userName={userName}
    cellName={cellName}
    getCellDetainees={getCellDetainees}
    meal={meal}
    isSavingMeal={isSavingMeal}
    acceptMeal={acceptMeal}
    rejectMeal={rejectMeal}
    notApplicableMeal={notApplicableMeal}
    acceptMealAll={acceptMealAll}
    rejectMealAll={rejectMealAll}
    notApplicableMealAll={notApplicableMealAll}
    onSave={onSave}
  />);

  it('should render cell detainee cards when cell detainees are loaded and the app is not saving meal', () => {
    cellDetainees = [
      {
        id: '123',
      },
      {
        id: '456',
      },
    ];
    meal = {
      123: {
        accept: true,
        reject: false,
        notApplicable: false,
      },
      456: {
        accept: true,
        reject: false,
        notApplicable: false,
      },
    };
    isCellDetaineesLoaded = true;
    isSavingMeal = false;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Loading component when cell detainees are not loaded', () => {
    isCellDetaineesLoaded = false;
    const wrapper = setup();
    expect(wrapper.find(Loading)).toExist();
  });

  it('should render Loading component when cell detainees are loaded but the app is saving meal', () => {
    isCellDetaineesLoaded = true;
    isSavingMeal = true;
    const wrapper = setup();
    expect(wrapper.find(Loading)).toExist();
  });

  it('should get cell detainees during componentDidMount', () => {
    const wrapper = setup();
    wrapper.instance().componentDidMount();

    expect(getCellDetainees).toBeCalledWith(cellName);
  });

  describe('getCellCheckRadioButtonValue', () => {
    it('should return empty string if cell detainees are not loaded', () => {
      isCellDetaineesLoaded = false;

      const wrapper = setup();
      const result = wrapper.instance().getMealRadioButtonValue();

      expect(result).toEqual('');
    });

    it('should return empty string if meal data is empty', () => {
      isCellDetaineesLoaded = true;
      meal = {};

      const wrapper = setup();
      const result = wrapper.instance().getMealRadioButtonValue();

      expect(result).toEqual('');
    });

    it('should return "accept" if all in-cell detainees "accept meal"', () => {
      isCellDetaineesLoaded = true;
      cellDetainees = [
        {
          id: '123',
          location: null,
        },
        {
          id: '456',
          location: null,
        },
        {
          id: '789',
          location: 'Phone - In Transit',
        },
      ];
      meal = {
        123: {
          accept: true,
          reject: false,
          notApplicable: false,
        },
        456: {
          accept: true,
          reject: false,
          notApplicable: false,
        },
        789: {
          accept: false,
          reject: true,
          notApplicable: false,
        },
      };
      const wrapper = setup();
      const result = wrapper.instance().getMealRadioButtonValue();

      expect(result).toEqual('accept');
    });

    it('should return "reject" if all in-cell detainees "reject meal"', () => {
      isCellDetaineesLoaded = true;
      cellDetainees = [
        {
          id: '123',
          location: null,
        },
        {
          id: '456',
          location: null,
        },
        {
          id: '789',
          location: 'Phone - In Transit',
        },
      ];
      meal = {
        123: {
          accept: false,
          reject: true,
          notApplicable: false,
        },
        456: {
          accept: false,
          reject: true,
          notApplicable: false,
        },
        789: {
          accept: true,
          reject: false,
          notApplicable: false,
        },
      };
      const wrapper = setup();
      const result = wrapper.instance().getMealRadioButtonValue();

      expect(result).toEqual('reject');
    });

    it('should return "not-applicable" if all in-cell detainees are "not applicable"', () => {
      isCellDetaineesLoaded = true;
      cellDetainees = [
        {
          id: '123',
          location: null,
        },
        {
          id: '456',
          location: null,
        },
        {
          id: '789',
          location: 'Phone - In Transit',
        },
      ];
      meal = {
        123: {
          accept: false,
          reject: false,
          notApplicable: true,
        },
        456: {
          accept: false,
          reject: false,
          notApplicable: true,
        },
        789: {
          accept: false,
          reject: true,
          notApplicable: false,
        },
      };
      const wrapper = setup();
      const result = wrapper.instance().getMealRadioButtonValue();

      expect(result).toEqual('not-applicable');
    });

    it('should return empty if some in-cell detainees "accept meal" and others "reject meal"', () => {
      isCellDetaineesLoaded = true;
      cellDetainees = [
        {
          id: '123',
          location: null,
        },
        {
          id: '456',
          location: null,
        },
        {
          id: '789',
          location: 'Phone - In Transit',
        },
      ];
      meal = {
        123: {
          accept: false,
          reject: true,
          notApplicable: false,
        },
        456: {
          accept: true,
          reject: false,
          notApplicable: false,
        },
        789: {
          accept: false,
          reject: false,
          notApplicable: true,
        },
      };
      const wrapper = setup();
      const result = wrapper.instance().getMealRadioButtonValue();

      expect(result).toEqual('');
    });
  });

  describe('isSaveDisabled', () => {
    it('should disable save if cell detainees are not loaded', () => {
      isCellDetaineesLoaded = false;
      const wrapper = setup();

      const result = wrapper.instance().isSaveDisabled();

      expect(result).toBe(true);
    });

    it('should disable save if meal data is empty', () => {
      isCellDetaineesLoaded = true;
      cellDetainees = [
        {
          id: '123',
          location: null,
        },
      ];
      meal = {};
      const wrapper = setup();

      const result = wrapper.instance().isSaveDisabled();

      expect(result).toBe(true);
    });

    it('should disable save if cell detainees data is empty', () => {
      isCellDetaineesLoaded = true;
      cellDetainees = [];
      meal = {
        123: {
          accept: true,
          reject: false,
          notApplicable: false,
        },
      };
      const wrapper = setup();

      const result = wrapper.instance().isSaveDisabled();

      expect(result).toBe(true);
    });

    it('should disable save if all cell detainees are not in cell', () => {
      isCellDetaineesLoaded = true;
      cellDetainees = [
        {
          id: '123',
          location: 'Phone - In Transit',
        },
        {
          id: '456',
          location: 'Phone - In Transit',
        },
      ];
      meal = {
        123: {
          accept: true,
          reject: false,
          notApplicable: false,
        },
        456: {
          accept: true,
          reject: false,
          notApplicable: false,
        },
      };
      const wrapper = setup();

      const result = wrapper.instance().isSaveDisabled();

      expect(result).toBe(true);
    });

    it('should enable save if some cell detainees are in cell', () => {
      isCellDetaineesLoaded = true;
      cellDetainees = [
        {
          id: '123',
          location: 'Phone - In Transit',
        },
        {
          id: '456',
          location: null,
        },
      ];
      meal = {
        123: {
          accept: true,
          reject: false,
          notApplicable: false,
        },
        456: {
          accept: true,
          reject: false,
          notApplicable: false,
        },
      };
      const wrapper = setup();

      const result = wrapper.instance().isSaveDisabled();

      expect(result).toBe(false);
    });
  });

  describe('handleRadioGroupChange', () => {
    it('should set all in-cell detainees accept meal if radio button group value is changed to "accept"', () => {
      cellDetainees = [
        {
          id: '123',
          location: 'Phone - In Transit',
        },
        {
          id: '456',
          location: null,
        },
      ];
      const event = {
        target: {
          value: 'accept',
        },
      };
      const wrapper = setup();
      wrapper.instance().handleRadioGroupChange(event);

      expect(acceptMealAll).toBeCalledWith([
        {
          id: '456',
          location: null,
        },
      ]);
      expect(rejectMealAll).not.toBeCalled();
      expect(notApplicableMealAll).not.toBeCalled();
    });

    it('should set all in-cell detainees reject meal if radio button group value is changed to "reject"', () => {
      cellDetainees = [
        {
          id: '123',
          location: 'Phone - In Transit',
        },
        {
          id: '456',
          location: null,
        },
      ];
      const event = {
        target: {
          value: 'reject',
        },
      };
      const wrapper = setup();
      wrapper.instance().handleRadioGroupChange(event);

      expect(rejectMealAll).toBeCalledWith([
        {
          id: '456',
          location: null,
        },
      ]);
      expect(acceptMealAll).not.toBeCalled();
      expect(notApplicableMealAll).not.toBeCalled();
    });

    it('should set all in-cell detainees not-applicable if radio button group value is changed to "not-applicable"', () => {
      cellDetainees = [
        {
          id: '123',
          location: 'Phone - In Transit',
        },
        {
          id: '456',
          location: null,
        },
      ];
      const event = {
        target: {
          value: 'not-applicable',
        },
      };
      const wrapper = setup();
      wrapper.instance().handleRadioGroupChange(event);

      expect(notApplicableMealAll).toBeCalledWith([
        {
          id: '456',
          location: null,
        },
      ]);
      expect(acceptMealAll).not.toBeCalled();
      expect(rejectMealAll).not.toBeCalled();
    });

    it('should not set any in-cell detainees if radio button group value is changed to other values than "accept", "reject" or "not-applicable"', () => {
      cellDetainees = [
        {
          id: '123',
          location: 'Phone - In Transit',
        },
        {
          id: '456',
          location: null,
        },
      ];
      const event = {
        target: {
          value: 'other',
        },
      };
      const wrapper = setup();
      wrapper.instance().handleRadioGroupChange(event);

      expect(acceptMealAll).not.toBeCalled();
      expect(rejectMealAll).not.toBeCalled();
      expect(notApplicableMealAll).not.toBeCalled();
    });
  });

  it('should handle save', () => {
    const wrapper = setup();
    wrapper.instance().handleSave();

    expect(onSave).toBeCalled();
  });
});
