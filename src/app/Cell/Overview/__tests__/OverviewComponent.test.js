import React from 'react';
import { shallow } from 'enzyme';

import { OverviewComponent } from '../OverviewComponent';
import Loading from '../../../common/Loading';
import CellDetaineeCard from '../CellDetaineeCard';

describe('OverviewComponent', () => {
  let cellDetainees;
  let cellName;
  let handleSignIn;
  let getCellDetainees;
  let isAuthenticated;
  let isAnyDetaineeUnderMedication;
  let isCellDetaineesLoaded;

  beforeEach(() => {
    cellDetainees = [];
    cellName = 'c1';
    getCellDetainees = jest.fn();
    handleSignIn = jest.fn();
    isAnyDetaineeUnderMedication = false;
    isAuthenticated = false;
    isCellDetaineesLoaded = false;
  });

  const setup = () => shallow(<OverviewComponent
    cellDetainees={cellDetainees}
    cellName={cellName}
    getCellDetainees={getCellDetainees}
    handleSignIn={handleSignIn}
    isAuthenticated={isAuthenticated}
    isAnyDetaineeUnderMedication={isAnyDetaineeUnderMedication}
    isCellDetaineesLoaded={isCellDetaineesLoaded}
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

    expect(getCellDetainees).toBeCalledWith(cellName, isAuthenticated);
  });

  it('should get cell detainees if cell name is changed during componentDidUpdate', () => {
    const prevProps = {
      cellName: 'g1',
      isAuthenticated,
    };
    const wrapper = setup();
    getCellDetainees.mockReset();

    wrapper.instance().componentDidUpdate(prevProps);

    expect(getCellDetainees).toBeCalledWith(cellName, isAuthenticated);
  });

  it('should get cell detainees if isAuthenticated is changed during componentDidUpdate', () => {
    const prevProps = {
      cellName,
      isAuthenticated: !isAuthenticated,
    };
    const wrapper = setup();
    getCellDetainees.mockReset();

    wrapper.instance().componentDidUpdate(prevProps);

    expect(getCellDetainees).toBeCalledWith(cellName, isAuthenticated);
  });

  it('should get cell detainees if neither cell name or isAuthenticated is changed during componentDidUpdate', () => {
    const prevProps = {
      cellName,
      isAuthenticated,
    };
    const wrapper = setup();
    getCellDetainees.mockReset();

    wrapper.instance().componentDidUpdate(prevProps);

    expect(getCellDetainees).not.toBeCalled();
  });
});
