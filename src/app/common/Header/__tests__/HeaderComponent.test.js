import React from 'react';
import { shallow } from 'enzyme';

import { HeaderComponent } from '../HeaderComponent';

describe('HeaderComponent', () => {
  let classes;
  let versions;

  beforeEach(() => {
    classes = {
      heading: 'heading',
    };
    versions = [
      {
        name: 'Cell App',
        version: '1.0.0',
      },
      {
        name: 'Detainee Management Service',
        version: '1.0.0',
      },
      {
        name: 'EPROS Service',
        version: '1.0.0',
      },
    ];
  });

  const setup = () => shallow(<HeaderComponent classes={classes} versions={versions} />);

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
