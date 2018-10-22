import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { operations } from '../../WelfareManagement/duck';
import * as constants from '../../constants';
import wellnessVisual from '../../../images/WellnessVisual.png';
import mealAccept from '../../../images/MealAccept.png';
import medicineAccept from '../../../images/MedicineAccept.png';

const styles = {
  outerDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  welfareButton: {
    height: 67,
    width: 67,
  },
  disabledButton: {
    opacity: 0.25,
  },
};

class FooterThreeButtons extends React.PureComponent {
  static defaultProps = {
    cellDetainees: [],
  };

  handleMealButtonClick = () => {
    const {
      setIsMeal,
      deleteCellWelfareData,
      cellDetainees,
      createDetaineeWelfareData,
    } = this.props;

    setIsMeal();
    deleteCellWelfareData();

    const detaineesForWelfare = cellDetainees.filter((x) => x.location === '');
    detaineesForWelfare.forEach((d) => {
      const detaineeWelfareData = {
        id: d.id,
        arrestId: d.arrestId,
        detentionLogType: constants.LOG_TYPE_WELFARE_ISMEAL,
        detentionLogAction: constants.WELFARE_ACTION_ACCEPT,
      };

      createDetaineeWelfareData(detaineeWelfareData);
    });
  };

  handleMedicationButtonClick = () => {
    const {
      setIsMedication,
      deleteCellWelfareData,
      cellDetainees,
      createDetaineeWelfareData,
    } = this.props;

    setIsMedication();
    deleteCellWelfareData();

    const detaineesForWelfare = cellDetainees.filter((x) => x.location === '' && x.isUnderMedication);
    detaineesForWelfare.forEach((d) => {
      const detaineeWelfareData = {
        id: d.id,
        arrestId: d.arrestId,
        detentionLogType: constants.LOG_TYPE_WELFARE_ISMEDICATION,
        detentionLogAction: constants.WELFARE_ACTION_ACCEPT,
      };

      createDetaineeWelfareData(detaineeWelfareData);
    });
  };

  handleCellCheckButtonClick = () => {
    const {
      setIsCellCheck,
      deleteCellWelfareData,
      cellDetainees,
      createDetaineeWelfareData,
    } = this.props;

    setIsCellCheck();
    deleteCellWelfareData();

    const detaineesForWelfare = cellDetainees.filter((x) => x.location === '');
    detaineesForWelfare.forEach((d) => {
      const detaineeWelfareData = {
        id: d.id,
        arrestId: d.arrestId,
        detentionLogType: constants.LOG_TYPE_WELFARE_ISCELLCHECK,
        detentionLogAction: constants.WELFARE_ACTION_VISUAL,
      };

      createDetaineeWelfareData(detaineeWelfareData);
    });
  };

  render() {
    const { cellDetainees } = this.props;
    const isCellOccupied = cellDetainees.some((x) => x.location === '');
    const existDetaineeWithMedicationPlan = cellDetainees.some((x) => x.isUnderMedication);

    return (
      <div style={styles.outerDiv}>
        {isCellOccupied ? (
          <Button
            variant="fab"
            color="primary"
            aria-label="CellCheck"
            style={styles.welfareButton}
            onClick={this.handleCellCheckButtonClick}
          >
            <Avatar src={wellnessVisual} style={styles.welfareButton} />
          </Button>
        ) : (
          <Avatar
            src={wellnessVisual}
            style={{ ...styles.welfareButton, ...styles.disabledButton }}
          />
        )}

        {isCellOccupied ? (
          <Button
            variant="fab"
            color="primary"
            aria-label="Meal"
            style={styles.welfareButton}
            onClick={this.handleMealButtonClick}
          >
            <Avatar src={mealAccept} style={styles.welfareButton} />
          </Button>
        ) : (
          <Avatar
            src={mealAccept}
            style={{ ...styles.welfareButton, ...styles.disabledButton }}
          />
        )}

        {isCellOccupied && existDetaineeWithMedicationPlan ? (
          <Button
            variant="fab"
            color="primary"
            aria-label="Medication"
            style={styles.welfareButton}
            onClick={this.handleMedicationButtonClick}
          >
            <Avatar src={medicineAccept} style={styles.welfareButton} />
          </Button>
        ) : (
          <Avatar
            src={medicineAccept}
            style={{ ...styles.welfareButton, ...styles.disabledButton }}
          />
        )}
      </div>
    );
  }
}

FooterThreeButtons.propTypes = {
  setIsMeal: PropTypes.func.isRequired,
  setIsMedication: PropTypes.func.isRequired,
  setIsCellCheck: PropTypes.func.isRequired,
  deleteCellWelfareData: PropTypes.func.isRequired,
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    arrestId: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    division: PropTypes.arrayOf(PropTypes.string).isRequired,
    detentionUnitName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    intakePhotoResourceUri: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    withCaution: PropTypes.bool.isRequired,
    cautionsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    mustBeKeptAlone: PropTypes.bool.isRequired,
    isSuicidal: PropTypes.bool.isRequired,
    isContagious: PropTypes.bool.isRequired,
    hasWarning: PropTypes.bool.isRequired,
    isUnderMedication: PropTypes.bool.isRequired,
  })),
  createDetaineeWelfareData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  const setIsMeal = () => {
    dispatch(operations.setIsMeal());
  };

  const setIsMedication = () => {
    dispatch(operations.setIsMedication());
  };

  const setIsCellCheck = () => {
    dispatch(operations.setIsCellCheck());
  };

  const createDetaineeWelfareData = (detaineeWelfareData) => {
    dispatch(operations.createDetaineeWelfareData(detaineeWelfareData));
  };

  const deleteCellWelfareData = () => {
    dispatch(operations.deleteCellWelfareData());
  };

  return {
    setIsMeal,
    setIsMedication,
    setIsCellCheck,
    createDetaineeWelfareData,
    deleteCellWelfareData,
  };
};

const mapStateToProps = (state) => ({
  cellDetainees: state.cellManagementData.cellDetainees,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FooterThreeButtons);
