import React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from '@material-ui/core';

import { HeaderContentComponent } from '../HeaderContentComponent';
import BailHearing1Icon from '../../../../images/BailHearing1.png';
import BailHearing2Icon from '../../../../images/BailHearing2.png';
import FingerprintingIcon from '../../../../images/Fingerprinting.png';
import MedicalVisitIcon from '../../../../images/MedicalVisit.png';
import PhoneAcceptIcon from '../../../../images/PhoneAccept.png';
import InterviewIcon from '../../../../images/Interview.png';
import BreathalyzerIcon from '../../../../images/Breathalyzer.png';
import ReleaseRoomIcon from '../../../../images/ReleaseHolding.png';
import RemandHoldingRoomIcon from '../../../../images/RemandHolding.png';

describe('HeaderContentComponent', () => {
  let usage;

  beforeEach(() => {
    usage = 'phone';
  });

  const setup = () => {
    const classes = { grid: {}, avatar: {} };
    return shallow(<HeaderContentComponent classes={classes} usage={usage} />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it.each([
    ['phone', PhoneAcceptIcon],
    ['bail hearing1', BailHearing1Icon],
    ['bail hearing2', BailHearing2Icon],
    ['medical', MedicalVisitIcon],
    ['fingerprinting', FingerprintingIcon],
    ['interview', InterviewIcon],
    ['breath test', BreathalyzerIcon],
    ['release room', ReleaseRoomIcon],
    ['remand holding room', RemandHoldingRoomIcon],
  ])(
    'should render avatar based on activity room usage',
    (activityRoomUsage, avatarSrc) => {
      usage = activityRoomUsage;
      const wrapper = setup();

      expect(wrapper.find(Avatar)).toHaveProp('src', avatarSrc);
    },
  );
});
