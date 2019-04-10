import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import CellDetaineeGrid from '../../common/CellDetaineeGrid';
import CellDetaineeCard from './CellDetaineeCard';
import OverviewFooter from './OverviewFooter';
import Loading from '../../common/Loading';

const propTypes = {
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({})),
  cellName: PropTypes.string.isRequired,
  getCellDetainees: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  isAnyDetaineeUnderMedication: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isCellDetaineesLoaded: PropTypes.bool.isRequired,
};

const defaultProps = {
  cellDetainees: [],
};

export class OverviewComponent extends Component {
  componentDidMount() {
    const { cellName, isAuthenticated, getCellDetainees } = this.props;
    getCellDetainees(cellName, isAuthenticated);
  }

  componentDidUpdate(prevProps) {
    const { cellName, isAuthenticated, getCellDetainees } = this.props;
    if (
      isAuthenticated !== prevProps.isAuthenticated
      || cellName !== prevProps.cellName
    ) {
      getCellDetainees(cellName, isAuthenticated);
    }
  }

  render() {
    const {
      cellDetainees,
      cellName,
      handleSignIn,
      isAnyDetaineeUnderMedication,
      isAuthenticated,
      isCellDetaineesLoaded,
    } = this.props;
    return (
      <React.Fragment>
        <CellDetaineeGrid>
          {isCellDetaineesLoaded ? (
            <React.Fragment>
              {cellDetainees.map((cellDetainee) => (
                <Grid key={cellDetainee.id} item sm={4}>
                  <CellDetaineeCard
                    cellDetainee={cellDetainee}
                    cellName={cellName}
                    isAuthenticated={isAuthenticated}
                  />
                </Grid>
              ))}
            </React.Fragment>
          ) : (
            <Loading />
          )}
        </CellDetaineeGrid>
        <OverviewFooter
          isAuthenticated={isAuthenticated}
          isAnyDetaineeUnderMedication={isAnyDetaineeUnderMedication}
          onSignIn={handleSignIn}
          cellName={cellName}
        />
      </React.Fragment>
    );
  }
}

OverviewComponent.propTypes = propTypes;
OverviewComponent.defaultProps = defaultProps;

export default OverviewComponent;
