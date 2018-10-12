import React from "react";
import { connect } from "react-redux";
import { operations } from "app/welfareManagement/duck";
import * as constants from "app/constants";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const styles = {
  outerDiv: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
  },
  welfareButton: {
    height: 67,
    width: 67,
  },
  disabledButton: {
    opacity: 0.25
  }
}

class FooterThreeButtons extends React.PureComponent {

  handleMealButtonClick = () => {
    this.props.setIsMeal();
    this.props.deleteCellWelfareData();
    const detaineesForWelfare = this.props.cellDetainees.filter(x => x.location === "");
    detaineesForWelfare.forEach(d => {
      const detaineeWelfareData = {
        id: d.id,
        arrestId: d.arrestId,
        detentionLogType: constants.LOG_TYPE_WELFARE_ISMEAL,
        detentionLogAction: constants.WELFARE_ACTION_ACCEPT,
        // userCardNumber: "",
        // userName:""
      };
      this.props.createDetaineeWelfareData(detaineeWelfareData);
    });
  }

  handleMedicationButtonClick = () => {
    this.props.setIsMedication();
    this.props.deleteCellWelfareData();
    const detaineesForWelfare = this.props.cellDetainees.filter(x => x.location === "" && x.isUnderMedication);
    detaineesForWelfare.forEach(d => {
      const detaineeWelfareData = {
        id: d.id,
        arrestId: d.arrestId,
        detentionLogType: constants.LOG_TYPE_WELFARE_ISMEDICATION,
        detentionLogAction: constants.WELFARE_ACTION_ACCEPT,
        // userCardNumber: "",
        // userName: ""
      };
      this.props.createDetaineeWelfareData(detaineeWelfareData);
    });
  }

  handleCellCheckButtonClick = () => {
    this.props.setIsCellCheck();
    this.props.deleteCellWelfareData();
    const detaineesForWelfare = this.props.cellDetainees.filter(x => x.location === "");
    detaineesForWelfare.forEach(d => {
      const detaineeWelfareData = {
        id: d.id,
        arrestId: d.arrestId,
        detentionLogType: constants.LOG_TYPE_WELFARE_ISCELLCHECK,
        detentionLogAction: constants.WELFARE_ACTION_VISUAL,
        // userCardNumber: "",
        // userName: ""
      };
      this.props.createDetaineeWelfareData(detaineeWelfareData);
    });
  }

  render() {
    const isCellOccupied = this.props.cellDetainees.some(x => x.location === "");
    const existDetaineeWithMedicationPlan = this.props.cellDetainees.some(x => x.isUnderMedication);

    return (
      <div style={styles.outerDiv}>
        {isCellOccupied ?
          <Button variant="fab" color="primary" aria-label="CellCheck"
            style={styles.welfareButton}
            onClick={this.handleCellCheckButtonClick}>
            <Avatar src={require("images/WellnessVisual.png")}
              style={styles.welfareButton} />
          </Button> :
          <Avatar src={require("images/WellnessVisual.png")}
            style={{ ...styles.welfareButton, ...styles.disabledButton }} />
        }

        {isCellOccupied ?
          <Button variant="fab" color="primary" aria-label="Meal"
            style={styles.welfareButton}
            onClick={this.handleMealButtonClick}>
            <Avatar src={require("images/MealAccept.png")}
              style={styles.welfareButton} />
          </Button> :
          <Avatar src={require("images/MealAccept.png")}
            style={{ ...styles.welfareButton, ...styles.disabledButton }} />
        }

        {isCellOccupied && existDetaineeWithMedicationPlan ?
          <Button variant="fab" color="primary" aria-label="Medication"
            style={styles.welfareButton}
            onClick={this.handleMedicationButtonClick}>
            <Avatar src={require("images/MedicineAccept.png")}
              style={styles.welfareButton} />
          </Button> :
          <Avatar src={require("images/MedicineAccept.png")}
            style={{ ...styles.welfareButton, ...styles.disabledButton }} />
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const setIsMeal = () => {
    dispatch(operations.setIsMeal());
  };

  const setIsMedication = () => {
    dispatch(operations.setIsMedication());
  };

  const setIsCellCheck = () => {
    dispatch(operations.setIsCellCheck());
  }

  const createDetaineeWelfareData = (detaineeWelfareData) => {
    dispatch(operations.createDetaineeWelfareData(detaineeWelfareData));
  }

  const deleteCellWelfareData = () => {
    dispatch(operations.deleteCellWelfareData());
  }

  return {
    setIsMeal,
    setIsMedication,
    setIsCellCheck,
    createDetaineeWelfareData,
    deleteCellWelfareData
  };
};

const mapStateToProps = (state) => {
  return {
    cellDetainees: state.cellManagementData.cellDetainees
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterThreeButtons);