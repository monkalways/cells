import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
// import { Route, Switch, withRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

// import Layout from './Layout';
// import Header from './Header';
// import Overview from './Overview';
// import Meal from './Meal';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  getDetainee: PropTypes.func.isRequired,
  detainee: PropTypes.shape({}).isRequired,
  // cellDetails: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   genderLabel: PropTypes.string.isRequired,
  //   occupancy: PropTypes.number.isRequired,
  //   occupancyCount: PropTypes.number.isRequired,
  //   cellStatus: PropTypes.string.isRequired,
  // }),
};

const defaultProps = {
  // cellDetails: null,
};

// for calls to api: http://localhost:1969/api/detainees/162323004000000603274291/detainee-profile
// For detainee screen
// /detainees/{id}?from=/cells/{name}

class DetaineeComponent extends Component {
  componentDidMount() {
    // const { match, getDetainee } = this.props;
    const { match } = this.props;
    const { id } = match.params;
    // getDetainee(name);
    // console.log(match.params);
    // console.log(id);

    const { getDetainee } = this.props;
    getDetainee(id);
    // console.log(detainee);
  }

  handleLogout = () => {
    // const { history, match } = this.props;
    // const { id } = match.params;
    // Make sure this logs out to the correct page
    // Look at the 'from' parameter in the URL to determine this
    // history.push(`/cells/${name}`);
  };

  render() {
    // const { detainee, match, classes } = this.props;
    // const { name } = match.params;
    return (
      <React.Fragment>
        Detainee
        {/* {match.params} */}
        {/* {cellDetails && (
          <Layout>
            <Header cellDetails={cellDetails} onLogout={this.handleLogout} />
            <div className={classes.body}>
              <Switch>
                <Route
                  path={match.url}
                  render={(props) => <Overview cellName={name} {...props} />}
                  exact
                />
                <Route path={`${match.url}/meal`} component={Meal} />
              </Switch>
            </div>
          </Layout>
        )} */}
      </React.Fragment>
    );
  }
}

DetaineeComponent.propTypes = propTypes;
DetaineeComponent.defaultProps = defaultProps;

export default compose(
  withStyles((theme) => ({
    body: {
      marginTop: theme.spacing.unit,
    },
  })),
  withRouter,
)(DetaineeComponent);
