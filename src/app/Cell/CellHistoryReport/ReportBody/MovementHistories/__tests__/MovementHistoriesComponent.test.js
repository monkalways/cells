import React from 'react';
import { shallow } from 'enzyme';
import { Table, Typography } from '@material-ui/core';
import { MovementHistoriesComponent } from '../MovementHistoriesComponent';

describe('MovementHistoriesComponent', () => {
  let movementHistories;

  beforeEach(() => {
    movementHistories = [
      {
        time: new Date(Date.UTC(2019, 2, 11, 0)),
        detaineeName: 'Test User 2',
        sourceCellName: 'c1',
        detinationCellName: 'c2',
      },
    ];
  });

  const setup = () => {
    const classes = {};
    return shallow(<MovementHistoriesComponent
      classes={classes}
      movementHistories={movementHistories}
    />);
  };

  it('should render movement histories if movementHistories is not empty', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Table)).toExist();
  });

  it('should render error message if movementHistories is empty', () => {
    movementHistories = null;

    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper
      .find(Typography)
      .render()
      .text()).toEqual('No detainee movements in given period.');
  });
});
