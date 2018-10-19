import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { operations, selectors } from '../../SessionManagement/duck';

export default function requiresAuth(WrappedComponent) {
  class AuthenticatedComponent extends React.Component {
    state = { cardSerialNumber: [] };

    componentDidMount() {
      document
        .querySelector('body')
        .addEventListener('keypress', this.cardReadAndAuth);
    }

    componentWillUnmount() {
      document
        .querySelector('body')
        .removeEventListener('keypress', this.cardReadAndAuth);
    }

    cardReadAndAuth = (e) => {
      const { isAuthenticated, dispatch, userAuthentication } = this.props;

      if (isAuthenticated) return;

      e.preventDefault();
      e.stopPropagation();

      if (WrappedComponent === 'DetaineeProfileContainer') {
        dispatch(push('/'));
      }

      this.setState(
        (prevState) => ({
          cardSerialNumber: [...prevState.cardSerialNumber, e.key],
        }),
        () => {
          const { cardSerialNumber } = this.state;
          if (cardSerialNumber.length === 16) {
            const stringCardSerialNumber = cardSerialNumber.join('');
            userAuthentication(stringCardSerialNumber);
          }
        },
      );
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  AuthenticatedComponent.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    userAuthentication: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => {
    const userAuthentication = (cardSerialNumber) => {
      dispatch(operations.userAuthentication(cardSerialNumber));
    };

    return { userAuthentication };
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: selectors.getAuthenticationFlag(state),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AuthenticatedComponent);
}
