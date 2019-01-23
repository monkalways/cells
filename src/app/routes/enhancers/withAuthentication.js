import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';

import {
  selectors as authenticationSelectors,
  operations as authenticationOperations,
} from '../../Authentication/duck';
import { selectors as cellSelectors } from '../../Cell/duck';
import { operations as commonOperations } from '../../common/duck';

export default function withAuthentication(WrappedComponent) {
  const WithAuthentication = (props) => {
    const {
      isAuthenticated,
      cellName,
      handleClick,
      location,
      logout,
      startAuthenticationTimeout,
    } = props;

    if (!isAuthenticated) {
      return <Redirect to="/" />;
    }

    // Detainee profile from Cell Overview or Activity Room will use this for their callback
    let { first, second } = queryString.parse(location.search);

    // Cell check, meal, and medication pages will use this for their callback
    if (!location.search) {
      first = 'cells';
      second = cellName || queryString.parse(location.search).second;
    }

    startAuthenticationTimeout(() => {
      logout(first, second);
    });

    return (
      <div
        onClick={() => handleClick()}
        role="presentation"
        id="refreshAuthenticationTimeoutHandler"
      >
        <WrappedComponent {...props} />
      </div>
    );
  };

  WithAuthentication.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
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
