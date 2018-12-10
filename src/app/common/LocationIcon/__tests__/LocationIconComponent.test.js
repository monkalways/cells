import React from 'react';
import { shallow } from 'enzyme';
import constants from '../../../constants';

import { LocationIconComponent } from '../LocationIconComponent';

describe('LocationIconComponent', () => {
  let location;

  beforeEach(() => {
    location = '';
  });

  const setup = () => {
    const classes = {
      badge: 'badge',
      cornerImg: 'cornerImg',
      mainImg: 'mainImg',
    };

    return shallow(<LocationIconComponent classes={classes} location={location} />);
  };

  describe('Location Icon', () => {
    it('should render In Transit icon', () => {
      location = `Some place - ${constants.IN_TRANSIT}`;
      const wrapper = setup();
      expect(wrapper.find('img')).toHaveProp('src', 'InTransit.png');
    });
    it('should render Bail Hearing icon', () => {
      location = constants.BAIL_HEARING_IN_PROGRESS;
      const wrapper = setup();
      expect(wrapper.find('img')).toHaveProp('src', 'BailHearingGeneral.png');
    });
    it('should render Breath Test icon', () => {
      location = constants.BREATH_TEST_IN_PROGRESS;
      const wrapper = setup();
      expect(wrapper.find('img')).toHaveProp('src', 'Breathalyzer.png');
    });
    it('should render Fingerprinting icon', () => {
      location = constants.FINGERPRINTING_IN_PROGRESS;
      const wrapper = setup();
      expect(wrapper.find('img')).toHaveProp('src', 'Fingerprinting.png');
    });
    it('should render Interview icon', () => {
      location = constants.INTERVIEW_IN_PROGRESS;
      const wrapper = setup();
      expect(wrapper.find('img')).toHaveProp('src', 'Interview.png');
    });
    it('should render Medical icon', () => {
      location = constants.MEDICAL_IN_PROGRESS;
      const wrapper = setup();
      expect(wrapper.find('img')).toHaveProp('src', 'MedicalVisit.png');
    });
    it('should render Phone icon', () => {
      location = constants.PHONE_IN_PROGRESS;
      const wrapper = setup();
      expect(wrapper.find('img')).toHaveProp('src', 'PhoneAccept.png');
    });
    it('should render Cell icon', () => {
      location = '';
      const wrapper = setup();
      expect(wrapper.find('img')).toHaveProp('src', 'InCell.png');
    });
  });

  describe('Transit Destination Icon', () => {
    it('should render Breath Test icon', () => {
      location = constants.BREATH_TEST_IN_TRANSIT;
      const wrapper = setup();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render Bail Hearing icon', () => {
      location = constants.BAIL_HEARING_IN_TRANSIT;
      const wrapper = setup();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render Cell icon', () => {
      location = constants.CELL_IN_TRANSIT;
      const wrapper = setup();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render Fingerprinting icon', () => {
      location = constants.FINGERPRINTING_IN_TRANSIT;
      const wrapper = setup();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render Interview icon', () => {
      location = constants.INTERVIEW_IN_TRANSIT;
      const wrapper = setup();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render Medical icon', () => {
      location = constants.MEDICAL_IN_TRANSIT;
      const wrapper = setup();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render Phone icon', () => {
      location = constants.PHONE_IN_TRANSIT;
      const wrapper = setup();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render Release Holding icon', () => {
      location = constants.RELEASE_HOLDING_IN_TRANSIT;
      const wrapper = setup();
      expect(wrapper).toMatchSnapshot();
    });
    it('should render Remand Holding icon', () => {
      location = constants.REMAND_HOLDING_IN_TRANSIT;
      const wrapper = setup();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
