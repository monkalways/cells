import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { operations } from "app/sessionManagement/duck";

export default function requiresAuth(WrappedComponent) {
  class AuthenticatedComponent extends React.Component {
    state = { cardSerialNumber: [] }

    // static propTypes = {
    //   isAuthenticated: PropTypes.bool.isRequired,
    //   dispatch: PropTypes.func.isRequired
    // };

    componentDidMount() {
      document.querySelector("body").addEventListener("keypress", this.cardReadAndAuth);
    }

    // componentDidUpdate() {
    //   this._checkAndRedirect();
    // }

    componentWillUnmount() {
      document.querySelector("body").removeEventListener("keypress", this.cardReadAndAuth);
    }

    cardReadAndAuth = (e) => {
      if (this.props.isAuthenticated) return;

      e.preventDefault();
      e.stopPropagation();

      if (WrappedComponent === "DetaineeProfileContainer") {
        this.props.dispatch(push('/'));
      }

      this.setState(
        prevState => ({ cardSerialNumber: [...prevState.cardSerialNumber, e.key] }),
        () => {
          if (this.state.cardSerialNumber.length === 16) {
            const cardSerialNumber = this.state.cardSerialNumber.join("");
            this.props.userAuthentication(cardSerialNumber);
          }
        }
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapDispatchToProps = (dispatch) => {
    const userAuthentication = (cardSerialNumber) => {
      dispatch(operations.userAuthentication(cardSerialNumber));
    };

    return { userAuthentication };
  };

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.sessionManagementData.session.isAuthenticated
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}
