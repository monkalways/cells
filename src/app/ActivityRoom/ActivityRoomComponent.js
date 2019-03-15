import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import ActivityRoomDetaineeCard from './ActivityRoomDetaineeCard';
import Header from './Header';
import Footer from './Footer';
import Layout from '../common/Layout';
import CellDetaineeGrid from '../common/CellDetaineeGrid';
import Loading from '../common/Loading';
import commonConstants from '../constants';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      usage: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  isActivityRoomDetaineesLoaded: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  detainees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
  isCheckingIn: PropTypes.bool.isRequired,
  isCheckingInSuccess: PropTypes.bool.isRequired,
  getActivityRoomDetainees: PropTypes.func.isRequired,
  handleCheckIn: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  refreshAuthenticationTimeout: PropTypes.func.isRequired,
  startAuthenticationTimeout: PropTypes.func.isRequired,
  stopAuthenticationTimeout: PropTypes.func.isRequired,
  checkingInDetaineeId: PropTypes.string,
};

const defaultProps = {
  detainees: [],
  checkingInDetaineeId: null,
};

export class ActivityRoomComponent extends Component {
  componentDidMount() {
    const { match, getActivityRoomDetainees } = this.props;
    const { usage } = match.params;
    getActivityRoomDetainees(usage);

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
    const { usage } = match.params;
    if (isAuthenticated !== prevProps.isAuthenticated) {
      this.cancelUnauthenticatedTimeout();
      startAuthenticationTimeout(() => {
        stopAuthenticationTimeout();
        handleLogOut('activity-rooms', usage);
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
    const { usage } = match.params;
    handleLogOut('activity-rooms', usage);
  };

  handleClick = () => {
    const { isAuthenticated, refreshAuthenticationTimeout } = this.props;
    if (isAuthenticated) {
      refreshAuthenticationTimeout();
    }
  };

  render() {
    const {
      match,
      detainees,
      classes,
      isCheckingIn,
      isCheckingInSuccess,
      isAuthenticated,
      isActivityRoomDetaineesLoaded,
      handleSignIn,
      handleCheckIn,
      checkingInDetaineeId,
    } = this.props;
    const { usage } = match.params;
    return (
      <div
        onClick={() => this.handleClick()}
        role="presentation"
        id="authenticatedActivityRoomRoot"
      >
        <React.Fragment>
          <Layout>
            <Header
              usage={usage}
              onLogout={this.handleLogout}
              isAuthenticated={isAuthenticated}
            />
            <div className={classes.body}>
              <CellDetaineeGrid>
                {isActivityRoomDetaineesLoaded ? (
                  detainees.length > 0 ? (
                    <React.Fragment>
                      {detainees.map((detainee) => (
                        <Grid key={detainee.id} item sm={4}>
                          <ActivityRoomDetaineeCard
                            detainee={detainee}
                            usage={usage}
                            isAuthenticated={isAuthenticated}
                            isCheckingIn={isCheckingIn}
                            isCheckingInSuccess={isCheckingInSuccess}
                            onCheckIn={handleCheckIn}
                            checkingInDetaineeId={checkingInDetaineeId}
                          />
                        </Grid>
                      ))}
                    </React.Fragment>
                  ) : (
                    <Typography variant="h6" className={classes.heading}>
                      No detainees.
                    </Typography>
                  )
                ) : (
                  <Loading />
                )}
              </CellDetaineeGrid>
              <Footer
                isAuthenticated={isAuthenticated}
                onSignIn={handleSignIn}
              />
            </div>
          </Layout>
        </React.Fragment>
      </div>
    );
  }
}

ActivityRoomComponent.propTypes = propTypes;
ActivityRoomComponent.defaultProps = defaultProps;

export default compose(
  withStyles((theme) => ({
    body: {
      marginTop: theme.spacing.unit,
    },
    heading: {
      marginTop: theme.spacing.unit,
    },
  })),
  withRouter,
)(ActivityRoomComponent);
