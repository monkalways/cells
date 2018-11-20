import React from 'react';
import { shallow } from 'enzyme';

import { CellCheckComponent } from '../CellCheckComponent';
import Loading from '../../../common/Loading';

describe('CellCheckComponent', () => {
  let cellDetainees;
  let isCellDetaineesLoaded;
  let isAuthenticated;
  let userName;
  let cellName;
  let getCellDetainees;
  let cellCheck;
  let isSavingCellCheck;
  let visualCheck;
  let verbalCheck;
  let visualCheckAll;
  let verbalCheckAll;
  let onSave;

  beforeEach(() => {
    cellDetainees = [];
    isCellDetaineesLoaded = false;
    isAuthenticated = false;
    userName = null;
    cellName = 'c1';
    getCellDetainees = jest.fn();
    cellCheck = {};
    isSavingCellCheck = false;
    visualCheck = jest.fn();
    verbalCheck = jest.fn();
    visualCheckAll = jest.fn();
    verbalCheckAll = jest.fn();
    onSave = jest.fn();
  });

  const setup = () => shallow(<CellCheckComponent
    cellDetainees={cellDetainees}
    isCellDetaineesLoaded={isCellDetaineesLoaded}
    isAuthenticated={isAuthenticated}
    userName={userName}
    cellName={cellName}
    getCellDetainees={getCellDetainees}
    cellCheck={cellCheck}
    isSavingCellCheck={isSavingCellCheck}
    visualCheck={visualCheck}
    verbalCheck={verbalCheck}
    visualCheckAll={visualCheckAll}
    verbalCheckAll={verbalCheckAll}
    onSave={onSave}
  />);

  it('should render cell detainee cards when cell detainees are loaded and the app is not saving cell check', () => {
    cellDetainees = [
      {
        id: '123',
      },
      {
        id: '456',
      },
    ];
    cellCheck = {
      123: {
        visual: true,
        verbal: false,
      },
      456: {
        visual: true,
        verbal: false,
      },
    };
    isCellDetaineesLoaded = true;
    isSavingCellCheck = false;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Loading component when cell detainees are not loaded', () => {
    isCellDetaineesLoaded = false;
    const wrapper = setup();
    expect(wrapper.find(Loading)).toExist();
  });

  it('should render Loading component when cell detainees are loaded but the app is saving cell check', () => {
    isCellDetaineesLoaded = true;
    isSavingCellCheck = true;
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
      const result = wrapper.instance().getCellCheckRadioButtonValue();

      expect(result).toEqual('');
    });

    it('should return empty string if cell check data is empty', () => {
      isCellDetaineesLoaded = true;
      cellCheck = {};

      const wrapper = setup();
      const result = wrapper.instance().getCellCheckRadioButtonValue();

      expect(result).toEqual('');
    });

    it('should return "visual" if all cell checks of in-cell detainees are "visually checked"', () => {
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
      cellCheck = {
        123: {
          visual: true,
          verbal: false,
        },
        456: {
          visual: true,
          verbal: false,
        },
        789: {
          visual: false,
          verbal: true,
        },
      };
      const wrapper = setup();
      const result = wrapper.instance().getCellCheckRadioButtonValue();

      expect(result).toEqual('visual');
    });

    it('should return "verbal" if all cell checks of in-cell detainees are "verbally checked"', () => {
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
      cellCheck = {
        123: {
          visual: false,
          verbal: true,
        },
        456: {
          visual: false,
          verbal: true,
        },
        789: {
          visual: false,
          verbal: true,
        },
      };
      const wrapper = setup();
      const result = wrapper.instance().getCellCheckRadioButtonValue();

      expect(result).toEqual('verbal');
    });

    it('should return empty if some in-cell detainees are "verbally checked" and others are "visually checked"', () => {
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
      cellCheck = {
        123: {
          visual: true,
          verbal: false,
        },
        456: {
          visual: false,
          verbal: true,
        },
        789: {
          visual: false,
          verbal: true,
        },
      };
      const wrapper = setup();
      const result = wrapper.instance().getCellCheckRadioButtonValue();

      expect(result).toEqual('');
    });

    it('should return empty if some in-cell detainees are "verbally checked" and others are "visually checked"', () => {
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
      cellCheck = {
        123: {
          visual: true,
          verbal: false,
        },
        456: {
          visual: false,
          verbal: true,
        },
        789: {
          visual: false,
          verbal: true,
        },
      };
      const wrapper = setup();
      const result = wrapper.instance().getCellCheckRadioButtonValue();

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

    it('should disable save if cell check data is empty', () => {
      isCellDetaineesLoaded = true;
      cellDetainees = [
        {
          id: '123',
          location: null,
        },
      ];
      cellCheck = {};
      const wrapper = setup();

      const result = wrapper.instance().isSaveDisabled();

      expect(result).toBe(true);
    });

    it('should disable save if cell detainees data is empty', () => {
      isCellDetaineesLoaded = true;
      cellDetainees = [];
      cellCheck = {
        123: {
          visual: true,
          verbal: false,
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
      cellCheck = {
        123: {
          visual: false,
          verbal: false,
        },
        456: {
          visual: false,
          verbal: false,
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
      cellCheck = {
        123: {
          visual: false,
          verbal: false,
        },
        456: {
          visual: true,
          verbal: false,
        },
      };
      const wrapper = setup();

      const result = wrapper.instance().isSaveDisabled();

      expect(result).toBe(false);
    });
  });

  describe('handleRadioGroupChange', () => {
    it('should visual check all in-cell detainees if radio button group value is changed to "visual"', () => {
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
          value: 'visual',
        },
      };
      const wrapper = setup();
      wrapper.instance().handleRadioGroupChange(event);

      expect(visualCheckAll).toBeCalledWith([
        {
          id: '456',
          location: null,
        },
      ]);
      expect(verbalCheckAll).not.toBeCalled();
    });

    it('should verbal check all in-cell detainees if radio button group value is changed to "verbal"', () => {
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
          value: 'verbal',
        },
      };
      const wrapper = setup();
      wrapper.instance().handleRadioGroupChange(event);

      expect(verbalCheckAll).toBeCalledWith([
        {
          id: '456',
          location: null,
        },
      ]);
      expect(visualCheckAll).not.toBeCalled();
    });

    it('should not cell check any in-cell detainees if radio button group value is changed to other values than "visual" and "verbal"', () => {
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

      expect(visualCheckAll).not.toBeCalled();
      expect(verbalCheckAll).not.toBeCalled();
    });
  });

  it('should handle save', () => {
    const wrapper = setup();
    wrapper.instance().handleSave();

    expect(onSave).toBeCalled();
  });
});
