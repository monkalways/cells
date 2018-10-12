import React from "react";
import { connect } from "react-redux";
import { operations } from 'app/welfareManagement/duck';
import * as constants from 'app/constants';
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButton";

const styles = {
  // content: {
  //   padding: 0,
  //   margin: 0,
  //   height: 43,
  // },
  button: {
    width: 40,
    height: 40,
    padding: 0,
    margin: 0,
  },
  buttonsGroup: {
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-around",
    margin: 0
  }
}

class TileFooterThreeButtons extends React.PureComponent {

  handleWelfareAction = (detentionLogAction) => {
    const detentionLogType =
      this.props.isMeal ? constants.LOG_TYPE_WELFARE_ISMEAL :
        this.props.isMedication ? constants.LOG_TYPE_WELFARE_ISMEDICATION : constants.LOG_TYPE_WELFARE_ISCELLCHECK;

    this.props.editDetaineeWelfareData({
      id: this.props.detainee.id,
      arrestId: this.props.detainee.arrestId,
      detentionLogType,
      detentionLogAction,
      userCardNumber: "",
      userName: ""
    });
  };

  render() {
    const { isMeal, isMedication } = this.props;
    if (!isMeal && !isMedication) {
      return <noscript />;
    }

    const { detainee } = this.props;
    if (detainee.location !== "") { //detainee is away, not in cell
      return <CardActions style={styles.content} />;
    }
    if (isMedication && !detainee.isUnderMedication) { //detainee has no active medication plan
      return <CardActions style={styles.content} />;
    }

    const { cellWelfareData } = this.props;

    const detentionLogType =
      this.props.isMeal ? constants.LOG_TYPE_WELFARE_ISMEAL :
        this.props.isMedication ? constants.LOG_TYPE_WELFARE_ISMEDICATION : constants.LOG_TYPE_WELFARE_ISCELLCHECK;

    const detentionLogAction = cellWelfareData.length === 0 ? "" :
      cellWelfareData.filter(d => d.arrestId === detainee.arrestId && d.detentionLogType === detentionLogType)[0].detentionLogAction;

    return (
      <CardActions>
        <ToggleButtonGroup value={detentionLogAction} exclusive onChange={this.handleWelfareAction} style={styles.buttonsGroup}>
          <ToggleButton value="Accept" style={styles.button}>
            {isMeal && <Avatar src={require("images/MealAccept.png")} />}
            {isMedication && <Avatar src={require("images/MedicineAccept.png")} />}
          </ToggleButton>
          <ToggleButton value="Reject" style={styles.button}>
            {isMeal && <Avatar src={require("images/MealDecline.png")} />}
            {isMedication && <Avatar src={require("images/MedicineDecline.png")} />}
          </ToggleButton>
          <ToggleButton value="NotApplicable" style={styles.button}>
            <Avatar src={require("images/NotApplicable.png")} />
          </ToggleButton>
        </ToggleButtonGroup>
      </CardActions>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const editDetaineeWelfareData = (detaineeWelfareData) => {
    dispatch(operations.editDetaineeWelfareData(detaineeWelfareData));
  };

  return { editDetaineeWelfareData };
};

const mapStateToProps = (state) => {
  return {
    isMeal: state.welfareManagementData.welfareFlagData.isMeal,
    isMedication: state.welfareManagementData.welfareFlagData.isMedication,
    cellWelfareData: state.welfareManagementData.cellWelfareData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TileFooterThreeButtons);