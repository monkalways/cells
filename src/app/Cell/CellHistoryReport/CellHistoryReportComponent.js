import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import Loading from '../../common/Loading';
import ReportBody from './ReportBody';
import MovementHistories from './MovementHistories';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  report: PropTypes.shape({
    cellName: PropTypes.string.isRequired,
    userLabel: PropTypes.string.isRequired,
    lastOccupantName: PropTypes.string,
    startTime: PropTypes.instanceOf(Date).isRequired,
    endTime: PropTypes.instanceOf(Date).isRequired,
    movementHistories: PropTypes.arrayOf(PropTypes.shape({
      time: PropTypes.instanceOf(Date).isRequired,
      detaineeName: PropTypes.string.isRequired,
      sourceCellName: PropTypes.string,
      destinationCellName: PropTypes.string.isRequired,
    })),
  }),
  isLoadingReport: PropTypes.bool.isRequired,
};

const defaultProps = {
  report: null,
};

const CellHistoryReportComponent = ({ classes, report, isLoadingReport }) => (
  <React.Fragment>
    <Grid
      container
      className={classes.container}
      spacing={8}
      alignContent="flex-start"
    >
      {!isLoadingReport ? (
        <React.Fragment>
          <Grid item sm={12} className={classes.titleContainer}>
            <Typography variant="h5" className={classes.title}>
              {`Cell History Report - ${report.cellName}`}
            </Typography>
          </Grid>
          <ReportBody report={report} />
          {report.movementHistories
            && report.movementHistories.length > 0 && (
              <MovementHistories movementHistories={report.movementHistories} />
          )}
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </Grid>
  </React.Fragment>
);

CellHistoryReportComponent.propTypes = propTypes;
CellHistoryReportComponent.defaultProps = defaultProps;

export default withStyles((theme) => ({
  container: {
    minHeight: theme.spacing.unit * 113,
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
  },
  title: {
    fontWeight: 500,
    textAlign: 'center',
    backgroundColor: '#BEBFBF',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
}))(CellHistoryReportComponent);
