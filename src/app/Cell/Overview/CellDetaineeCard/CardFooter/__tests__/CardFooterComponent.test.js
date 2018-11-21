import React from 'react';
import { shallow } from 'enzyme';

import { Avatar, Typography } from '@material-ui/core';
import { CardFooterComponent } from '../CardFooterComponent';

describe('CardFooterComponent', () => {
  let cellDetainee;
  let isAuthenticated;

  beforeEach(() => {
    cellDetainee = {
      withCaution: false,
      mustBeKeptAlone: false,
      isSuicidal: false,
      isContagious: false,
      hasWarning: false,
      isUnderMedication: false,
      cautionsArray: [],
    };
    isAuthenticated = true;
  });

  const setup = () => {
    const classes = {
      actions: 'actions',
      avatar3: 'avatar3',
      avatar6: 'avatar6',
      cautionText3: 'cautionText3',
      cautionText6: 'cautionText6',
    };
    return shallow(<CardFooterComponent
      classes={classes}
      cellDetainee={cellDetainee}
      isAuthenticated={isAuthenticated}
    />);
  };

  it('should not render any icons if not authenticated', () => {
    isAuthenticated = false;
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(Avatar)).not.toExist();
  });

  describe('renderWarnings', () => {
    it('should render keep alone warning icon', () => {
      cellDetainee.mustBeKeptAlone = true;
      const wrapper = setup();
      expect(wrapper.find(Avatar)).toHaveProp('src', 'KeepAlone.png');
    });

    it('should render suicide warning icon', () => {
      cellDetainee.isSuicidal = true;
      const wrapper = setup();
      expect(wrapper.find(Avatar)).toHaveProp('src', 'SuicideWarning.png');
    });

    it('should render contagious warning icon', () => {
      cellDetainee.isContagious = true;
      const wrapper = setup();
      expect(wrapper.find(Avatar)).toHaveProp('src', 'Contagious.png');
    });

    it('should render medication warning icon', () => {
      cellDetainee.isUnderMedication = true;
      const wrapper = setup();
      expect(wrapper.find(Avatar)).toHaveProp('src', 'MedicineAccept.png');
    });

    it('should render other warning icon', () => {
      cellDetainee.hasWarning = true;
      const wrapper = setup();
      expect(wrapper.find(Avatar)).toHaveProp('src', 'OtherWarning.png');
    });

    it('should render caution present icon and caution array', () => {
      cellDetainee.withCaution = true;
      cellDetainee.cautionsArray = ['V', 'M', 'E', 'D', 'A'];
      const wrapper = setup();
      expect(wrapper.find(Avatar)).toHaveProp('src', 'CautionPresent.png');
      expect(wrapper.find(Typography).html()).toContain('ADEMV');
    });

    it('should render avatar3 and cautionText3 class icon if there are less than or equal to 3 warnings', () => {
      cellDetainee.mustBeKeptAlone = true;
      cellDetainee.isSuicidal = true;
      cellDetainee.withCaution = true;
      cellDetainee.cautionsArray = ['V', 'M', 'E', 'D', 'A'];
      const wrapper = setup();
      expect(wrapper.find(Avatar).first()).toHaveProp('className', 'avatar3');
      expect(wrapper.find(Typography)).toHaveProp('className', 'cautionText3');
    });

    it('should render avatar6 and cautionText6 class icon if there are more than 3 warnings', () => {
      cellDetainee.mustBeKeptAlone = true;
      cellDetainee.isSuicidal = true;
      cellDetainee.isContagious = true;
      cellDetainee.withCaution = true;
      cellDetainee.cautionsArray = ['V', 'M', 'E', 'D', 'A'];
      const wrapper = setup();
      expect(wrapper.find(Avatar).first()).toHaveProp('className', 'avatar6');
      expect(wrapper.find(Typography)).toHaveProp('className', 'cautionText6');
    });
  });
});
