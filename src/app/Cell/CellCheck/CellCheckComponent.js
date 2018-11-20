import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import CellDetaineeGrid from '../../common/CellDetaineeGrid';
import CellDetaineeCard from './CellDetaineeCard';
import CellCheckFooter from './CellCheckFooter';
import Loading from '../../common/Loading';

const propTypes = {
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    location: PropTypes.string,
  })),
  isCellDetaineesLoaded: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  cellName: PropTypes.string.isRequired,
  getCellDetainees: PropTypes.func.isRequired,
  cellCheck: PropTypes.shape({}).isRequired,
  isSavingCellCheck: PropTypes.bool.isRequired,
  visualCheck: PropTypes.func.isRequired,
  verbalCheck: PropTypes.func.isRequired,
  visualCheckAll: PropTypes.func.isRequired,
  verbalCheckAll: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const defaultProps = {
  cellDetainees: [],
  userName: null,
};

export class CellCheckComponent extends Component {
  componentDidMount() {
    const { cellName, getCellDetainees } = this.props;
    getCellDetainees(cellName);
  }

  getCellCheckRadioButtonValue = () => {
    const { isCellDetaineesLoaded, cellDetainees, cellCheck } = this.props;
    if (!isCellDetaineesLoaded || _.isEmpty(cellCheck)) {
      return '';
    }
    const isAllVisual = cellDetainees
      .filter((detainee) => !detainee.location)
      .every((detainee) => cellCheck[detainee.id].visual);
    const isAllVerbal = cellDetainees
      .filter((detainee) => !detainee.location)
      .every((detainee) => cellCheck[detainee.id].verbal);

    if (isAllVisual) return 'visual';
    if (isAllVerbal) return 'verbal';
    return '';
  };

  isSaveDisabled = () => {
    const { isCellDetaineesLoaded, cellDetainees, cellCheck } = this.props;
    if (!isCellDetaineesLoaded) return true;
    if (_.isEmpty(cellCheck)) return true;

    if (
      cellDetainees
      && cellDetainees.length > 0
      && cellDetainees.some((detainee) => !detainee.location)
    ) return false;

    return true;
  };

  handleRadioGroupChange = (event) => {
    const { visualCheckAll, verbalCheckAll, cellDetainees } = this.props;
    const { value } = event.target;
    if (value === 'visual') visualCheckAll(cellDetainees.filter((detainee) => !detainee.location));
    if (value === 'verbal') verbalCheckAll(cellDetainees.filter((detainee) => !detainee.location));
  };

  handleSave = () => {
    const {
      cellCheck, cellName, userName, onSave,
    } = this.props;
    onSave(cellCheck, cellName, userName);
  };

  render() {
    const {
      cellDetainees,
      cellName,
      isCellDetaineesLoaded,
      isAuthenticated,
      cellCheck,
      isSavingCellCheck,
      visualCheck,
      verbalCheck,
    } = this.props;

    return (
      <React.Fragment>
        <CellDetaineeGrid>
          {isCellDetaineesLoaded && !isSavingCellCheck ? (
            <React.Fragment>
              {cellDetainees.map((cellDetainee) => (
                <Grid key={cellDetainee.id} item sm={4}>
                  <CellDetaineeCard
                    cellDetainee={cellDetainee}
                    cellName={cellName}
                    isAuthenticated={isAuthenticated}
                    cellCheck={cellCheck[cellDetainee.id]}
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
          isSavingCellCheck={isSavingCellCheck}
          isSaveDisabled={this.isSaveDisabled()}
          onRadioGroupChange={this.handleRadioGroupChange}
          onSave={this.handleSave}
        />
      </React.Fragment>
    );
  }
}

CellCheckComponent.propTypes = propTypes;
CellCheckComponent.defaultProps = defaultProps;

export default CellCheckComponent;
