import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Layout from './Layout';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const CellsComponent = ({ classes, match }) => (
  <Layout>
    <Typography variant="h4">{match.params.name}</Typography>
  </Layout>
);

CellsComponent.propTypes = propTypes;

export default compose(
  withStyles(() => ({
    container: {},
  })),
  withRouter,
)(CellsComponent);
