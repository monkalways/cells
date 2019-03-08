import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { format } from 'date-fns';

const dateTimeFormat = 'yyyy/MM/dd HH:mm';

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#FFFFFF',
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 800,
  },
  body: {
    fontSize: theme.typography.body1.fontSize,
  },
}))(TableCell);

const CustomTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#BEBFBF',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#FFFFFF',
    },
  },
}))(TableRow);

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  movementHistories: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.instanceOf(Date).isRequired,
    detaineeName: PropTypes.string.isRequired,
    sourceCellName: PropTypes.string,
    destinationCellName: PropTypes.string.isRequired,
  })).isRequired,
};

const MovementHistoriesComponent = ({ classes, movementHistories }) => (
  <Grid item className={classes.container} xs={12}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <CustomTableCell>Time</CustomTableCell>
          <CustomTableCell>Detainee</CustomTableCell>
          <CustomTableCell>Source Cell</CustomTableCell>
          <CustomTableCell>Destination Cell</CustomTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {movementHistories.map((row) => (
          <CustomTableRow className={classes.row} key={row.time}>
            <CustomTableCell component="th" scope="row">
              {format(row.time, dateTimeFormat)}
            </CustomTableCell>
            <CustomTableCell>{row.detaineeName}</CustomTableCell>
            <CustomTableCell>{row.sourceCellName}</CustomTableCell>
            <CustomTableCell>{row.destinationCellName}</CustomTableCell>
          </CustomTableRow>
        ))}
      </TableBody>
    </Table>
  </Grid>
);

MovementHistoriesComponent.propTypes = propTypes;

export default withStyles(() => ({
  container: {
    width: '100%',
    overflowX: 'auto',
  },
}))(MovementHistoriesComponent);
