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
  Typography,
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
    destinationCellName: PropTypes.string,
  })),
};

const defaultProps = {
  movementHistories: [],
};

export const MovementHistoriesComponent = ({ classes, movementHistories }) => (
  <Grid item className={classes.container} xs={12}>
    {movementHistories && movementHistories.length > 0 ? (
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
              <CustomTableCell component="th" scope="row" padding="dense">
                {format(row.time, dateTimeFormat)}
              </CustomTableCell>
              <CustomTableCell padding="dense">
                {row.detaineeName}
              </CustomTableCell>
              <CustomTableCell padding="dense">
                {row.sourceCellName}
              </CustomTableCell>
              <CustomTableCell padding="dense">
                {row.destinationCellName}
              </CustomTableCell>
            </CustomTableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <Typography variant="body1" className={classes.text}>
        No detainee movements in given period.
      </Typography>
    )}
  </Grid>
);

MovementHistoriesComponent.propTypes = propTypes;
MovementHistoriesComponent.defaultProps = defaultProps;

export default withStyles((theme) => ({
  container: {
    width: '100%',
    overflowX: 'auto',
  },
  text: {
    marginLeft: theme.spacing.unit,
  },
}))(MovementHistoriesComponent);
