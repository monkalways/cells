import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import CellDetaineeGrid from '../CellDetaineeGrid';
import CellCheckCellDetaineeCard from './CellCheckCellDetaineeCard';
import CellCheckFooter from './CellCheckFooter';

const propTypes = {
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({})),
  isAuthenticated: PropTypes.bool.isRequired,
  getCellDetainees: PropTypes.func.isRequired,
  cellName: PropTypes.string.isRequired,
};

const defaultProps = {
  cellDetainees: [],
};

class CellCheckComponent extends Component {
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
                  <CellCheckCellDetaineeCard
                    cellDetainee={cellDetainee}
                    isAuthenticated={isAuthenticated}
                  />
                </Grid>
              ))}
            </CellDetaineeGrid>
            <CellCheckFooter />
          </React.Fragment>
        ) : (
          <div>Loading ...</div> // TODO: replace with progress bar
        )}
      </React.Fragment>
    );
  }
}

CellCheckComponent.propTypes = propTypes;
CellCheckComponent.defaultProps = defaultProps;

export default CellCheckComponent;
