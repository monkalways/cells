import React from "react";
import TileBody from "./body/tileBody";
import TileFooter from "./footer/tileFooter";
import TileHeader from "./header/tileHeader";
import Card from "@material-ui/core/Card";

const styles = {
  card: {
    maxWidth: 190,
    backgroundColor: "lightgray"
  }
}

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
}

export default Tile;