import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Header from '../common/Header';
import constants from '../constants';
import logo from '../images/EPSlogo.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      first: PropTypes.string.isRequired,
      second: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  versions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
  })).isRequired,
  getVersions: PropTypes.func.isRequired,
};

class TapToBegin extends Component {
  componentDidMount() {
    const { getVersions } = this.props;
    getVersions();
  }

  handleClick = () => {
    const { match, history } = this.props;
    const { first, second } = match.params;
    history.push(`/${first}/${second}/home`);
  };

  render() {
    const { classes, versions } = this.props;
    return (
      <Grid container justify="center">
        <Grid
          container
          className={classes.container}
          justify="center"
          onClick={this.handleClick}
        >
          <Grid item xs={12}>
            <Header versions={versions} />
          </Grid>
          <Grid item>
            <img
              src={logo}
              alt="EPS Logo"
              width={350}
              className={classes.logo}
            />
            <Typography variant="h4" className={classes.heading} align="center">
              Tap to begin
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

TapToBegin.propTypes = propTypes;

export default compose(
  withStyles((theme) => ({
    container: {
      height: constants.LAYOUT.height,
      background: theme.palette.background.default,
      width: constants.LAYOUT.width,
      cursor: 'pointer',
    },
    heading: {
      marginTop: theme.spacing.unit * 5,
      color: '#F8F8F8',
      fontWeight: 500,
    },
    logo: {
      marginTop: -theme.spacing.unit * 15,
    },
  })),
  withRouter,
)(TapToBegin);
