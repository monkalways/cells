import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { CellHistoryReportDialogComponent } from '../CellHistoryReportDialogComponent';

describe('CellHistoryReportDialogComponent', () => {
  let name;
  let isModalOpen;
  let isLoadingReport;
  let handleLoadReport;
  let handleCloseModal;
  let push;

  beforeEach(() => {
    name = 'c1';
    handleLoadReport = jest.fn();
    handleCloseModal = jest.fn();
    isModalOpen = false;
    isLoadingReport = false;
    push = jest.fn();

    Date.now = jest.fn(() => new Date(Date.UTC(2019, 2, 12, 0)));
  });

  const setup = () => {
    const classes = {};
    return shallow(<CellHistoryReportDialogComponent
      classes={classes}
      cellDetails={{ name }}
      isModalOpen={isModalOpen}
      isLoadingReport={isLoadingReport}
      handleLoadReport={handleLoadReport}
      handleCloseModal={handleCloseModal}
      history={{ push }}
    />);
  };

  it('should render', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should set initial state', () => {
    const wrapper = setup();
    expect(wrapper.state().startTime).toEqual(new Date(Date.UTC(2019, 2, 11, 0)));
    expect(wrapper.state().endTime).toEqual(new Date(Date.UTC(2019, 2, 12, 0)));
    expect(wrapper.state().endTime - wrapper.state().startTime).toBe(8.64e7);
    expect(wrapper.state().error).toBeNull();
  });

  it('should handleClose', () => {
    const wrapper = setup();

    wrapper.find(Dialog).simulate('close');
    expect(handleCloseModal).toBeCalled();
  });

  it('should handleStartTimeChange with valid date change', () => {
    const wrapper = setup();
    const newStartTime = new Date(Date.UTC(2019, 2, 10, 0));

    wrapper.find({ label: 'Start Date' }).simulate('change', newStartTime);

    expect(wrapper.state().startTime).toBe(newStartTime);
    expect(wrapper.state().error).toBeNull();
  });

  it('should handleStartTimeChange with invalid date change', () => {
    const wrapper = setup();
    const newStartTime = new Date(Date.UTC(2019, 2, 13, 0));

    wrapper.find({ label: 'Start Date' }).simulate('change', newStartTime);

    expect(wrapper.state().startTime).toEqual(new Date(Date.UTC(2019, 2, 11, 0)));
    expect(wrapper.state().error).toBe('Start Date/Time must be before End Date/Time.');
  });

  it('should handleStartTimeChange with valid time change', () => {
    const wrapper = setup();
    const newStartTime = new Date(Date.UTC(2019, 2, 11, 1));

    wrapper.find({ label: 'Start Time' }).simulate('change', newStartTime);

    expect(wrapper.state().startTime).toBe(newStartTime);
    expect(wrapper.state().error).toBeNull();
  });

  it('should handleStartTimeChange with invalid time change', () => {
    const wrapper = setup();
    const newStartTime = new Date(Date.UTC(2019, 2, 12, 1));

    wrapper.find({ label: 'Start Time' }).simulate('change', newStartTime);

    expect(wrapper.state().startTime).toEqual(new Date(Date.UTC(2019, 2, 11, 0)));
    expect(wrapper.state().error).toBe('Start Date/Time must be before End Date/Time.');
  });

  it('should handleEndTimeChange with valid date change', () => {
    const wrapper = setup();
    const newEndTime = new Date(Date.UTC(2019, 2, 13, 0));

    wrapper.find({ label: 'End Date' }).simulate('change', newEndTime);

    expect(wrapper.state().endTime).toBe(newEndTime);
    expect(wrapper.state().error).toBeNull();
  });

  it('should handleEndTimeChange with invalid date change', () => {
    const wrapper = setup();
    const newEndTime = new Date(Date.UTC(2019, 2, 11, 0));

    wrapper.find({ label: 'End Date' }).simulate('change', newEndTime);

    expect(wrapper.state().endTime).toEqual(new Date(Date.UTC(2019, 2, 12, 0)));
    expect(wrapper.state().error).toBe('End Date/Time must be after Start Date/Time.');
  });

  it('should handleEndTimeChange with valid time change', () => {
    const wrapper = setup();
    const newEndTime = new Date(Date.UTC(2019, 2, 11, 1));

    wrapper.find({ label: 'End Time' }).simulate('change', newEndTime);

    expect(wrapper.state().endTime).toBe(newEndTime);
    expect(wrapper.state().error).toBeNull();
  });

  it('should handleEndTimeChange with invalid time change', () => {
    const wrapper = setup();
    const newEndTime = new Date(Date.UTC(2019, 2, 10, 1));

    wrapper.find({ label: 'End Time' }).simulate('change', newEndTime);

    expect(wrapper.state().endTime).toEqual(new Date(Date.UTC(2019, 2, 12, 0)));
    expect(wrapper.state().error).toBe('End Date/Time must be after Start Date/Time.');
  });

  it('should handleConfirm', () => {
    name = 'c2';
    const wrapper = setup();

    // last Button is the confirm button
    wrapper
      .find(Button)
      .last()
      .simulate('click');

    const expectedStartTime = new Date(Date.UTC(2019, 2, 11, 0));
    const expectedEndTime = new Date(Date.UTC(2019, 2, 12, 0));
    expect(handleLoadReport).toBeCalledWith(
      name,
      expectedStartTime,
      expectedEndTime,
    );
    expect(handleCloseModal).toBeCalled();
    expect(push).toBeCalledWith('/cells/c2/home/cell-history-report');
  });
});
