import React from 'react';
import { PropTypes } from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import inCell from '../../images/InCell.png';
import phoneAccept from '../../images/PhoneAccept.png';
import medicalVisit from '../../images/MedicalVisit.png';
import inTransit from '../../images/InTransit.png';
import fingerprinting from '../../images/Fingerprinting.png';
import bailHearingGeneral from '../../images/BailHearingGeneral.png';

const DetaineeLocationLogo = (props) => {
  const { location, style } = props;
  let imageLocation = inCell;

  if (location.toLowerCase().indexOf('in transit') >= 0) {
    if (
      location.toLowerCase().indexOf('remand') === -1
      && location.toLowerCase().indexOf('release') === -1
    ) {
      imageLocation = inTransit;
    }
  }
  // Notice!! "...in progress" does not exist for Interview and Breath Test rooms
  switch (location.toLowerCase()) {
    case 'phone - in progress':
      imageLocation = phoneAccept;
      break;
    case 'medical - in progress':
      imageLocation = medicalVisit;
      break;
    case 'fingerprinting - in progress':
      imageLocation = fingerprinting;
      break;
    case 'bail hearing - in progress':
      imageLocation = bailHearingGeneral;
      break;
    default:
      break;
  }

  return <Avatar src={imageLocation} style={style} />;
};

DetaineeLocationLogo.propTypes = {
  location: PropTypes.string.isRequired,
  style: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
  }).isRequired,
};

export default DetaineeLocationLogo;
