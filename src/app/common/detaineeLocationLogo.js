import React from "react";
import Avatar from "@material-ui/core/Avatar";

const DetaineeLocationLogo = (props) => {

  const { location, style } = props;
  let imageLocation = require("images/InCell.png");

  if (location.toLowerCase().indexOf("in transit") >= 0) {
    if (location.toLowerCase().indexOf("remand") === -1 && location.toLowerCase().indexOf("release") === -1)
      imageLocation = require("images/InTransit.png");
  }
  // Notice!! "...in progress" does not exist for Interview and Breath Test rooms
  switch (location.toLowerCase()) {
    case "phone - in progress":
      imageLocation = require("images/PhoneAccept.png");
      break;
    case "medical - in progress":
      imageLocation = require("images/MedicalVisit.png");
      break;
    case "fingerprinting - in progress":
      imageLocation = require("images/Fingerprinting.png");
      break;
    case "bail hearing - in progress":
      imageLocation = require("images/BailHearingGeneral.png");
      break;
    default:
      break;
  }

  return <Avatar src={imageLocation} style={style} />;
}

export default DetaineeLocationLogo;