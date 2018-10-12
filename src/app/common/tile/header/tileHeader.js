import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import DetaineeLocationLogo from "app/common/detaineeLocationLogo";

const styles = {
  main: {
    padding: "0 3px",
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
    right: 20
  }
}

const TileHeader = (props) => {

  const { detainee } = props;
  const strDivisions = detainee.division.join(", ").trim();

  return (
    <CardHeader style={styles.main}
      title={
        <div style={styles.title}>
          <p>{detainee.firstName}</p>
          <p>{detainee.lastName}</p>
          <p style={styles.subheader}>{strDivisions}</p>
        </div>
      }
      action={
        <DetaineeLocationLogo location={detainee.location} style={styles.locationLogo} />
      }
    />
  );
}

export default TileHeader;