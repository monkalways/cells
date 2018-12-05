import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
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

export class GotoActivityRoomComponent extends Component {
  state = {
    usage: '',
    open: false,
  };

  handleClick = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { usage } = this.state;
    if (usage) history.push(`/activity-rooms/${usage}/`);
  };

  handleChange = (event) => {
    this.setState({
      usage: event.target.value,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { usage, open } = this.state;
    return (
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Go to Activity Room?
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="usage">Usage</InputLabel>
            <Select
              open={open}
              value={usage}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              onChange={this.handleChange}
              inputProps={{
                name: 'usage',
                id: 'usage',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="bail hearing1">Bail Hearing 1</MenuItem>
              <MenuItem value="bail hearing2">Bail Hearing 2</MenuItem>
              <MenuItem value="breath test">Breath Test</MenuItem>
              <MenuItem value="fingerprinting">Finger Printing</MenuItem>
              <MenuItem value="interview">Interview</MenuItem>
              <MenuItem value="medical">Medical</MenuItem>
              <MenuItem value="phone">Phone</MenuItem>
            </Select>
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

GotoActivityRoomComponent.propTypes = propTypes;

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
)(GotoActivityRoomComponent);
