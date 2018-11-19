import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import CellDetaineeGrid from '../../common/CellDetaineeGrid';
import MealCellDetaineeCard from './MealCellDetaineeCard';
import MealFooter from './MealFooter';
import Loading from '../../common/Loading';

const propTypes = {
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({})),
  isCellDetaineesLoaded: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  getCellDetainees: PropTypes.func.isRequired,
  cellName: PropTypes.string.isRequired,
  meal: PropTypes.shape({}).isRequired,
  isSavingMeal: PropTypes.bool.isRequired,
  acceptMeal: PropTypes.func.isRequired,
  rejectMeal: PropTypes.func.isRequired,
  notApplicableMeal: PropTypes.func.isRequired,
  acceptMealAll: PropTypes.func.isRequired,
  rejectMealAll: PropTypes.func.isRequired,
  notApplicableMealAll: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const defaultProps = {
  cellDetainees: [],
  userName: null,
};

class MealComponent extends Component {
  componentDidMount() {
    const { cellName, getCellDetainees } = this.props;
    getCellDetainees(cellName);
  }

  getMealRadioButtonValue = () => {
    const { isCellDetaineesLoaded, cellDetainees, meal } = this.props;
    if (!isCellDetaineesLoaded || _.isEmpty(meal)) {
      return '';
    }
    const isAllAccept = cellDetainees
      .filter((detainee) => !detainee.location)
      .every((detainee) => meal[detainee.id].accept);
    const isAllReject = cellDetainees
      .filter((detainee) => !detainee.location)
      .every((detainee) => meal[detainee.id].reject);
    const isAllNotApplicable = cellDetainees
      .filter((detainee) => !detainee.location)
      .every((detainee) => meal[detainee.id].notApplicable);

    if (isAllAccept) return 'accept';
    if (isAllReject) return 'reject';
    if (isAllNotApplicable) return 'not-applicable';
    return '';
  };

  isSaveDisabled = () => {
    const { isCellDetaineesLoaded, cellDetainees, meal } = this.props;
    if (!isCellDetaineesLoaded && !_.isEmpty(meal)) return true;

    if (
      cellDetainees
      && cellDetainees.length > 0
      && cellDetainees.every((detainee) => detainee.location)
    ) return true;

    return false;
  };

  handleRadioGroupChange = (event) => {
    const {
      acceptMealAll,
      rejectMealAll,
      notApplicableMealAll,
      cellDetainees,
    } = this.props;
    const { value } = event.target;
    if (value === 'accept') acceptMealAll(cellDetainees.filter((detainee) => !detainee.location));
    if (value === 'reject') rejectMealAll(cellDetainees.filter((detainee) => !detainee.location));
    if (value === 'not-applicable') notApplicableMealAll(cellDetainees.filter((detainee) => !detainee.location));
  };

  handleSave = () => {
    const {
      meal, cellName, userName, onSave,
    } = this.props;
    onSave(meal, cellName, userName);
  };

  render() {
    const {
      cellDetainees,
      cellName,
      isCellDetaineesLoaded,
      isAuthenticated,
      meal,
      isSavingMeal,
      acceptMeal,
      rejectMeal,
      notApplicableMeal,
    } = this.props;
    return (
      <React.Fragment>
        <CellDetaineeGrid>
          {isCellDetaineesLoaded && !isSavingMeal ? (
            <React.Fragment>
              {cellDetainees.map((cellDetainee) => (
                <Grid key={cellDetainee.id} item sm={4}>
                  <MealCellDetaineeCard
                    cellDetainee={cellDetainee}
                    cellName={cellName}
                    isAuthenticated={isAuthenticated}
                    meal={meal[cellDetainee.id]}
                    onAcceptClick={() => acceptMeal(cellDetainee)}
                    onRejectClick={() => rejectMeal(cellDetainee)}
                    onNotApplicableClick={() => notApplicableMeal(cellDetainee)}
                  />
                </Grid>
              ))}
            </React.Fragment>
          ) : (
            <Loading />
          )}
        </CellDetaineeGrid>
        <MealFooter
          radioButtonValue={this.getMealRadioButtonValue()}
          isSavingMeal={isSavingMeal}
          isSaveDisabled={this.isSaveDisabled()}
          onRadioGroupChange={this.handleRadioGroupChange}
          onSave={this.handleSave}
        />
      </React.Fragment>
    );
  }
}

MealComponent.propTypes = propTypes;
MealComponent.defaultProps = defaultProps;

export default MealComponent;
