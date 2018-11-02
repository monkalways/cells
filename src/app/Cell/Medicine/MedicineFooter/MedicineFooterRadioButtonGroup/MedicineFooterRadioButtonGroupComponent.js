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

const MedicineFooterRadioButtonGroup = ({ classes }) => (
  <RadioGroup name="MedicineRadio" className={classes.group} value="visual">
    <FormControlLabel
      value="accepted"
      control={<Radio className={classes.radioButton} />}
      label={<Typography variant="body1">Accepted - All</Typography>}
    />
    <FormControlLabel
      value="not-applicable"
      control={<Radio className={classes.radioButton} />}
      label={<Typography variant="body1">N/A - All</Typography>}
    />
  </RadioGroup>
);

MedicineFooterRadioButtonGroup.propTypes = propTypes;

export default withStyles((theme) => ({
  group: {
    marginTop: theme.spacing.unit * 0.7,
    marginLeft: -theme.spacing.unit * 15,
  },
  radioButton: {
    padding: theme.spacing.unit,
  },
}))(MedicineFooterRadioButtonGroup);
