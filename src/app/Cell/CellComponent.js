import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Layout from '../common/Layout';
import Header from './Header';
import Overview from './Overview';
import CellCheck from './CellCheck';
import Meal from './Meal';
import Medication from './Medication';
import commonConstants from '../constants';
import withAuthentication from '../routes/enhancers/withAuthentication';
import Loading from '../common/Loading';
import CellHistoryReport from './CellHistoryReport';
import CellHistoryReportDialog from './CellHistoryReportDialog';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  cellDetails: PropTypes.shape({}),
  getCellDetails: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  refreshAuthenticationTimeout: PropTypes.func.isRequired,
  startAuthenticationTimeout: PropTypes.func.isRequired,
  stopAuthenticationTimeout: PropTypes.func.isRequired,
};

const defaultProps = {
  cellDetails: null,
};

export class CellComponent extends Component {
  componentDidMount() {
    const { match, getCellDetails } = this.props;
    const { name } = match.params;
    getCellDetails(name);
    this.setUnauthenticatedTimeout();
  }

  componentDidUpdate(prevProps) {
    const {
      isAuthenticated,
      handleLogOut,
      match,
      startAuthenticationTimeout,
      stopAuthenticationTimeout,
    } = this.props;
    const { name } = match.params;
    if (isAuthenticated !== prevProps.isAuthenticated) {
      this.cancelUnauthenticatedTimeout();
      startAuthenticationTimeout(() => {
        stopAuthenticationTimeout();
        handleLogOut('cells', name);
      });
    }
  }

  componentWillUnmount() {
    this.cancelUnauthenticatedTimeout();
  }

  setUnauthenticatedTimeout = () => {
    const { isAuthenticated } = this.props;
    this.cancelUnauthenticatedTimeout();
    if (!isAuthenticated) {
      this.unauthenticatedTimeout = setTimeout(() => {
        this.handleLogout();
      }, commonConstants.UNAUTHENTICATED_TIMEOUT_SECONDS * 1000);
    }
  };

  cancelUnauthenticatedTimeout = () => {
    if (this.unauthenticatedTimeout) {
      clearTimeout(this.unauthenticatedTimeout);
    }
  };

  handleLogout = () => {
    const { handleLogOut, match } = this.props;
    const { name } = match.params;
    handleLogOut('cells', name);
  };

  handleClick = () => {
    const { isAuthenticated, refreshAuthenticationTimeout } = this.props;
    if (isAuthenticated) {
      refreshAuthenticationTimeout();
    }
  };

  render() {
    const {
      cellDetails, match, classes, isAuthenticated,
    } = this.props;
    return (
      <div
        onClick={() => this.handleClick()}
        role="presentation"
        id="authenticatedCellComponentRoot"
      >
        <React.Fragment>
          <Layout>
            {cellDetails ? (
              <React.Fragment>
                <Header
                  cellDetails={cellDetails}
                  onLogout={this.handleLogout}
                  isAuthenticated={isAuthenticated}
                />
                <div className={classes.body}>
                  <Switch>
                    <Route path={match.url} component={Overview} exact />
                    <Route
                      path={`${match.url}/cell-check`}
                      component={withAuthentication(CellCheck)}
                      exact
                    />
                    <Route
                      path={`${match.url}/meal`}
                      component={withAuthentication(Meal)}
                      exact
                    />
                    <Route
                      path={`${match.url}/medication`}
                      component={withAuthentication(Medication)}
                      exact
                    />
                    <Route
                      path={`${match.url}/cell-history-report`}
                      component={withAuthentication(CellHistoryReport)}
                      exact
                    />
                  </Switch>
                </div>
                <CellHistoryReportDialog cellDetails={cellDetails} />
              </React.Fragment>
            ) : (
              <Loading />
            )}
          </Layout>
        </React.Fragment>
      </div>
    );
  }
}

CellComponent.propTypes = propTypes;
CellComponent.defaultProps = defaultProps;

export default compose(
  withStyles((theme) => ({
    body: {
      marginTop: theme.spacing.unit,
    },
  })),
  withRouter,
)(CellComponent);
