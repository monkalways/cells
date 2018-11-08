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
  logOut: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const defaultProps = {
  cellDetails: null,
};

class CellComponent extends Component {
  componentDidMount() {
    const { match, getCellDetails } = this.props;
    const { name } = match.params;
    getCellDetails(name);

    this.setUnauthenticatedTimeout();
  }

  componentDidUpdate() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.cancelUnauthenticatedTimeout();
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
    const { logOut, match } = this.props;
    const { name } = match.params;
    logOut(name);
  };

  render() {
    const {
      cellDetails, match, classes, isAuthenticated,
    } = this.props;
    const { name } = match.params;
    return (
      <React.Fragment>
        {cellDetails && (
          <Layout>
            <Header
              cellDetails={cellDetails}
              onLogout={this.handleLogout}
              isAuthenticated={isAuthenticated}
            />
            <div className={classes.body}>
              <Switch>
                <Route
                  path={match.url}
                  render={(props) => <Overview cellName={name} {...props} />}
                  exact
                />
                <Route
                  path={`${match.url}/cell-check`}
                  render={(props) => <CellCheck cellName={name} {...props} />}
                  exact
                />
                <Route
                  path={`${match.url}/meal`}
                  render={(props) => <Meal cellName={name} {...props} />}
                  exact
                />
                <Route
                  path={`${match.url}/Medication`}
                  render={(props) => <Medication cellName={name} {...props} />}
                  exact
                />
              </Switch>
            </div>
          </Layout>
        )}
      </React.Fragment>
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
