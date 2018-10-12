import React from "react";
import FooterThreeButtons from "./Footer.ThreeButtons";
import FooterToggle from "./Footer.Toggle";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const styles = {
  outerDiv: {
    display: "flex",
    justifyContent: "space-between",
    //padding: "0px 0px",
    width: 600,
    height: "9%",
    margin: 0,
    bottom: 0
  },
  footerButton: {
    height: 67,
    width: 67,
  },
  divScanButton: {
    display: "block",
    height: "50%",
    border: "3px solid red",
    margin: "auto",
    padding: "0px 5px",
    backgroundColor: "bisque",
    fontSize: 30,
    fontWeight: 600,
    bottom: 0
  }
}

const FooterComponent = (props) => {
  const { isAuthenticated, isUsedOn, isMeal, isMedication, isCellCheck } = props;
  const providedWelfare = isMeal || isMedication || isCellCheck;

  const primaryColor = isCellCheck ? "#e08823" : isMeal ? "#8bc349" : isMedication ? "#0000ff" : "#000000";
  const secondaryColor = isCellCheck ? "#485559" : "#ad144f";

  if (!isAuthenticated) {
    return (
      <div style={styles.outerDiv}>
        <div style={styles.divScanButton}>
          Scan ID Card to Access
        </div>
      </div>
    );
  }

  return (
    <div style={styles.outerDiv}>
      {isUsedOn === "cell" && !providedWelfare && <FooterThreeButtons />}
      {((isUsedOn === "cell" && providedWelfare) || isUsedOn === "detaineeProfile") &&
        <Button variant="fab" aria-label="Back" onClick={props.navigateBack} style={styles.footerButton}>
          <Avatar src={require("images/BackArrow.png")} style={styles.footerButton} />
        </Button>
      }
      {isUsedOn === "cell" && providedWelfare &&
        <Button variant="fab" aria-label="Save" onClick={props.saveWelfareData} style={styles.footerButton}>
          <Avatar src={require("images/SaveButton.png")} style={styles.footerButton} />
        </Button>
      }
      {isUsedOn === "cell" && providedWelfare &&
        <FooterToggle
          isCellCheck={isCellCheck}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      }
    </div>
  );
}

export default FooterComponent;