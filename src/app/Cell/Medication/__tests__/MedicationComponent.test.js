import React from 'react';
import { shallow } from 'enzyme';

import { MedicationComponent } from '../MedicationComponent';
import Loading from '../../../common/Loading';

describe('MedicationComponent', () => {
  let cellDetainees;
  let isCellDetaineesLoaded;
  let isAuthenticated;
  let userName;
  let cellName;
  let getCellDetainees;
  let medication;
  let isSavingMedication;
  let acceptMedication;
  let rejectMedication;
  let notApplicableMedication;
  let acceptMedicationAll;
  let rejectMedicationAll;
  let notApplicableMedicationAll;
  let onSave;

  beforeEach(() => {
    cellDetainees = [];
    isCellDetaineesLoaded = false;
    isAuthenticated = false;
    userName = null;
    cellName = 'c1';
    getCellDetainees = jest.fn();
    medication = {};
    isSavingMedication = false;
    acceptMedication = jest.fn();
    rejectMedication = jest.fn();
    notApplicableMedication = jest.fn();
    acceptMedicationAll = jest.fn();
    rejectMedicationAll = jest.fn();
    notApplicableMedicationAll = jest.fn();
    onSave = jest.fn();
  });

  const setup = () => shallow(<MedicationComponent
    cellDetainees={cellDetainees}
    isCellDetaineesLoaded={isCellDetaineesLoaded}
    isAuthenticated={isAuthenticated}
    userName={userName}
    cellName={cellName}
    getCellDetainees={getCellDetainees}
    medication={medication}
    isSavingMedication={isSavingMedication}
    acceptMedication={acceptMedication}
    rejectMedication={rejectMedication}
    notApplicableMedication={notApplicableMedication}
    acceptMedicationAll={acceptMedicationAll}
    rejectMedicationAll={rejectMedicationAll}
    notApplicableMedicationAll={notApplicableMedicationAll}
    onSave={onSave}
  />);

  it('should render cell detainee cards when cell detainees are loaded and the app is not saving medication', () => {
    cellDetainees = [
      {
        id: '123',
      },
      {
        id: '456',
      },
    ];
    medication = {
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
    isSavingMedication = false;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Loading component when cell detainees are not loaded', () => {
    isCellDetaineesLoaded = false;
    const wrapper = setup();
    expect(wrapper.find(Loading)).toExist();
  });

  it('should render Loading component when cell detainees are loaded but the app is saving medication', () => {
    isCellDetaineesLoaded = true;
    isSavingMedication = true;
    const wrapper = setup();
    expect(wrapper.find(Loading)).toExist();
  });

  it('should get cell detainees during componentDidMount', () => {
    const wrapper = setup();
    wrapper.instance().componentDidMount();

    expect(getCellDetainees).toBeCalledWith(cellName);
  });

  describe('getMedicationRadioButtonValue', () => {
    it('should return empty string if cell detainees are not loaded', () => {
      isCellDetaineesLoaded = false;

      const wrapper = setup();
      const result = wrapper.instance().getMedicationRadioButtonValue();

      expect(result).toEqual('');
    });

    it('should return empty string if medication data is empty', () => {
      isCellDetaineesLoaded = true;
      medication = {};

      const wrapper = setup();
      const result = wrapper.instance().getMedicationRadioButtonValue();

      expect(result).toEqual('');
    });

    it('should return "accept" if all in-cell detainees "accept medication"', () => {
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
      medication = {
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
      const result = wrapper.instance().getMedicationRadioButtonValue();

      expect(result).toEqual('accept');
    });

    it('should return "reject" if all in-cell detainees "reject medication"', () => {
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
      medication = {
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
      const result = wrapper.instance().getMedicationRadioButtonValue();

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
      medication = {
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
      const result = wrapper.instance().getMedicationRadioButtonValue();

      expect(result).toEqual('not-applicable');
    });

    it('should return empty if some in-cell detainees "accept medication" and others "reject medication"', () => {
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
      medication = {
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
      const result = wrapper.instance().getMedicationRadioButtonValue();

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

    it('should disable save if medication data is empty', () => {
      isCellDetaineesLoaded = true;
      cellDetainees = [
        {
          id: '123',
          location: null,
        },
      ];
      medication = {};
      const wrapper = setup();

      const result = wrapper.instance().isSaveDisabled();

      expect(result).toBe(true);
    });

    it('should disable save if cell detainees data is empty', () => {
      isCellDetaineesLoaded = true;
      cellDetainees = [];
      medication = {
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
      medication = {
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
      medication = {
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
    it('should set all in-cell detainees accept medication if radio button group value is changed to "accept"', () => {
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

      expect(acceptMedicationAll).toBeCalledWith([
        {
          id: '456',
          location: null,
        },
      ]);
      expect(rejectMedicationAll).not.toBeCalled();
      expect(notApplicableMedicationAll).not.toBeCalled();
    });

    it('should set all in-cell detainees reject medication if radio button group value is changed to "reject"', () => {
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

      expect(rejectMedicationAll).toBeCalledWith([
        {
          id: '456',
          location: null,
        },
      ]);
      expect(acceptMedicationAll).not.toBeCalled();
      expect(notApplicableMedicationAll).not.toBeCalled();
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

      expect(notApplicableMedicationAll).toBeCalledWith([
        {
          id: '456',
          location: null,
        },
      ]);
      expect(acceptMedicationAll).not.toBeCalled();
      expect(rejectMedicationAll).not.toBeCalled();
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

      expect(acceptMedicationAll).not.toBeCalled();
      expect(rejectMedicationAll).not.toBeCalled();
      expect(notApplicableMedicationAll).not.toBeCalled();
    });
  });

  it('should handle save', () => {
    const wrapper = setup();
    wrapper.instance().handleSave();

    expect(onSave).toBeCalled();
  });
});
