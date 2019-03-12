import React from 'react';
import { shallow } from 'enzyme';
import { ReportBodyComponent } from '../ReportBodyComponent';
import Loading from '../../../../common/Loading';

describe('ReportBodyComponent', () => {
  let isLoadingReport;

  beforeEach(() => {
    isLoadingReport = false;
  });

  const setup = () => {
    const classes = {};
    return shallow(<ReportBodyComponent
      classes={classes}
      report={{
        cellName: 'c1',
        userLabel: 'Doe. J',
        lastOccupantName: 'Test User 1',
        startTime: new Date(Date.UTC(2019, 2, 11, 0)),
        endTime: new Date(Date.UTC(2019, 2, 12, 0)),
        movementHistories: [
          {
            time: new Date(Date.UTC(2019, 2, 11, 0)),
            detaineeName: 'Test User 2',
            sourceCellName: 'c1',
            detinationCellName: 'c2',
          },
        ],
      }}
      isLoadingReport={isLoadingReport}
    />);
  };

  it('should render Loading component if isLoadingReport is true', () => {
    isLoadingReport = true;

    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Loading)).toExist();
  });

  it('should render cell history report if isLoadingReport is false', () => {
    isLoadingReport = false;

    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
