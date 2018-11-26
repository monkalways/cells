import React from 'react';
import { shallow } from 'enzyme';

import { Avatar } from '@material-ui/core';
import { CellDetaineeCardHeaderComponent } from '../CellDetaineeCardHeaderComponent';

import InCellIcon from '../../../../images/InCell.png';
import InTransitIcon from '../../../../images/InTransit.png';
import BailHearingGeneralIcon from '../../../../images/BailHearingGeneral.png';
import FingerprintingIcon from '../../../../images/Fingerprinting.png';
import MedicalVisitIcon from '../../../../images/MedicalVisit.png';
import PhoneAcceptIcon from '../../../../images/PhoneAccept.png';

describe('CellDetaineeCardHeaderComponent', () => {
  let classes;
  let cellDetainee;

  beforeEach(() => {
    classes = {
      header: 'header',
      heading: 'heading',
      subtitle: 'subtitle',
      avatar: 'avatar',
    };
    cellDetainee = {
      firstName: 'John',
      lastName: 'Smith',
      division: ['EPS'],
    };
  });

  const setup = () => shallow(<CellDetaineeCardHeaderComponent
    classes={classes}
    cellDetainee={cellDetainee}
  />);

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it.each([
    ['phone - in progress', PhoneAcceptIcon],
    ['medical - in progress', MedicalVisitIcon],
    ['fingerprinting - in progress', FingerprintingIcon],
    ['bail hearing - in progress', BailHearingGeneralIcon],
    ['phone - in transit', InTransitIcon],
    ['medical - in transit', InTransitIcon],
    ['fingerprinting - in transit', InTransitIcon],
    ['bail hearing - in transit', InTransitIcon],
    ['other', InCellIcon],
    [null, InCellIcon],
  ])(
    'should render avatar based on cell detainee location',
    (location, avatarSrc) => {
      cellDetainee.location = location;
      const wrapper = setup();

      expect(wrapper.find(Avatar)).toHaveProp('src', avatarSrc);
    },
  );
});
