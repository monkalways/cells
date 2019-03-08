import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { format } from 'date-fns';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  report: PropTypes.shape({
    cellName: PropTypes.string.isRequired,
    userLabel: PropTypes.string.isRequired,
    startTime: PropTypes.instanceOf(Date).isRequired,
    endTime: PropTypes.instanceOf(Date).isRequired,
    lastOccupantName: PropTypes.string,
  }).isRequired,
};

const dateTimeFormat = 'yyyy/MM/dd HH:mm';

const ReportBodyComponent = ({ classes, report }) => (
  <Grid item className={classes.container} xs={12}>
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
      <span className={classes.boldText}>Last Occupant during period:</span>
      <span>{report.lastOccupantName || 'N/A'}</span>
    </Typography>
  </Grid>
);

ReportBodyComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  container: {
    margin: theme.spacing.unit,
    height: theme.spacing.unit * 26,
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
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
