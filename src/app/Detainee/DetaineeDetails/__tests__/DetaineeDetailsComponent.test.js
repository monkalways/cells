import React from 'react';
import { shallow } from 'enzyme';

import { DetaineeDetailsComponent } from '../DetaineeDetailsComponent';

import PersonalInformation from '../../PersonalInformation';
import Location from '../../Location';
import Notice from '../../Notice';
import ProvidedWelfare from '../../ProvidedWelfare';
import Activities from '../../Activities';
import DetaineeAction from '../../DetaineeAction';
import Loading from '../../../common/Loading';

describe('DetaineeDetailsComponent', () => {
  let detainee;
  let isDetaineeProfileLoaded;

  beforeEach(() => {
    detainee = {
      bailHearingCount: 0,
      breathTestCount: 1,
      cautionsArray: [''],
      detentionUnitName: 'Detainee Management Unit',
      dob: '2001-01-01',
      firstName: 'Steveo',
      fingerPrintCount: 3,
      gender: 'M',
      hasWarning: false,
      id: '123',
      intakePhotoResourceUri: null,
      interviewCount: 4,
      isContagious: false,
      isSuicidal: false,
      isUnderMedication: false,
      lastName: 'Nordic',
      location: '',
      medicalCount: 5,
      mustBeKeptAlone: false,
      propertyBagNumber: null,
      telephoneAcceptedCount: 6,
      telephoneDeclinedCount: 7,
      withCaution: false,
    };
    isDetaineeProfileLoaded = false;
  });

  const setup = () => shallow(<DetaineeDetailsComponent
    detainee={detainee}
    isDetaineeProfileLoaded={isDetaineeProfileLoaded}
  />);

  it('should render if detainee profile is loaded', () => {
    isDetaineeProfileLoaded = true;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(PersonalInformation)).toExist();
    expect(wrapper.find(Location)).toExist();
    expect(wrapper.find(Notice)).toExist();
    expect(wrapper.find(ProvidedWelfare)).toExist();
    expect(wrapper.find(Activities)).toExist();
    expect(wrapper.find(DetaineeAction)).toExist();
  });

  it('should render Loading component if detainee profile is not loaded', () => {
    isDetaineeProfileLoaded = false;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Loading)).toExist();
  });
});
