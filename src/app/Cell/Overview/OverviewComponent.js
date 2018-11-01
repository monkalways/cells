import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

import CellDetaineeCard from '../CellDetaineeCard';
import OverviewFooter from './OverviewFooter';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({})),
  isAuthenticated: PropTypes.bool.isRequired,
  getCellDetainees: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  cellName: PropTypes.string.isRequired,
};

const defaultProps = {
  cellDetainees: [],
};

class OverviewComponent extends Component {
  componentDidMount() {
    const { cellName, getCellDetainees } = this.props;
    getCellDetainees(cellName);
  }

  render() {
    const {
      classes,
      cellDetainees,
      isAuthenticated,
      handleSignIn,
      cellName,
    } = this.props;
    return (
      <React.Fragment>
        {cellDetainees.length > 0 ? (
          <React.Fragment>
            <Grid container className={classes.container} spacing={8}>
              {cellDetainees.map((cellDetainee) => (
                <Grid key={cellDetainee.id} item sm={4}>
                  <CellDetaineeCard
                    cellDetainee={cellDetainee}
                    isAuthenticated={isAuthenticated}
                  />
                </Grid>
              ))}
            </Grid>
            <OverviewFooter
              isAuthenticated={isAuthenticated}
              onSignIn={handleSignIn}
              cellName={cellName}
            />
          </React.Fragment>
        ) : (
          <div>Loading ...</div> // TODO: replace with progress bar
        )}
      </React.Fragment>
    );
  }
}

OverviewComponent.propTypes = propTypes;
OverviewComponent.defaultProps = defaultProps;

export default withStyles((theme) => ({
  container: {
    height: theme.spacing.unit * 97,
    overflowY: 'auto',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: theme.spacing.unit * 0.4,
    backgroundColor: '#A8C6FA', // TODO: move color to theme
    width: '100%',
  },
}))(OverviewComponent);
