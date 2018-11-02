import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Layout from '../common/Layout';
import Header from './Header';
import DetaineeDetails from './DetaineeDetails';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  getDetainee: PropTypes.func.isRequired,
  detainee: PropTypes.shape({}),
  // cellDetails: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   genderLabel: PropTypes.string.isRequired,
  //   occupancy: PropTypes.number.isRequired,
  //   occupancyCount: PropTypes.number.isRequired,
  //   cellStatus: PropTypes.string.isRequired,
  // }),
};

const defaultProps = {
  detainee: null,
};

// for calls to api: http://localhost:1969/api/detainees/162323004000000603274291/detainee-profile
// For detainee screen
// /detainees/{id}?from=/cells/{name}

class DetaineeComponent extends Component {
  componentDidMount() {
    // const { match, getDetainee } = this.props;
    const { match } = this.props;
    const { id } = match.params;
    // getDetainee(name);
    // console.log(match.params);
    // console.log(id);

    const { getDetainee } = this.props;
    getDetainee(id);
  }

  handleLogout = () => {
    // const { history, match } = this.props;
    // const { id } = match.params;
    // Make sure this logs out to the correct page
    // Look at the 'from' parameter in the URL to determine this
    const { history } = this.props;
    const name = 'A1';
    history.push(`/cells/${name}`);
  };

  render() {
    const { classes, detainee } = this.props;
    console.log(detainee);

    return (
      <React.Fragment>
        {detainee && (
          <Layout>
            <Header
              detainee={detainee}
              onLogout={this.handleLogout}
              isAuthenticated
            />
            <div className={classes.body}>
              <DetaineeDetails detainee={detainee} isAuthenticated />
            </div>
          </Layout>
        )}
      </React.Fragment>
    );
  }
}

DetaineeComponent.propTypes = propTypes;
DetaineeComponent.defaultProps = defaultProps;

export default compose(
  withStyles((theme) => ({
    body: {
      marginTop: theme.spacing.unit,
    },
  })),
  withRouter,
)(DetaineeComponent);
