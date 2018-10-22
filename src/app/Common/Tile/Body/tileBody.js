import React from 'react';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import maleGenericImage from '../../../../images/maleGenericImage1.png';
import femaleGenericImage from '../../../../images/femaleGenericImage1.png';
import unknownGender from '../../../../images/UnknownGender.png';

const styles = {
  cardMedia: {
    height: 130,
    paddingTop: 0,
    marginTop: 0,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'absolute',
    backgroundSize: '100% 120%',
  },
};

const TileBody = (props) => {
  const { isAuthenticated, detainee } = props;

  let photoUrl;
  if (props.detainee.intakePhotoResourceUri !== '') {
    photoUrl = `data:image/png;base64,${detainee.intakePhotoResourceUri}`;
  } else {
    switch (detainee.gender) {
      case 'Male':
        photoUrl = maleGenericImage;
        break;
      case 'Female':
        photoUrl = femaleGenericImage;
        break;
      default:
        photoUrl = unknownGender;
    }
  }

  let cardMedia = <div />;

  if (!isAuthenticated) {
    cardMedia = (
      <CardMedia
        style={styles.cardMedia}
        image={unknownGender}
        title="Other Gender Generic Image"
      />
    );
    if (detainee.gender === 'Female') {
      cardMedia = (
        <CardMedia
          style={styles.cardMedia}
          image={femaleGenericImage}
          title="Female Generic Image"
        />
      );
    }
    if (detainee.gender === 'Male') {
      cardMedia = (
        <CardMedia
          style={styles.cardMedia}
          image={maleGenericImage}
          title="Male Generic Image"
        />
      );
    }
  }

  const toLink = {
    pathname: `/detaineeProfile/${detainee.id}`,
    state: { detainee },
  };

  if (isAuthenticated) {
    cardMedia = (
      <Link to={toLink}>
        <CardMedia
          style={styles.cardMedia}
          image={photoUrl}
          title="Detainee Photo"
        />
      </Link>
    );
  }

  return cardMedia;
};

export default TileBody;
