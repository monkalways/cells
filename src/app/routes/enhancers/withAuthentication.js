import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';

import { selectors as authenticationSelectors } from '../../Authentication/duck';
import { selectors as cellSelectors } from '../../Cell/duck';
import { operations as commonOperations } from '../../common/duck';

export default function withAuthentication(WrappedComponent) {
  const WithAuthentication = (props) => {
    const {
      isAuthenticated,
      cellName,
      handleClick,
      location,
      startAuthenticationTimeout,
    } = props;
    if (!isAuthenticated) {
      const cellNameInPath = cellName || queryString.parse(location.search).second;
      if (cellNameInPath) {
        return <Redirect to={`/cells/${cellNameInPath}/home`} />;
      }

      return <Redirect to="/" />;
    }

    const logout = () => {
      // console.log('Logout callback called');
    };

    startAuthenticationTimeout(logout);
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
    startAuthenticationTimeout: (logout) => {
      dispatch(commonOperations.startAuthenticationTimeout(logout));
    },
    handleClick: (refreshAuthenticationTimeout = commonOperations.refreshAuthenticationTimeout) => {
      dispatch(refreshAuthenticationTimeout());
    },
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WithAuthentication);
}
