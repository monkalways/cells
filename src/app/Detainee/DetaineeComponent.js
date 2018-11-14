import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import queryString from 'query-string';
import Layout from '../common/Layout';
import Header from './Header';
import Footer from './Footer';
import DetaineeDetails from './DetaineeDetails';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  getDetainee: PropTypes.func.isRequired,
  getAvailableActivityRooms: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  logOut: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

class DetaineeComponent extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const { getDetainee, getAvailableActivityRooms } = this.props;
    getDetainee(id);
    getAvailableActivityRooms();
  }

  handleLogout = () => {
    const { logOut, location } = this.props;
    const { first, second } = queryString.parse(location.search);
    logOut(first, second);
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Layout>
          <Header onLogout={this.handleLogout} />
          <div className={classes.body}>
            <DetaineeDetails />
          </div>
          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}

DetaineeComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  body: {
    marginTop: theme.spacing.unit,
  },
}))(DetaineeComponent);
