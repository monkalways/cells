import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export class GotoCellComponent extends Component {
  state = {
    cellName: '',
  };

  handleClick = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { cellName } = this.state;
    if (cellName) history.push(`/cells/${cellName}/`);
  };

  handleChange = (event) => {
    this.setState({
      cellName: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { cellName } = this.state;
    return (
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Go to Cell Room?
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="cellName">Cell Name</InputLabel>
            <Input
              id="cellName"
              name="cellName"
              autoComplete="cellName"
              value={cellName}
              onChange={this.handleChange}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleClick}
          >
            Go
          </Button>
        </form>
      </Paper>
    );
  }
}

GotoCellComponent.propTypes = propTypes;

export default compose(
  withStyles((theme) => ({
    paper: {
      marginTop: theme.spacing.unit * 8,
      marginLeft: theme.spacing.unit * 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
        .spacing.unit * 3}px`,
      height: theme.spacing.unit * 27,
      width: theme.spacing.unit * 40,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  })),
  withRouter,
)(GotoCellComponent);
