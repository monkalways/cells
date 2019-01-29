import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  selectors as authenticationSelectors,
  operations as authenticationOperations,
} from '../../Authentication/duck';
import { selectors as cellSelectors } from '../../Cell/duck';
import { operations as commonOperations } from '../../common/duck';

export default function withAuthentication(WrappedComponent) {
  const WithAuthentication = (props) => {
    const { isAuthenticated, handleClick } = props;

    if (!isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div
        onClick={() => handleClick()}
        role="presentation"
        id="authenticatedRoot"
      >
        <WrappedComponent {...props} />
      </div>
    );
  };

  WithAuthentication.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    startAuthenticationTimeout: PropTypes.func.isRequired,
  };

  const mapStateToProps = (
    state,
    isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
    cellName = cellSelectors.getCellNameState(state),
  ) => ({
    isAuthenticated,
    cellName,
  });

  const mapDispatchToProps = (dispatch) => ({
    handleClick: () => {
      dispatch(commonOperations.refreshAuthenticationTimeout());
    },
    logout: (first, second) => {
      dispatch(commonOperations.stopAuthenticationTimeout());
      dispatch(authenticationOperations.logOut(first, second));
    },
    startAuthenticationTimeout: (logout) => {
      dispatch(commonOperations.startAuthenticationTimeout(logout));
    },
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WithAuthentication);
}
