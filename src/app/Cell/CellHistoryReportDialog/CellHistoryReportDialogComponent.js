import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

import { red } from '@material-ui/core/colors';
import Loading from '../../common/Loading';

const propTypes = {
  cellDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  isLoadingReport: PropTypes.bool.isRequired,
  handleLoadReport: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

class CellHistoryReportDialogComponent extends Component {
  state = {
    // The first commit of Material-UI
    startDate: subDays(new Date(), 1),
    endDate: new Date(),
    error: null,
  };

  handleClose = () => {
    const { handleCloseModal } = this.props;
    handleCloseModal();
  };

  handleStartDateChange = (startDate) => {
    const { endDate } = this.state;
    if (startDate >= endDate) {
      this.setState({
        error: 'Start Date/Time must be before End Date/Time.',
      });
      return;
    }
    this.setState({ startDate, error: null });
  };

  handleEndDateChange = (endDate) => {
    const { startDate } = this.state;
    if (startDate >= endDate) {
      this.setState({
        error: 'End Date/Time must be after Start Date/Time.',
      });
      return;
    }
    this.setState({ endDate, error: null });
  };

  handleConfirm = () => {
    const { handleLoadReport } = this.props;
    handleLoadReport();
  };

  render() {
    const { isModalOpen, isLoadingReport, classes } = this.props;
    const { startDate, endDate, error } = this.state;
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
                      value={startDate}
                      onChange={this.handleStartDateChange}
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TimePicker
                      autoOk
                      margin="normal"
                      label="Start Time"
                      variant="outlined"
                      value={startDate}
                      onChange={this.handleStartDateChange}
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
                      value={endDate}
                      onChange={this.handleEndDateChange}
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TimePicker
                      autoOk
                      margin="normal"
                      label="End Time"
                      variant="outlined"
                      value={endDate}
                      onChange={this.handleEndDateChange}
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

export default withStyles((theme) => ({
  formControl: {
    margin: theme.spacing.unit,
  },
  errorText: {
    fontSize: theme.typography.fontSize * 1.2,
  },
}))(CellHistoryReportDialogComponent);
