import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { operations } from "app/welfareManagement/duck";
import * as constants from "app/constants";

const switchStyles = (primaryColor, secondaryColor) => ({
  ctrlSwitchBase: {
    color: primaryColor,
    "&$ctrlChecked": {
      color: secondaryColor,
      "& + $ctrlBar": {
        backgroundColor: secondaryColor,
      },
    },
  },
  ctrlBar: {
    borderRadius: 15,
    width: 77,
    height: 33,
    marginTop: -16,
    backgroundColor: primaryColor,
    marginLeft: -18,
  },
  ctrlChecked: {
    transform: "translateX(45px)"
  },
  ctrlIcon: {
    width: 38,
    height: 38,
    marginLeft: 10
  }
});

class FooterToggle extends React.PureComponent {
  state = { checkedToggle: false }

  handleChange = (event) => {
    const { isCellCheck, isMeal, isMedication } = this.props;

    this.setState({
      checkedToggle: event.target.checked
    });

    let detentionLogType;
    if (isMedication) detentionLogType = constants.LOG_TYPE_WELFARE_ISMEDICATION;
    if (isMeal) detentionLogType = constants.LOG_TYPE_WELFARE_ISMEAL;
    if (isCellCheck) detentionLogType = constants.LOG_TYPE_WELFARE_ISCELLCHECK;

    let detentionLogAction;
    if (isMeal || isMedication) {
      detentionLogAction = !event.target.checked ? constants.WELFARE_ACTION_ACCEPT : constants.WELFARE_ACTION_NOTAPPLICABLE;
    }
    if (isCellCheck) {
      detentionLogAction = !event.target.checked ? constants.WELFARE_ACTION_VISUAL : constants.WELFARE_ACTION_VERBAL;
    }

    this.props.cellWelfareData.forEach(d => {
      const detaineeWelfareData = {
        id: d.id,
        arrestId: d.arrestId,
        detentionLogType,
        detentionLogAction,
        userCardNumber: "",
        userName: ""
      };
      this.props.editDetaineeWelfareData(detaineeWelfareData);
    });
  }

  style = switchStyles(this.props.primaryColor, this.props.secondaryColor);

  divObject = (props) => {
    const { classes, checked, onChange } = props;
    return (
      <Switch
        checked={checked}
        onChange={onChange}
        value="checkedToggle"
        disableRipple
        classes={{
          switchBase: classes.ctrlSwitchBase,
          checked: classes.ctrlChecked,
          bar: classes.ctrlBar,
          icon: classes.ctrlIcon,
        }} />
    );
  }

  render() {
    const { isCellCheck } = this.props;
    const { checkedToggle } = this.state;

    const Styled = withStyles(this.style)(this.divObject);

    let leftLabel = "Accept";
    let rightLabel = "N/A";

    if (isCellCheck) {
      leftLabel = "Visual";
      rightLabel = "Verbal";
    }

    return (
      <div style={{ display: "flex", flexDirection: "column", alignContent: "center", width: "18%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>{leftLabel}</span>
          <span style={{ fontSize: 14, fontWeight: 600 }}>{rightLabel}</span>
        </div>
        <div style={{ textAlign: "left" }}><Styled checked={checkedToggle} onChange={this.handleChange} /></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const editDetaineeWelfareData = (detaineeWelfareData) => {
    dispatch(operations.editDetaineeWelfareData(detaineeWelfareData));
  }

  return {
    editDetaineeWelfareData,
  };
};

const mapStateToProps = (state) => {
  return {
    isMeal: state.welfareManagementData.welfareFlagData.isMeal,
    isMedication: state.welfareManagementData.welfareFlagData.isMedication,
    isCellCheck: state.welfareManagementData.welfareFlagData.isCellCheck,
    cellWelfareData: state.welfareManagementData.cellWelfareData,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterToggle);