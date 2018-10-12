import * as React from "react";
import { Link } from "react-router-dom";

const style = {
  width: 600,
  height: 900,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
}

class TapToBeginComponent extends React.PureComponent {

  componentDidMount() {
    this.props.resetCellWelfare();
    this.props.resetRedirectLogout();

    const cellName = this.props.match.params.cellName;
    if (cellName !== undefined && cellName !== "") {
      //   this.props.storeStartLocation(`/dmu-cell/${cellName}`);
    }

    const usage = this.props.match.params.usage;
    if (usage !== undefined && usage !== "") {
      //   this.props.storeStartLocation(`/dmu-room/${usage}`);
    }
  }

  render() {
    const cellName = this.props.match.params.cellName;
    const usage = this.props.match.params.usage;

    if (usage === undefined && cellName === undefined) {
      return <img src={require("images/TapToBegin.jpg")} style={style} alt="Tap to Begin" />;
    }

    let toLink = {};

    if (cellName !== undefined && cellName !== "") {
      toLink = {
        pathname: `/cellManagement/${cellName}`,
        state: {
          cellName,
          prevLocation: `/dmu-cell/${cellName}`,
          currentLocation: `/cellManagement/${cellName}`
        }
      };
    }

    if (usage !== undefined && usage !== "") {
      toLink = {
        pathname: `/roomManagement/${usage}`,
        state: {
          usage,
          prevLocation: `/dmu-room/${usage}`,
          currentLocation: `/roomManagement/${usage}`
        }
      };
    }

    return <Link to={toLink} style={style}>
      <img src={require("images/TapToBegin.jpg")} style={style} alt="Tap to Begin" />
    </Link>;
  }
}

export default TapToBeginComponent
