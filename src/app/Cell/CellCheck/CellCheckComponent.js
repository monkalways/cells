import _ from 'lodash';
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
  cellCheck: PropTypes.shape({}).isRequired,
  visualCheck: PropTypes.func.isRequired,
  verbalCheck: PropTypes.func.isRequired,
  visualCheckAll: PropTypes.func.isRequired,
  verbalCheckAll: PropTypes.func.isRequired,
};

const defaultProps = {
  cellDetainees: [],
};

class CellCheckComponent extends Component {
  componentDidMount() {
    const { cellName, getCellDetainees } = this.props;
    getCellDetainees(cellName);
  }

  getCellCheckRadioButtonValue = () => {
    const { isCellDetaineesLoaded, cellDetainees, cellCheck } = this.props;
    if (!isCellDetaineesLoaded || _.isEmpty(cellCheck)) {
      return '';
    }
    const isAllVisual = cellDetainees.every((detainee) => cellCheck[detainee.id].visual);
    const isAllVerbal = cellDetainees.every((detainee) => cellCheck[detainee.id].verbal);

    if (isAllVisual) return 'visual';
    if (isAllVerbal) return 'verbal';
    return '';
  };

  handleRadioGroupChange = (event) => {
    const { visualCheckAll, verbalCheckAll, cellDetainees } = this.props;
    const { value } = event.target;
    if (value === 'visual') visualCheckAll(cellDetainees);
    if (value === 'verbal') verbalCheckAll(cellDetainees);
  };

  render() {
    const {
      cellDetainees,
      isCellDetaineesLoaded,
      isAuthenticated,
      cellCheck,
      visualCheck,
      verbalCheck,
    } = this.props;

    return (
      <React.Fragment>
        <CellDetaineeGrid>
          {isCellDetaineesLoaded && !_.isEmpty(cellCheck) ? (
            <React.Fragment>
              {cellDetainees.map((cellDetainee) => (
                <Grid key={cellDetainee.id} item sm={4}>
                  <CellCheckCellDetaineeCard
                    cellDetainee={cellDetainee}
                    isAuthenticated={isAuthenticated}
                    visual={cellCheck[cellDetainee.id].visual}
                    verbal={cellCheck[cellDetainee.id].verbal}
                    onVisualClick={() => visualCheck(cellDetainee)}
                    onVerbalClick={() => verbalCheck(cellDetainee)}
                  />
                </Grid>
              ))}
            </React.Fragment>
          ) : (
            <Loading />
          )}
        </CellDetaineeGrid>
        <CellCheckFooter
          radioButtonValue={this.getCellCheckRadioButtonValue()}
          onRadioGroupChange={this.handleRadioGroupChange}
        />
      </React.Fragment>
    );
  }
}

CellCheckComponent.propTypes = propTypes;
CellCheckComponent.defaultProps = defaultProps;

export default CellCheckComponent;
