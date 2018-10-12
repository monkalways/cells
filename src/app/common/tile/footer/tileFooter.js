import React from "react";
import { TileFooterDetaineeWarnings } from "./tileFooter.DetaineeWarnings";
import TileFooterThreeButtons from "./tileFooter.ThreeButtons";
import TileFooterTwoButtons from "./tileFooter.TwoButtons";
//import TileFooterActivityRoom from "./tileFooter.ActivityRoom";

const styles = {
  divFooter: {
    padding: 0,
    margin: 0,
    height: 43,
    width: "100%",
    display: "flex",
    justifyContent: "space-around"
  }
}

class TileFooter extends React.PureComponent {

  showModal = (caseFlow, reason) => {
    const { isUsedOn, detainee } = this.props;

    if (isUsedOn === "activityRoom" && detainee != null) {
      this.props.showModal(detainee.id, caseFlow, reason);
    }
  }

  render() {
    const { isAuthenticated, isUsedOn, detainee, isMeal, isMedication, isCellCheck } = this.props;

    if (!isAuthenticated) {
      return <noscript />;
    }

    return (
      <div style={styles.divFooter}>
        {isUsedOn === "cell" && (
          !isMeal &&
          !isCellCheck &&
          !isMedication &&
          <TileFooterDetaineeWarnings detainee={detainee} />
        )}
        {isUsedOn === "cell" && (
          <TileFooterThreeButtons detainee={detainee} />
        )}
        {isUsedOn === "cell" && (
          <TileFooterTwoButtons detainee={detainee} />
        )}
        {/* {isUsedOn === "activityRoom" && (
          <TileFooterActivityRoom {...({})} detainee={detainee} showModal={this.showModal} />
        )} */}
      </div>
    );
  }
}

export default TileFooter;