import React from 'react';
import PropTypes from 'prop-types';
// import { Grid } from '@material-ui/core';

const propTypes = {
  detainee: PropTypes.shape({}),
};

const defaultProps = {
  detainee: null,
};

const DetaineeDetailsComponent = ({ detainee }) => (
  <React.Fragment>
    {detainee ? (
      <React.Fragment>
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
      <div>Loading ...</div> // TODO: replace with progress bar
    )}
  </React.Fragment>
);

DetaineeDetailsComponent.propTypes = propTypes;
DetaineeDetailsComponent.defaultProps = defaultProps;

export default DetaineeDetailsComponent;
