import React from 'react';
import { PropTypes } from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import DetaineeLocationLogo from '../../DetaineeLocationLogo';

const styles = {
  main: {
    padding: '0 3px',
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 0.15,
    paddingTop: 0,
  },
  subheader: {
    fontSize: 14,
    fontWeight: 600,
  },
  locationLogo: {
    height: 50,
    width: 50,
    top: 10,
    right: 20,
  },
};

const TileHeader = (props) => {
  const { detainee } = props;
  const strDivisions = detainee.division.join(', ').trim();

  return (
    <CardHeader
      style={styles.main}
      title={(
        <div style={styles.title}>
          <p>{detainee.firstName}</p>
          <p>{detainee.lastName}</p>
          <p style={styles.subheader}>{strDivisions}</p>
        </div>
)}
      action={(
        <DetaineeLocationLogo
          location={detainee.location}
          style={styles.locationLogo}
        />
)}
    />
  );
};

TileHeader.propTypes = {
  detainee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    arrestId: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    division: PropTypes.arrayOf(PropTypes.string).isRequired,
    detentionUnitName: PropTypes.string,
    location: PropTypes.string.isRequired,
    intakePhotoResourceUri: PropTypes.string,
    gender: PropTypes.string,
    withCaution: PropTypes.bool,
    cautionsArray: PropTypes.arrayOf(PropTypes.string),
    mustBeKeptAlone: PropTypes.bool,
    isSuicidal: PropTypes.bool,
    isContagious: PropTypes.bool,
    hasWarning: PropTypes.bool,
    isUnderMedication: PropTypes.bool,
  }).isRequired,
};

export default TileHeader;
