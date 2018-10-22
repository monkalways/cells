import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { operations, selectors } from '../../../WelfareManagement/duck';
import mealAccept from '../../../../images/MealAccept.png';
import medicineAccept from '../../../../images/MedicineAccept.png';
import mealDecline from '../../../../images/MealDecline.png';
import medicineDecline from '../../../../images/MedicineDecline.png';
import notApplicable from '../../../../images/NotApplicable.png';

const styles = {
  button: {
    width: 40,
    height: 40,
    padding: 0,
    margin: 0,
  },
  buttonsGroup: {
    width: 190,
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 1,
  },
};

class TileFooterThreeButtons extends React.PureComponent {
  handleWelfareAction = (event, detentionLogValue) => {
    const { editDetaineeWelfareData, detainee, detentionLogType } = this.props;

    editDetaineeWelfareData({
      id: detainee.id,
      arrestId: detainee.arrestId,
      detentionLogType,
      detentionLogAction: detentionLogValue,
    });
  };

  render() {
    const {
      isMeal,
      isMedication,
      detainee,
      cellWelfareData,
      detentionLogType,
    } = this.props;

    if (!isMeal && !isMedication) {
      return <noscript />;
    }

    if (detainee.location !== '') {
      // detainee is away, not in cell
      return <CardActions style={styles.content} />;
    }
    if (isMedication && !detainee.isUnderMedication) {
      // detainee has no active medication plan
      return <CardActions style={styles.content} />;
    }

    const detentionLogValue = cellWelfareData.length === 0
      ? null
      : cellWelfareData.filter((d) => d.arrestId === detainee.arrestId
              && d.detentionLogType === detentionLogType)[0].detentionLogAction;

    return (
      <CardActions>
        <ToggleButtonGroup
          value={detentionLogValue}
          exclusive
          onChange={this.handleWelfareAction}
          style={styles.buttonsGroup}
        >
          <ToggleButton value="Accept" style={styles.button}>
            {isMeal && <Avatar src={mealAccept} />}
            {isMedication && <Avatar src={medicineAccept} />}
          </ToggleButton>
          <ToggleButton value="Reject" style={styles.button}>
            {isMeal && <Avatar src={mealDecline} />}
            {isMedication && <Avatar src={medicineDecline} />}
          </ToggleButton>
          <ToggleButton value="NotApplicable" style={styles.button}>
            <Avatar src={notApplicable} />
          </ToggleButton>
        </ToggleButtonGroup>
      </CardActions>
    );
  }
}

TileFooterThreeButtons.propTypes = {
  isMeal: PropTypes.bool.isRequired,
  isMedication: PropTypes.bool.isRequired,
  detainee: PropTypes.shape({
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
  }).isRequired,
  cellWelfareData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    arrestId: PropTypes.string.isRequired,
    detentionLogType: PropTypes.string.isRequired,
    detentionLogAction: PropTypes.string,
  })).isRequired,
  editDetaineeWelfareData: PropTypes.func.isRequired,
  detentionLogType: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  const editDetaineeWelfareData = (detaineeWelfareData) => {
    dispatch(operations.editDetaineeWelfareData(detaineeWelfareData));
  };

  return { editDetaineeWelfareData };
};

const mapStateToProps = (state) => ({
  isMeal: selectors.getMealFlag(state),
  isMedication: selectors.getMedicationFlag(state),
  cellWelfareData: selectors.getCellWelfareData(state),
  detentionLogType: selectors.getDetentionLogType(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TileFooterThreeButtons);
