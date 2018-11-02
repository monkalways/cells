import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import CellDetaineeGrid from '../CellDetaineeGrid';
import CellCheckCellDetaineeCard from './CellCheckCellDetaineeCard';
import CellCheckFooter from './CellCheckFooter';
import Loading from '../../common/Loading';

const propTypes = {
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({})),
  isCellDetaineesLoaded: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  cellName: PropTypes.string.isRequired,
  getCellDetainees: PropTypes.func.isRequired,
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
    const {
      cellDetainees,
      isCellDetaineesLoaded,
      isAuthenticated,
    } = this.props;
    return (
      <React.Fragment>
        <CellDetaineeGrid>
          {isCellDetaineesLoaded ? (
            <React.Fragment>
              {cellDetainees.map((cellDetainee) => (
                <Grid key={cellDetainee.id} item sm={4}>
                  <CellCheckCellDetaineeCard
                    cellDetainee={cellDetainee}
                    isAuthenticated={isAuthenticated}
                  />
                </Grid>
              ))}
            </React.Fragment>
          ) : (
            <Loading />
          )}
        </CellDetaineeGrid>
        <CellCheckFooter />
      </React.Fragment>
    );
  }
}

CellCheckComponent.propTypes = propTypes;
CellCheckComponent.defaultProps = defaultProps;

export default CellCheckComponent;
