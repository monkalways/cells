import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import tapToBegin from '../../images/TapToBegin.png';

const style = {
  width: 600,
  height: 900,
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
};

class TapToBeginComponent extends React.PureComponent {
  componentDidMount() {
    const { resetCellWelfare, resetRedirectLogout, match } = this.props;
    const { params } = match;
    const { cellName, usage } = params;

    resetCellWelfare();
    resetRedirectLogout();

    if (cellName !== undefined && cellName !== '') {
      //   this.props.storeStartLocation(`/dmu-cell/${cellName}`);
    }

    if (usage !== undefined && usage !== '') {
      //   this.props.storeStartLocation(`/dmu-room/${usage}`);
    }
  }

  render() {
    const { match } = this.props;
    const { cellName, usage } = match.params;

    if (usage === undefined && cellName === undefined) {
      return <img src={tapToBegin} style={style} alt="Tap to Begin" />;
    }

    let toLink = {};

    if (cellName !== undefined && cellName !== '') {
      toLink = {
        pathname: `/cellManagement/${cellName}`,
        state: {
          cellName,
          prevLocation: `/dmu-cell/${cellName}`,
          currentLocation: `/cellManagement/${cellName}`,
        },
      };
    }

    if (usage !== undefined && usage !== '') {
      toLink = {
        pathname: `/roomManagement/${usage}`,
        state: {
          usage,
          prevLocation: `/dmu-room/${usage}`,
          currentLocation: `/roomManagement/${usage}`,
        },
      };
    }

    return (
      <Link to={toLink} style={style}>
        <img src={tapToBegin} style={style} alt="Tap to Begin" />
      </Link>
    );
  }
}

TapToBeginComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      cellName: PropTypes.string,
      usage: PropTypes.string,
    }).isRequired,
  }).isRequired,
  resetRedirectLogout: PropTypes.func.isRequired,
  resetCellWelfare: PropTypes.func.isRequired,
};

export default TapToBeginComponent;
