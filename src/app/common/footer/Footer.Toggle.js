import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { operations, selectors } from '../../WelfareManagement/duck';
import * as constants from '../../constants';

const switchStyles = (primaryColor, secondaryColor) => ({
  ctrlSwitchBase: {
    color: primaryColor,
    '&$ctrlChecked': {
      color: secondaryColor,
      '& + $ctrlBar': {
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
    transform: 'translateX(45px)',
  },
  ctrlIcon: {
    width: 38,
    height: 38,
    marginLeft: 10,
  },
});

class FooterToggle extends React.PureComponent {
  state = { checkedToggle: false };

  style = () => {
    const { primaryColor, secondaryColor } = this.props;
    return switchStyles(primaryColor, secondaryColor);
  };

  handleChange = (event) => {
    const {
      isCellCheck,
      isMeal,
      isMedication,
      cellWelfareData,
      editDetaineeWelfareData,
    } = this.props;

    this.setState({
      checkedToggle: event.target.checked,
    });

    let detentionLogType;
    if (isMedication) detentionLogType = constants.LOG_TYPE_WELFARE_ISMEDICATION;
    if (isMeal) detentionLogType = constants.LOG_TYPE_WELFARE_ISMEAL;
    if (isCellCheck) detentionLogType = constants.LOG_TYPE_WELFARE_ISCELLCHECK;

    let detentionLogAction;
    if (isMeal || isMedication) {
      detentionLogAction = !event.target.checked
        ? constants.WELFARE_ACTION_ACCEPT
        : constants.WELFARE_ACTION_NOTAPPLICABLE;
    }
    if (isCellCheck) {
      detentionLogAction = !event.target.checked
        ? constants.WELFARE_ACTION_VISUAL
        : constants.WELFARE_ACTION_VERBAL;
    }

    cellWelfareData.forEach((d) => {
      const detaineeWelfareData = {
        id: d.id,
        arrestId: d.arrestId,
        detentionLogType,
        detentionLogAction,
        userCardNumber: '',
        userName: '',
      };
      editDetaineeWelfareData(detaineeWelfareData);
    });
  };

  divObject = (props) => {
    const {
      classes,
      checked,
      onChange,
    } = props; /* eslint react/prop-types: 0 */
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
        }}
      />
    );
  };

  render() {
    const { isCellCheck } = this.props;
    const { checkedToggle } = this.state;

    const Styled = withStyles(this.style)(this.divObject);

    let leftLabel = 'Accept';
    let rightLabel = 'N/A';

    if (isCellCheck) {
      leftLabel = 'Visual';
      rightLabel = 'Verbal';
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          width: '18%',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>{leftLabel}</span>
          <span style={{ fontSize: 14, fontWeight: 600 }}>{rightLabel}</span>
        </div>
        <div style={{ textAlign: 'left' }}>
          <Styled checked={checkedToggle} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

/* FooterToggle.divObject.propTypes = {
  classes: PropTypes.shape({
    ctrlSwitchBase: PropTypes.object.isRequired,
    ctrlChecked: PropTypes.object.isRequired,
    ctrlBar: PropTypes.object.isRequired,
    ctrlIcon: PropTypes.object.isRequired,
  }).isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
 */
FooterToggle.propTypes = {
  isMeal: PropTypes.bool.isRequired,
  isMedication: PropTypes.bool.isRequired,
  isCellCheck: PropTypes.bool.isRequired,
  cellWelfareData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    arrestId: PropTypes.string.isRequired,
    detentionLogType: PropTypes.string.isRequired,
    detentionLogAction: PropTypes.string,
  })).isRequired,
  editDetaineeWelfareData: PropTypes.func.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  const editDetaineeWelfareData = (detaineeWelfareData) => {
    dispatch(operations.editDetaineeWelfareData(detaineeWelfareData));
  };

  return {
    editDetaineeWelfareData,
  };
};

const mapStateToProps = (state) => ({
  isMeal: selectors.getMealFlag(state),
  isMedication: selectors.getMedicationFlag(state),
  isCellCheck: selectors.getCellCheckFlag(state),
  cellWelfareData: selectors.getCellWelfareData(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FooterToggle);
