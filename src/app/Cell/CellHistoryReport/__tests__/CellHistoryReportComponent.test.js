import React from 'react';
import { shallow } from 'enzyme';
import { CellHistoryReportComponent } from '../CellHistoryReportComponent';

describe('CellHistoryReportComponent', () => {
  let isLoadingReport;
  let goBack;

  beforeEach(() => {
    isLoadingReport = false;
    goBack = jest.fn();
  });

  const setup = () => {
    const classes = {};
    return shallow(<CellHistoryReportComponent
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
      history={{ goBack }}
    />);
  };

  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should handleBackClick', () => {
    const wrapper = setup();

    wrapper.find('#backButton').simulate('click');
    expect(goBack).toBeCalled();
  });
});
