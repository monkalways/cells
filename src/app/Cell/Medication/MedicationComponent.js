import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import CellDetaineeGrid from '../../common/CellDetaineeGrid';
import MedicationCellDetaineeCard from './MedicationCellDetaineeCard';
import MedicationFooter from './MedicationFooter';
import Loading from '../../common/Loading';

const propTypes = {
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({})),
  isCellDetaineesLoaded: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  getCellDetainees: PropTypes.func.isRequired,
  cellName: PropTypes.string.isRequired,
  medication: PropTypes.shape({}).isRequired,
  isSavingMedication: PropTypes.bool.isRequired,
  acceptMedication: PropTypes.func.isRequired,
  rejectMedication: PropTypes.func.isRequired,
  notApplicableMedication: PropTypes.func.isRequired,
  acceptMedicationAll: PropTypes.func.isRequired,
  rejectMedicationAll: PropTypes.func.isRequired,
  notApplicableMedicationAll: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const defaultProps = {
  cellDetainees: [],
  userName: null,
};

class MedicationComponent extends Component {
  componentDidMount() {
    const { cellName, getCellDetainees } = this.props;
    getCellDetainees(cellName);
  }

  getMedicationRadioButtonValue = () => {
    const { isCellDetaineesLoaded, cellDetainees, medication } = this.props;
    if (!isCellDetaineesLoaded || _.isEmpty(medication)) {
      return '';
    }
    const isAllAccept = cellDetainees
      .filter((detainee) => !detainee.location)
      .every((detainee) => medication[detainee.id].accept);
    const isAllReject = cellDetainees
      .filter((detainee) => !detainee.location)
      .every((detainee) => medication[detainee.id].reject);
    const isAllNotApplicable = cellDetainees
      .filter((detainee) => !detainee.location)
      .every((detainee) => medication[detainee.id].notApplicable);

    if (isAllAccept) return 'accept';
    if (isAllReject) return 'reject';
    if (isAllNotApplicable) return 'not-applicable';
    return '';
  };

  isSaveDisabled = () => {
    const { isCellDetaineesLoaded, cellDetainees, medication } = this.props;
    if (!isCellDetaineesLoaded && !_.isEmpty(medication)) return true;

    if (
      cellDetainees
      && cellDetainees.length > 0
      && cellDetainees.every((detainee) => detainee.location)
    ) return true;

    return false;
  };

  handleRadioGroupChange = (event) => {
    const {
      acceptMedicationAll,
      rejectMedicationAll,
      notApplicableMedicationAll,
      cellDetainees,
    } = this.props;
    const { value } = event.target;
    if (value === 'accept') acceptMedicationAll(cellDetainees.filter((detainee) => !detainee.location));
    if (value === 'reject') rejectMedicationAll(cellDetainees.filter((detainee) => !detainee.location));
    if (value === 'not-applicable') notApplicableMedicationAll(cellDetainees.filter((detainee) => !detainee.location));
  };

  handleSave = () => {
    const { medication, cellName, userName, onSave } = this.props;
    onSave(medication, cellName, userName);
  };

  render() {
    const {
      cellDetainees,
      cellName,
      isCellDetaineesLoaded,
      isAuthenticated,
      medication,
      isSavingMedication,
      acceptMedication,
      rejectMedication,
      notApplicableMedication,
    } = this.props;
    return (
      <React.Fragment>
        <CellDetaineeGrid>
          {isCellDetaineesLoaded && !isSavingMedication > 0 ? (
            <React.Fragment>
              {cellDetainees.map((cellDetainee) => (
                <Grid key={cellDetainee.id} item sm={4}>
                  <MedicationCellDetaineeCard
                    cellDetainee={cellDetainee}
                    cellName={cellName}
                    isAuthenticated={isAuthenticated}
                    medication={medication[cellDetainee.id]}
                    onAcceptClick={() => acceptMedication(cellDetainee)}
                    onRejectClick={() => rejectMedication(cellDetainee)}
                    onNotApplicableClick={() => notApplicableMedication(cellDetainee)
                    }
                  />
                </Grid>
              ))}
            </React.Fragment>
          ) : (
            <Loading />
          )}
        </CellDetaineeGrid>
        <MedicationFooter
          radioButtonValue={this.getMedicationRadioButtonValue()}
          isSavingMedication={isSavingMedication}
          isSaveDisabled={this.isSaveDisabled()}
          onRadioGroupChange={this.handleRadioGroupChange}
          onSave={this.handleSave}
        />
      </React.Fragment>
    );
  }
}

MedicationComponent.propTypes = propTypes;
MedicationComponent.defaultProps = defaultProps;

export default MedicationComponent;
