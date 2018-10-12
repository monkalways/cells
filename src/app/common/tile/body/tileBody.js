import React from "react";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  cardMedia: {
    height: 130,
    paddingTop: 0,
    marginTop: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "absolute",
    backgroundSize: "100% 120%"
  }
};

const TileBody = (props) => {

  const { isAuthenticated, detainee } = props;

  let photoUrl;
  if (props.detainee.intakePhotoResourceUri !== "") {
    photoUrl = `data:image/png;base64,${detainee.intakePhotoResourceUri}`;
  } else {
    switch (detainee.gender) {
      case "Male":
        photoUrl = require("images/maleGenericImage1.png");
        break;
      case "Female":
        photoUrl = require("images/femaleGenericImage1.png");
        break;
      default:
        photoUrl = require("images/UnknownGender.jpg");
    }
  }

  let cardMedia = <div />;

  if (!isAuthenticated) {
    cardMedia = detainee.gender === "Female" ?
      <CardMedia
        style={styles.cardMedia}
        image={require("images/femaleGenericImage1.png")}
        title="Female Generic Image"
      /> : props.detainee.gender === "Male" ?
        <CardMedia
          style={styles.cardMedia}
          image={require("images/maleGenericImage1.png")}
          title="Male Generic Image"
        /> :
        <CardMedia
          style={styles.cardMedia}
          image={require("images/UnknownGender.jpg")}
          title="Other Gender Generic Image"
        />
      ;
  }

  const toLink = {
    pathname: `/detaineeProfile/${detainee.id}`,
    state: { detainee: detainee }
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
}

export default TileBody;