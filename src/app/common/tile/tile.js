import React from 'react';
import { PropTypes } from 'prop-types';
import Card from '@material-ui/core/Card';
import TileBody from './Body/TileBody';
import TileFooter from './Footer/TileFooter';
import TileHeader from './Header/TileHeader';

const styles = {
  card: {
    maxWidth: 190,
    backgroundColor: 'lightgray',
  },
};

const Tile = (props) => {
  const { detainee, isAuthenticated } = props;

  return (
    <div>
      <Card style={styles.card}>
        <TileHeader detainee={detainee} />
        <TileBody detainee={detainee} isAuthenticated={isAuthenticated} />
        <TileFooter {...props} />
      </Card>
    </div>
  );
};

Tile.propTypes = {
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
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Tile;
