import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Layout from './Layout';
import Header from './Header';
import Overview from './Overview';
import Meal from './Meal';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  initialize: PropTypes.func.isRequired,
  cellDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genderLabel: PropTypes.string.isRequired,
    occupancy: PropTypes.number.isRequired,
    occupancyCount: PropTypes.number.isRequired,
    cellStatus: PropTypes.string.isRequired,
  }),
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({})),
};

const defaultProps = {
  cellDetails: null,
  cellDetainees: null,
};

class CellComponent extends Component {
  componentDidMount() {
    const { match, initialize } = this.props;
    const { name } = match.params;
    initialize(name);
  }

  handleLogout = () => {
    const { history, match } = this.props;
    const { name } = match.params;
    history.push(`/cells/${name}`);
  };

  render() {
    const { cellDetails, cellDetainees, match } = this.props;
    return (
      <React.Fragment>
        {cellDetails && (
          <Layout>
            <Header cellDetails={cellDetails} onLogout={this.handleLogout} />
            {cellDetainees
              && cellDetainees.length > 0 && (
                <Switch>
                  <Route
                    path={match.url}
                    render={(props) => (
                      <Overview {...props} cellDetainees={cellDetainees} />
                    )}
                    exact
                  />
                  <Route path={`${match.url}/meal`} component={Meal} />
                </Switch>
            )}
          </Layout>
        )}
      </React.Fragment>
    );
  }
}

CellComponent.propTypes = propTypes;
CellComponent.defaultProps = defaultProps;

export default compose(
  withStyles(() => ({
    container: {},
  })),
  withRouter,
)(CellComponent);
