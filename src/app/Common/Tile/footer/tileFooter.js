import React from 'react';
import { PropTypes } from 'prop-types';
import TileFooterDetaineeWarnings from './TileFooter.DetaineeWarnings';
import TileFooterThreeButtons from './TileFooter.ThreeButtons';
import TileFooterTwoButtons from './TileFooter.TwoButtons';
// import TileFooterActivityRoom from "./tileFooter.ActivityRoom";

const styles = {
  divFooter: {
    padding: 0,
    margin: 0,
    height: 43,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
};

class TileFooter extends React.PureComponent {
  showModal = (/* caseFlow, reason */) => {
    const { isUsedOn, detainee } = this.props;

    if (isUsedOn === 'activityRoom' && detainee != null) {
      /* this.props.showModal(detainee.id, caseFlow, reason); */
    }
  };

  render() {
    const {
      isAuthenticated,
      isUsedOn,
      detainee,
      isMeal,
      isMedication,
      isCellCheck,
    } = this.props;

    if (!isAuthenticated) {
      return <noscript />;
    }

    return (
      <div style={styles.divFooter}>
        {isUsedOn === 'cell'
          && (!isMeal
            && !isCellCheck
            && !isMedication && (
              <TileFooterDetaineeWarnings detainee={detainee} />
          ))}
        {isUsedOn === 'cell' && <TileFooterThreeButtons detainee={detainee} />}
        {isUsedOn === 'cell' && <TileFooterTwoButtons detainee={detainee} />}
        {/* {isUsedOn === "activityRoom" && (
          <TileFooterActivityRoom {...({})} detainee={detainee} showModal={this.showModal} />
        )} */}
      </div>
    );
  }
}

TileFooter.propTypes = {
  isMeal: PropTypes.bool.isRequired,
  isMedication: PropTypes.bool.isRequired,
  isCellCheck: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isUsedOn: PropTypes.oneOf(['cell', 'detaineeProfile', 'activityRoom'])
    .isRequired,
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
};

export default TileFooter;
