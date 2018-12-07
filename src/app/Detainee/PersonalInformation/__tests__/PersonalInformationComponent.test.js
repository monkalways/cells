import React from 'react';
import { shallow } from 'enzyme';

import { PersonalInformationComponent } from '../PersonalInformationComponent';

describe('PersonalInformationComponent', () => {
  let detainee;

  beforeEach(() => {
    detainee = {
      detentionUnitName: 'detentionUnitName',
      dob: 'dob',
      firstName: 'firstName',
      gender: 'gender',
      lastName: 'lastName',
      propertyBagNumber: 'propertyBagNumber',
    };
  });

  const setup = () => {
    const classes = {
      img: 'img',
      test: 'text',
    };

    return shallow(<PersonalInformationComponent classes={classes} detainee={detainee} />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render "detainee.PNG" image if detainee photo is not available', () => {
    const wrapper = setup();

    expect(wrapper.find('img')).toHaveProp('src', 'detainee.PNG');
  });

  it('should render detainee photo if authenticated and the detainee photo is available', () => {
    detainee.intakePhotoResourceUri = 'john-smith-intake-photo.JPEG';
    const wrapper = setup();

    expect(wrapper.find('img')).toHaveProp(
      'src',
      'john-smith-intake-photo.JPEG',
    );
  });
});
