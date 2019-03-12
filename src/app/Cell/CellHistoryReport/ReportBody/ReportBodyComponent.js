import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { format } from 'date-fns';

import MovementHistories from './MovementHistories';
import Loading from '../../../common/Loading';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  report: PropTypes.shape({
    cellName: PropTypes.string.isRequired,
    userLabel: PropTypes.string.isRequired,
    startTime: PropTypes.instanceOf(Date).isRequired,
    endTime: PropTypes.instanceOf(Date).isRequired,
    lastOccupantName: PropTypes.string,
    movementHistories: PropTypes.arrayOf(PropTypes.shape({
      time: PropTypes.instanceOf(Date).isRequired,
      detaineeName: PropTypes.string.isRequired,
      sourceCellName: PropTypes.string,
      destinationCellName: PropTypes.string,
    })),
  }),
  isLoadingReport: PropTypes.bool.isRequired,
};

const defaultProps = {
  report: null,
};

const dateTimeFormat = 'yyyy/MM/dd HH:mm';

export const ReportBodyComponent = ({ classes, report, isLoadingReport }) => (
  <Grid
    container
    className={classes.container}
    spacing={8}
    alignContent="flex-start"
    justify="center"
  >
    {!isLoadingReport ? (
      <React.Fragment>
        <Grid item sm={12} className={classes.titleContainer}>
          <Typography variant="h5" className={classes.title}>
            {`Cell History Report - ${report.cellName}`}
          </Typography>
        </Grid>
        <Grid item className={classes.bodyContainer} xs={12}>
          <Typography variant="body1" className={classes.boldText}>
            Edmonton Police Service
          </Typography>
          <Typography variant="body1" className={classes.row}>
            <span className={classes.italicText}>Printed: </span>
            {format(new Date(), dateTimeFormat)} by {report.userLabel}
          </Typography>
          <Typography variant="body1" className={classes.row}>
            <span className={classes.boldText}>Cell ID:</span>
            <span>{report.cellName}</span>
          </Typography>
          <Typography variant="body1" className={classes.row}>
            <span className={classes.boldText}>Reporting Period:</span>
            <span>
              {format(report.startTime, dateTimeFormat)} to{' '}
              {format(report.endTime, dateTimeFormat)}
            </span>
          </Typography>
          <Typography variant="body1" className={classes.row}>
            <span className={classes.boldText}>
              Last Occupant during period:
            </span>
            <span>{report.lastOccupantName || 'N/A'}</span>
          </Typography>
        </Grid>
        <MovementHistories movementHistories={report.movementHistories} />
      </React.Fragment>
    ) : (
      <Loading />
    )}
  </Grid>
);

ReportBodyComponent.propTypes = propTypes;
ReportBodyComponent.defaultProps = defaultProps;

export default withStyles((theme) => ({
  container: {
    height: theme.spacing.unit * 113,
    overflowY: 'auto',
    msOverflowStyle: '-ms-autohiding-scrollbar',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: theme.spacing.unit * 0.4,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  titleContainer: {
    height: theme.spacing.unit * 7,
    width: '100%',
    marginTop: theme.spacing.unit * 0.5,
  },
  title: {
    fontWeight: 500,
    textAlign: 'center',
    backgroundColor: '#BEBFBF',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  bodyContainer: {
    margin: theme.spacing.unit * 1.5,
    height: theme.spacing.unit * 26,
    boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
  },
  boldText: {
    fontWeight: 500,
    marginRight: theme.spacing.unit * 2,
  },
  italicText: {
    fontStyle: 'italic',
    marginRight: theme.spacing.unit * 2,
  },
  row: {
    marginBottom: theme.spacing.unit * 3,
  },
}))(ReportBodyComponent);
