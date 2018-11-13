import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import ActivityRoomDetaineeCard from './ActivityRoomDetaineeCard';
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
  usage: PropTypes.string.isRequired,
  detainees: PropTypes.arrayOf(PropTypes.shape({})),
  isAuthenticated: PropTypes.bool.isRequired,
  getActivityRoomDetainees: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
};

const defaultProps = {
  detainees: [],
};

class ActivityRoomComponent extends Component {
  componentDidMount() {
    const { match, getActivityRoomDetainees } = this.props;
    const { usage } = match.params;
    getActivityRoomDetainees(usage);

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
    const { usage } = match.params;
    logOut(usage);
  };

  render() {
    const {
      usage,
      detainees,
      classes,
      isAuthenticated,
      isActivityRoomDetaineesLoaded,
    } = this.props;
    return (
      <React.Fragment>
        <Layout>
          <div className={classes.body}>
            <CellDetaineeGrid>
              {isActivityRoomDetaineesLoaded ? (
                <React.Fragment>
                  {detainees.map((detainee) => (
                    <Grid key={detainee.id} item sm={4}>
                      <ActivityRoomDetaineeCard
                        detainee={detainee}
                        usage={usage}
                        isAuthenticated={isAuthenticated}
                      />
                    </Grid>
                  ))}
                </React.Fragment>
              ) : (
                <Loading />
              )}
            </CellDetaineeGrid>
          </div>
        </Layout>
      </React.Fragment>
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
  })),
  withRouter,
)(ActivityRoomComponent);
