import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  withStyles,
} from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const CellCheckFooterRadioButtonGroup = ({ classes }) => (
  <RadioGroup name="cellCheckRadio" className={classes.group} value="visual">
    <FormControlLabel
      value="visual"
      control={<Radio className={classes.radioButton} />}
      label={<Typography variant="body1">Visual - All</Typography>}
    />
    <FormControlLabel
      value="verbal"
      control={<Radio className={classes.radioButton} />}
      label={<Typography variant="body1">Verbal - All</Typography>}
    />
  </RadioGroup>
);

CellCheckFooterRadioButtonGroup.propTypes = propTypes;

export default withStyles((theme) => ({
  group: {
    marginTop: theme.spacing.unit * 0.7,
    marginLeft: -theme.spacing.unit * 15,
  },
  radioButton: {
    padding: theme.spacing.unit,
  },
}))(CellCheckFooterRadioButtonGroup);