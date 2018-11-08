import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const GotoActivityRoomComponent = ({ classes }) => (
  <Paper className={classes.paper}>
    <Typography component="h1" variant="h5">
      Go to Activity Room?
    </Typography>
    <form className={classes.form}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled
      >
        Go (not ready yet)
      </Button>
    </form>
  </Paper>
);

GotoActivityRoomComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    height: 212,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
}))(GotoActivityRoomComponent);
