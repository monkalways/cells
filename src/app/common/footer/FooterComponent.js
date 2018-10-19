import React from 'react';
import { PropTypes } from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FooterThreeButtons from './Footer.ThreeButtons';
import FooterToggle from './Footer.Toggle';
import backArrow from '../../../images/BackArrow.png';
import saveButton from '../../../images/SaveButton.png';

const styles = {
  outerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 600,
    height: '9%',
    margin: 0,
    bottom: 0,
  },
  footerButton: {
    height: 67,
    width: 67,
  },
  divScanButton: {
    display: 'block',
    height: '50%',
    border: '3px solid red',
    margin: 'auto',
    padding: '0px 5px',
    backgroundColor: 'bisque',
    fontSize: 30,
    fontWeight: 600,
    bottom: 0,
  },
};

const FooterComponent = (props) => {
  const {
    isAuthenticated,
    isUsedOn,
    isMeal,
    isMedication,
    isCellCheck,
    navigateBack,
    saveWelfareData,
  } = props;

  const providedWelfare = isMeal || isMedication || isCellCheck;

  let primaryColor = '#000000';
  if (isCellCheck) primaryColor = '#e08823';
  if (isMeal) primaryColor = '#8bc349';
  if (isMedication) primaryColor = '#0000ff';

  const secondaryColor = isCellCheck ? '#485559' : '#ad144f';

  const { footerButton, outerDiv, divScanButton } = styles;

  if (!isAuthenticated) {
    return (
      <div style={outerDiv}>
        <div style={divScanButton}>Scan ID Card to Access</div>
      </div>
    );
  }

  return (
    <div style={outerDiv}>
      {isUsedOn === 'cell' && !providedWelfare && <FooterThreeButtons />}
      {((isUsedOn === 'cell' && providedWelfare)
        || isUsedOn === 'detaineeProfile') && (
        <Button
          variant="fab"
          aria-label="Back"
          onClick={navigateBack}
          style={footerButton}
        >
          <Avatar src={backArrow} style={footerButton} />
        </Button>
      )}
      {isUsedOn === 'cell'
        && providedWelfare && (
          <Button
            variant="fab"
            aria-label="Save"
            onClick={saveWelfareData}
            style={footerButton}
          >
            <Avatar src={saveButton} style={footerButton} />
          </Button>
      )}
      {isUsedOn === 'cell'
        && providedWelfare && (
          <FooterToggle
            isCellCheck={isCellCheck}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
      )}
    </div>
  );
};

FooterComponent.propTypes = {
  isMeal: PropTypes.bool.isRequired,
  isMedication: PropTypes.bool.isRequired,
  isCellCheck: PropTypes.bool.isRequired,
  isUsedOn: PropTypes.oneOf(['cell', 'detaineeProfile', 'activityRoom'])
    .isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  navigateBack: PropTypes.func.isRequired,
  saveWelfareData: PropTypes.func.isRequired,
};

export default FooterComponent;
