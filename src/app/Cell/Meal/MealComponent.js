import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import CellDetaineeGrid from '../CellDetaineeGrid';
import MealCellDetaineeCard from './MealCellDetaineeCard';
import MealFooter from './MealFooter';

const propTypes = {
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({})),
  isAuthenticated: PropTypes.bool.isRequired,
  getCellDetainees: PropTypes.func.isRequired,
  cellName: PropTypes.string.isRequired,
};

const defaultProps = {
  cellDetainees: [],
};

class MealComponent extends Component {
  componentDidMount() {
    const { cellName, getCellDetainees } = this.props;
    getCellDetainees(cellName);
  }

  render() {
    const { cellDetainees, isAuthenticated } = this.props;
    return (
      <React.Fragment>
        {cellDetainees.length > 0 ? (
          <React.Fragment>
            <CellDetaineeGrid>
              {cellDetainees.map((cellDetainee) => (
                <Grid key={cellDetainee.id} item sm={4}>
                  <MealCellDetaineeCard
                    cellDetainee={cellDetainee}
                    isAuthenticated={isAuthenticated}
                  />
                </Grid>
              ))}
            </CellDetaineeGrid>
            <MealFooter />
          </React.Fragment>
        ) : (
          <div>Loading ...</div> // TODO: replace with progress bar
        )}
      </React.Fragment>
    );
  }
}

MealComponent.propTypes = propTypes;
MealComponent.defaultProps = defaultProps;

export default MealComponent;
