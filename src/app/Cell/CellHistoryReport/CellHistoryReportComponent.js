import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PrintIcon from '@material-ui/icons/Print';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import ReportBody from './ReportBody';

const CustomBottomNavigationAction = withStyles((theme) => ({
  root: {
    flex: 0,
    marginLeft: theme.spacing.unit * 3,
  },
}))(BottomNavigationAction);

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
      destinationCellName: PropTypes.string,
    })),
  }),
  isLoadingReport: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {
  report: null,
};

export class CellHistoryReportComponent extends React.Component {
  handleBackClick = () => {
    const { history } = this.props;
    history.goBack();
  };

  handlePrintClick = () => {
    window.print();
  };

  render() {
    const { classes, report, isLoadingReport } = this.props;
    return (
      <React.Fragment>
        <ReportBody
          isLoadingReport={isLoadingReport}
          report={report}
          ref={(el) => {
            this.componentRef = el;
          }}
        />
        <div className={classNames(classes.footer, 'no-print')}>
          <AppBar position="static" className={classes.appBar}>
            <Grid container alignItems="center">
              <BottomNavigation
                value={-1}
                showLabels
                className={classes.navigation}
              >
                <CustomBottomNavigationAction
                  id="backButton"
                  label={<Typography variant="body1">Back</Typography>}
                  onClick={this.handleBackClick}
                  icon={<ArrowBackIcon className={classes.icon} />}
                  disabled={isLoadingReport}
                  className={classes.backButton}
                />
                <BottomNavigationAction
                  id="printButton"
                  label={<Typography variant="body1">Print</Typography>}
                  icon={<PrintIcon className={classes.icon} />}
                  disabled={isLoadingReport}
                  onClick={this.handlePrintClick}
                  showLabel
                />
              </BottomNavigation>
            </Grid>
          </AppBar>
        </div>
      </React.Fragment>
    );
  }
}

CellHistoryReportComponent.propTypes = propTypes;
CellHistoryReportComponent.defaultProps = defaultProps;

export default compose(
  withStyles((theme) => ({
    footer: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.background.default,
    },
    navigation: {
      height: '100%',
      width: '69%',
      backgroundColor: theme.palette.background.default,
      justifyContent: 'start',
    },
    button: {
      height: theme.spacing.unit * 7,
      width: theme.spacing.unit * 40,
      margin: theme.spacing.unit * 2,
    },
    navigationImage: {
      width: theme.spacing.unit * 6,
      height: theme.spacing.unit * 6,
    },
    icon: {
      fontSize: theme.typography.h3.fontSize,
    },
    backButton: {
      marginRight: theme.spacing.unit * 21,
      paddingLeft: 0,
    },
  })),
  withRouter,
)(CellHistoryReportComponent);
