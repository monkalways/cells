import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Header from '../common/Header';
import constants from '../constants';
import logo from '../images/EPSlogo.png';
import GotoCell from './GotoCell';
import GotoActivityRoom from './GotoActivityRoom';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  versions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
  })).isRequired,
  getVersions: PropTypes.func.isRequired,
};

class HomeComponent extends Component {
  componentDidMount() {
    const { getVersions } = this.props;
    getVersions();
  }

  render() {
    const { classes, versions } = this.props;
    return (
      <Grid container justify="center">
        <Grid container className={classes.container} justify="center">
          <Grid item xs={12}>
            <Header versions={versions} />
          </Grid>
          <Grid item>
            <img
              src={logo}
              alt="EPS Logo"
              width={300}
              className={classes.logo}
            />
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12} sm={6}>
              <GotoCell />
            </Grid>
            <Grid item xs={12} sm={6}>
              <GotoActivityRoom />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

HomeComponent.propTypes = propTypes;

export default compose(
  withStyles((theme) => ({
    container: {
      height: constants.LAYOUT.height,
      background: theme.palette.background.default,
      width: constants.LAYOUT.width,
    },
    item: {
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
    },
    logo: {
      marginTop: theme.spacing.unit * 6,
    },
  })),
  withRouter,
)(HomeComponent);
