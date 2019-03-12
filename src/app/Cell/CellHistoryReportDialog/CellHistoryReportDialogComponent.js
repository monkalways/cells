import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { subDays } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from 'material-ui-pickers';

import Loading from '../../common/Loading';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  isLoadingReport: PropTypes.bool.isRequired,
  handleLoadReport: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export class CellHistoryReportDialogComponent extends Component {
  state = {
    startTime: subDays(Date.now(), 1),
    endTime: Date.now(),
    error: null,
  };

  handleClose = () => {
    const { handleCloseModal } = this.props;
    handleCloseModal();
  };

  handleStartTimeChange = (startTime) => {
    const { endTime } = this.state;
    if (startTime >= endTime) {
      this.setState({
        error: 'Start Date/Time must be before End Date/Time.',
      });
      return;
    }
    this.setState({ startTime, error: null });
  };

  handleEndTimeChange = (endTime) => {
    const { startTime } = this.state;
    if (startTime >= endTime) {
      this.setState({
        error: 'End Date/Time must be after Start Date/Time.',
      });
      return;
    }
    this.setState({ endTime, error: null });
  };

  handleConfirm = () => {
    const {
      handleLoadReport,
      history,
      cellDetails,
      handleCloseModal,
    } = this.props;
    const { startTime, endTime } = this.state;
    handleLoadReport(cellDetails.name, startTime, endTime);
    handleCloseModal();
    history.push(`/cells/${cellDetails.name}/home/cell-history-report`);
  };

  render() {
    const { isModalOpen, isLoadingReport, classes } = this.props;
    const { startTime, endTime, error } = this.state;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Dialog
          open={isModalOpen}
          onClose={this.handleClose}
          disableBackdropClick={isLoadingReport}
          disableEscapeKeyDown={isLoadingReport}
        >
          <DialogTitle>
            Specify start and end times for the Cell History Report:
          </DialogTitle>
          {isLoadingReport ? (
            <DialogContent>
              <Loading size={50} />
            </DialogContent>
          ) : (
            <DialogContent>
              <Grid container justify="space-around">
                <Grid item xs={12}>
                  <FormControl className={classes.formControl}>
                    <DatePicker
                      autoOk
                      disableFuture
                      margin="normal"
                      label="Start Date"
                      format="MMM dd, yyyy"
                      variant="outlined"
                      value={startTime}
                      onChange={this.handleStartTimeChange}
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TimePicker
                      autoOk
                      margin="normal"
                      label="Start Time"
                      variant="outlined"
                      value={startTime}
                      onChange={this.handleStartTimeChange}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl className={classes.formControl}>
                    <DatePicker
                      autoOk
                      disableFuture
                      margin="normal"
                      format="MMM dd, yyyy"
                      label="End Date"
                      variant="outlined"
                      value={endTime}
                      onChange={this.handleEndTimeChange}
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TimePicker
                      autoOk
                      margin="normal"
                      label="End Time"
                      variant="outlined"
                      value={endTime}
                      onChange={this.handleEndTimeChange}
                    />
                  </FormControl>
                </Grid>
                {error && (
                  <Grid item xs={12}>
                    <FormHelperText error className={classes.errorText}>
                      {error}
                    </FormHelperText>
                  </Grid>
                )}
              </Grid>
            </DialogContent>
          )}
          <DialogActions>
            <Button
              id="cancelButton"
              onClick={this.handleClose}
              color="primary"
              disabled={isLoadingReport}
            >
              Cancel
            </Button>
            <Button
              id="loadReportButton"
              onClick={this.handleConfirm}
              color="primary"
              variant="contained"
              autoFocus
              disabled={isLoadingReport}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </MuiPickersUtilsProvider>
    );
  }
}

CellHistoryReportDialogComponent.propTypes = propTypes;

export default compose(
  withStyles((theme) => ({
    formControl: {
      margin: theme.spacing.unit,
    },
    errorText: {
      fontSize: theme.typography.fontSize * 1.2,
    },
  })),
  withRouter,
)(CellHistoryReportDialogComponent);
