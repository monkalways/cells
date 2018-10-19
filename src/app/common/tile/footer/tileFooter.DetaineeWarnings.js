import React from 'react';
import { PropTypes } from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import cautionPresent from '../../../../images/CautionPresent.png';
import keepAlone from '../../../../images/KeepAlone.png';
import suicideWarning from '../../../../images/SuicideWarning.png';
import contagious from '../../../../images/Contagious.png';
import otherWarning from '../../../../images/OtherWarning.png';
import medicineAccept from '../../../../images/MedicineAccept.png';

const styles = {
  content: {
    display: 'flex',
    flex: 1,
    height: 43,
    justifyContent: 'flex-start',
    padding: '0 2px',
  },
  adjustHeight1: {
    alignItems: 'flex-start',
  },
  adjustHeight2: {
    alignItems: 'center',
  },
  smallerAvatar: {
    width: 35,
    height: 35,
    margin: 2,
  },
  biggerAvatar: {
    width: 38,
    height: 38,
    padding: 0,
    margin: 0,
  },
  cautionLetter: {
    fontFamily: 'arial',
    fontWeight: 700,
    fontSize: 13,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'red',
    marginTop: '-11px',
    zIndex: 10,
    width: '110%',
  },
  cautionDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const TileFooterDetaineeWarnings = (props) => {
  const { detainee } = props;

  if (detainee == null) {
    return <noscript />;
  }

  const avatarStyle = !detainee.withCaution
    ? styles.biggerAvatar
    : styles.smallerAvatar;
  const cardContentStyle = !detainee.withCaution
    ? { ...styles.content, ...styles.adjustHeight2 }
    : { ...styles.content, ...styles.adjustHeight1 };

  const cautionsArray = detainee.cautionsArray.join('').trim();

  return (
    <CardContent style={cardContentStyle}>
      <div style={styles.cautionDiv}>
        {detainee.withCaution && (
          <Avatar src={cautionPresent} style={avatarStyle} />
        )}
        {detainee.withCaution && (
          <p style={styles.cautionLetter}>{cautionsArray}</p>
        )}
      </div>

      {detainee.mustBeKeptAlone && (
        <Avatar src={keepAlone} style={avatarStyle} />
      )}
      {detainee.isSuicidal && (
        <Avatar src={suicideWarning} style={avatarStyle} />
      )}
      {detainee.isContagious && <Avatar src={contagious} style={avatarStyle} />}
      {detainee.hasWarning && <Avatar src={otherWarning} style={avatarStyle} />}
      {detainee.isUnderMedication && (
        <Avatar src={medicineAccept} style={avatarStyle} />
      )}
    </CardContent>
  );
};

TileFooterDetaineeWarnings.propTypes = {
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

export default TileFooterDetaineeWarnings;
