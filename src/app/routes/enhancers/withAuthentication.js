import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectors as authenticationSelectors } from '../../Authentication/duck';
import { selectors as cellSelectors } from '../../Cell/duck';

export default function withAuthentication(WrappedComponent) {
  const WithAuthentication = (props) => {
    const { isAuthenticated, cellName } = props;
    if (!isAuthenticated) {
      if (cellName) {
        return <Redirect to={`/cells/${cellName}/home`} />;
      }

      return <Redirect to="/" />;
    }

    return <WrappedComponent {...props} />;
  };

  WithAuthentication.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };

  const mapStateToProps = (
    state,
    isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
    cellName = cellSelectors.getCellNameState(state),
  ) => ({
    isAuthenticated,
    cellName,
  });

  return connect(mapStateToProps)(WithAuthentication);
}
