import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  content: {
    display: "flex",
    flex: 1,
    height: 43,
    justifyContent: "flex-start",
    padding: "0 2px",
  },
  adjustHeight1: {
    alignItems: "flex-start",
  },
  adjustHeight2: {
    alignItems: "center",
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
    fontFamily: "arial",
    fontWeight: 700,
    fontSize: 13,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "red",
    marginTop: "-11px",
    zIndex: 10,
    width: "110%"
  },
  cautionDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}

export const TileFooterDetaineeWarnings = (props) => {

  const { detainee } = props;

  if (detainee == null) {
    return <noscript />;
  }

  const avatarStyle = !detainee.withCaution ? styles.biggerAvatar : styles.smallerAvatar;
  const cardContentStyle = !detainee.withCaution ?
    { ...styles.content, ...styles.adjustHeight2 } :
    { ...styles.content, ...styles.adjustHeight1 };

  const cautionsArray = detainee.cautionsArray.join("").trim();

  return (
    <CardContent style={cardContentStyle}>
      <div style={styles.cautionDiv}>
        {detainee.withCaution &&
          <Avatar src={require("images/CautionPresent.png")} style={avatarStyle} />
        }
        {detainee.withCaution &&
          <p style={styles.cautionLetter}>
            {cautionsArray}
          </p>
        }
      </div>

      {detainee.mustBeKeptAlone &&
        <Avatar src={require("images/KeepAlone.png")} style={avatarStyle} />
      }
      {detainee.isSuicidal &&
        <Avatar src={require("images/SuicideWarning.png")} style={avatarStyle} />
      }
      {detainee.isContagious &&
        <Avatar src={require("images/Contagious.png")} style={avatarStyle} />
      }
      {detainee.hasWarning &&
        <Avatar src={require("images/OtherWarning.png")} style={avatarStyle} />
      }
      {detainee.isUnderMedication &&
        <Avatar src={require("images/MedicineAccept.png")} style={avatarStyle} />
      }

    </CardContent>
  );
}