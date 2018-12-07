import React from 'react';
import { shallow } from 'enzyme';

import { Avatar, Typography } from '@material-ui/core';
import { NoticeComponent } from '../NoticeComponent';

describe('NoticeComponent', () => {
  let detainee;

  beforeEach(() => {
    detainee = {
      cautionsArray: [],
      hasWarning: false,
      isContagious: false,
      isSuicidal: false,
      isUnderMedication: false,
      mustBeKeptAlone: false,
      withCaution: false,
    };
  });

  const setup = () => {
    const classes = {
      avatar: 'avatar',
      cautionText: 'cautionText',
      grid: 'grid',
      gridItem: 'gridItem',
      text: 'text',
    };
    return shallow(<NoticeComponent classes={classes} detainee={detainee} />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  describe('renderWarnings', () => {
    it('should render keep alone warning icon', () => {
      detainee.mustBeKeptAlone = true;
      const wrapper = setup();
      expect(wrapper.find(Avatar)).toHaveProp('src', 'KeepAlone.png');
    });

    it('should render suicide warning icon', () => {
      detainee.isSuicidal = true;
      const wrapper = setup();
      expect(wrapper.find(Avatar)).toHaveProp('src', 'SuicideWarning.png');
    });

    it('should render contagious warning icon', () => {
      detainee.isContagious = true;
      const wrapper = setup();
      expect(wrapper.find(Avatar)).toHaveProp('src', 'Contagious.png');
    });

    it('should render medication warning icon', () => {
      detainee.isUnderMedication = true;
      const wrapper = setup();
      expect(wrapper.find(Avatar)).toHaveProp('src', 'MedicineAccept.png');
    });

    it('should render other warning icon', () => {
      detainee.hasWarning = true;
      const wrapper = setup();
      expect(wrapper.find(Avatar)).toHaveProp('src', 'OtherWarning.png');
    });

    it('should render caution present icon and caution array', () => {
      detainee.withCaution = true;
      detainee.cautionsArray = ['V', 'M', 'E', 'D', 'A'];
      const wrapper = setup();
      expect(wrapper.find(Avatar)).toHaveProp('src', 'CautionPresent.png');
      expect(wrapper
        .find(Typography)
        .at(1)
        .html()).toContain('ADEMV');
    });
  });
});
