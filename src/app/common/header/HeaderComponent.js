import React from "react";
//import { ActivityRoomUsageLogo } from "@app/components/header/ActivityRoom.UsageLogo";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const styles = {
  outerDiv: {
    display: "flex",
    flex: "3 0px",
    justifyContent: "space-around",
    //padding: 5,
    height: "8%",
  },
  innerDiv: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    flexFlow: "row wrap",
    alignItems: "center",
  },
  epsLogo: {
    height: 70,
    width: 70,
  },
  label: {
    fontSize: 20,
    fontWeight: 400,
    color: "red",
    marginRight: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 600
  }
}

class HeaderComponent extends React.PureComponent {

  logout = () => {
    this.props.logout();
  }

  render() {
    const { cell, isAuthenticated, redirectLogout, isUsedOn, activityRoomUsage } = this.props;

    if (redirectLogout) {
      if (isUsedOn === "cell" || isUsedOn === "activityRoom") {
        this.props.history.go(-1);
      }
      if (isUsedOn === "detaineeProfile") {
        this.props.history.go(-2);
      }
    }

    return (
      <div style={styles.outerDiv}>
        <Avatar src={require("images/EPSlogo.png")} style={styles.epsLogo} />
        <div style={styles.innerDiv}>
          {(isUsedOn === "cell" || isUsedOn === "detaineeProfile") &&
            <div>
              <p>
                <span style={styles.label}>Cell:</span>
                <span style={styles.headerText}>{cell.name}</span>
              </p>
              {isUsedOn === "cell" &&
                <p>
                  <span style={styles.label}>Occupancy:</span>
                  <span style={styles.headerText}>{cell.occupancyLabel}</span>
                </p>
              }
            </div>
          }

          {isUsedOn === "cell" &&
            <div>
              <p>
                <span style={styles.label}>Designation:</span>
                <span style={styles.headerText}>{cell.genderLabel}</span>
              </p>
              <p>
                <span style={styles.label}>Cell Status:</span>
                <span style={styles.headerText}>{cell.cellStatus}</span>
              </p>
            </div>
          }

          {/* isUsedOn === "activityRoom" && <ActivityRoomUsageLogo usage={activityRoomUsage} /> */}
        </div>
        {isAuthenticated &&
          <Button variant="fab"
            color="primary"
            aria-label="Logout"
            style={styles.epsLogo}
            onClick={this.logout}>
            <Avatar src={require("images/Logout.png")} style={styles.epsLogo} />
          </Button>
        }
      </div>
    );
  }
}

export default HeaderComponent;
