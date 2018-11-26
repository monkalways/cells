import React from 'react';
import { shallow } from 'enzyme';

import { OverviewComponent } from '../OverviewComponent';
import Loading from '../../../common/Loading';
import CellDetaineeCard from '../CellDetaineeCard';

describe('OverviewComponent', () => {
  let cellDetainees;
  let isCellDetaineesLoaded;
  let isAuthenticated;
  let cellName;
  let getCellDetainees;
  let handleSignIn;

  beforeEach(() => {
    cellDetainees = [];
    isCellDetaineesLoaded = false;
    isAuthenticated = false;
    cellName = 'c1';
    getCellDetainees = jest.fn();
    handleSignIn = jest.fn();
  });

  const setup = () => shallow(<OverviewComponent
    cellDetainees={cellDetainees}
    isCellDetaineesLoaded={isCellDetaineesLoaded}
    isAuthenticated={isAuthenticated}
    cellName={cellName}
    getCellDetainees={getCellDetainees}
    handleSignIn={handleSignIn}
  />);

  it('should render cell detainee cards when cell detainees are loaded', () => {
    cellDetainees = [
      {
        id: '123',
      },
      {
        id: '456',
      },
    ];
    isCellDetaineesLoaded = true;

    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(CellDetaineeCard)).toExist();
  });

  it('should render Loading component when cell detainees are not loaded', () => {
    isCellDetaineesLoaded = false;
    const wrapper = setup();
    expect(wrapper.find(Loading)).toExist();
  });

  it('should get cell detainees during componentDidMount', () => {
    const wrapper = setup();
    wrapper.instance().componentDidMount();

    expect(getCellDetainees).toBeCalledWith(cellName);
  });
});
