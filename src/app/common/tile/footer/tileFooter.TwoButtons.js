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

class TileFooterTwoButtons extends React.PureComponent {

  handleWelfareAction = (detentionLogAction) => {
    this.props.editDetaineeWelfareData({
      id: this.props.detainee.id,
      arrestId: this.props.detainee.arrestId,
      detentionLogType: constants.LOG_TYPE_WELFARE_ISCELLCHECK,
      detentionLogAction,
      // userCardNumber: "",
      // userName: ""
    });
  };

  render() {
    const { isCellCheck } = this.props;
    if (!isCellCheck) {
      return <noscript />;
    }

    const { detainee } = this.props;
    if (detainee.location !== "") { //detainee is away, not in cell
      return <CardActions style={styles.content} />;
    }

    const { cellWelfareData } = this.props;

    const detentionLogAction = cellWelfareData.length === 0 ? "" :
      cellWelfareData.filter(d => d.arrestId === detainee.arrestId &&
        d.detentionLogType === constants.LOG_TYPE_WELFARE_ISCELLCHECK)[0].detentionLogAction;

    return (
      <CardActions>
        <ToggleButtonGroup value={detentionLogAction} exclusive onChange={this.handleWelfareAction} style={styles.buttonsGroup}>
          <ToggleButton value="Visual" style={styles.button}>
            <Avatar src={require("images/WellnessVisual.png")} />
          </ToggleButton>
          <ToggleButton value="Verbal" style={styles.button}>
            <Avatar src={require("images/WellnessVerbal.png")} />
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
    isCellCheck: state.welfareManagementData.welfareFlagData.isCellCheck,
    cellWelfareData: state.welfareManagementData.cellWelfareData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TileFooterTwoButtons);