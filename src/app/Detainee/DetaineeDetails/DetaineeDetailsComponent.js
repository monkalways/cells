import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import Loading from '../../common/Loading';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({}),
};

const defaultProps = {
  detainee: null,
};

// Make an action to determine if detainee data has loaded or not
// Replace "detainee ?" with "isDetaineeDataLoaded ?"
const DetaineeDetailsComponent = ({ classes, detainee }) => (
  <React.Fragment>
    {detainee ? (
      <React.Fragment>
        <Grid container className={classes.container} spacing={8} />
        {/* <CellDetaineeGrid>
              {cellDetainees.map((cellDetainee) => (
                <Grid key={cellDetainee.id} item sm={4}>
                  <OverviewCellDetaineeCard
                    cellDetainee={cellDetainee}
                    isAuthenticated={isAuthenticated}
                  />
                </Grid>
              ))}
            </CellDetaineeGrid>
            <OverviewFooter
              isAuthenticated={isAuthenticated}
              onSignIn={handleSignIn}
              cellName={cellName}
            /> */}
      </React.Fragment>
    ) : (
      <Loading />
    )}
  </React.Fragment>
);

DetaineeDetailsComponent.propTypes = propTypes;
DetaineeDetailsComponent.defaultProps = defaultProps;

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
}))(DetaineeDetailsComponent);
