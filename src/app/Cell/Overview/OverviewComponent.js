import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import CellDetaineeGrid from '../CellDetaineeGrid';
import OverviewCellDetaineeCard from './OverviewCellDetaineeCard';
import OverviewFooter from './OverviewFooter';

const propTypes = {
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
      cellDetainees,
      isAuthenticated,
      handleSignIn,
      cellName,
    } = this.props;
    return (
      <React.Fragment>
        {cellDetainees.length > 0 ? (
          <React.Fragment>
            <CellDetaineeGrid>
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

export default OverviewComponent;
