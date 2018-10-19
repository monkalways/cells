import React from 'react';
import { PropTypes } from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import epsLogo from '../../../images/EPSlogo.png';
import logoutButton from '../../../images/Logout.png';

const styles = {
  outerDiv: {
    display: 'flex',
    flex: '3 0px',
    justifyContent: 'space-around',
    height: '8%',
  },
  innerDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    flexFlow: 'row wrap',
    alignItems: 'center',
  },
  epsLogoStyle: {
    height: 70,
    width: 70,
  },
  label: {
    fontSize: 20,
    fontWeight: 400,
    color: 'red',
    marginRight: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 600,
  },
};

class HeaderComponent extends React.PureComponent {
  static defaultProps = {
    cell: {},
  };

  logout = () => {
    const { logout } = this.props;

    logout();
  };

  render() {
    const {
      cell,
      isAuthenticated,
      redirectLogout,
      isUsedOn,
      history,
    } = this.props;

    if (redirectLogout) {
      if (isUsedOn === 'cell' || isUsedOn === 'activityRoom') {
        history.go(-1);
      }
      if (isUsedOn === 'detaineeProfile') {
        history.go(-2);
      }
    }
    const {
      innerDiv, outerDiv, epsLogoStyle, label, headerText,
    } = styles;

    return (
      <div style={outerDiv}>
        <Avatar src={epsLogo} style={epsLogoStyle} />
        <div style={innerDiv}>
          {(isUsedOn === 'cell' || isUsedOn === 'detaineeProfile') && (
            <div>
              <p>
                <span style={label}>Cell:</span>
                <span style={headerText}>{cell.name}</span>
              </p>
              {isUsedOn === 'cell' && (
                <p>
                  <span style={label}>Occupancy:</span>
                  <span style={headerText}>{cell.occupancyLabel}</span>
                </p>
              )}
            </div>
          )}

          {isUsedOn === 'cell' && (
            <div>
              <p>
                <span style={label}>Designation:</span>
                <span style={headerText}>{cell.genderLabel}</span>
              </p>
              <p>
                <span style={label}>Cell Status:</span>
                <span style={headerText}>{cell.cellStatus}</span>
              </p>
            </div>
          )}

          {/* isUsedOn === "activityRoom" && <ActivityRoomUsageLogo usage={activityRoomUsage} /> */}
        </div>
        {isAuthenticated && (
          <Button
            variant="fab"
            color="primary"
            aria-label="Logout"
            style={epsLogoStyle}
            onClick={this.logout}
          >
            <Avatar src={logoutButton} style={epsLogoStyle} />
          </Button>
        )}
      </div>
    );
  }
}

HeaderComponent.propTypes = {
  redirectLogout: PropTypes.bool.isRequired,
  isUsedOn: PropTypes.oneOf(['cell', 'detaineeProfile', 'activityRoom'])
    .isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    go: PropTypes.func.isRequired,
  }).isRequired,
  cell: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    occupancyLabel: PropTypes.string,
    genderLabel: PropTypes.string,
    cellStatus: PropTypes.string,
    isActivityRoom: PropTypes.bool,
    usage: PropTypes.string,
  }),
  logout: PropTypes.func.isRequired,
};

export default HeaderComponent;
