import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  menuAnchorElement: PropTypes.shape({}),
  open: PropTypes.bool.isRequired,
  handleMenuOpen: PropTypes.func.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  cellDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const defaultProps = {
  menuAnchorElement: null,
};

const HeaderMenu = ({
  classes,
  menuAnchorElement,
  open,
  handleMenuOpen,
  handleMenuClose,
  history,
  cellDetails,
}) => {
  const handleCellHistoryReportClick = () => {
    handleMenuClose();
    history.push(`/cells/${cellDetails.name}/home/cell-history-report`);
  };
  return (
    <div>
      <Button
        onClick={(event) => {
          handleMenuOpen(event);
        }}
        className={classes.icon}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        anchorEl={menuAnchorElement}
        open={open}
        onClose={() => handleMenuClose()}
      >
        <MenuItem onClick={() => handleCellHistoryReportClick()}>
          Cell History Report
        </MenuItem>
      </Menu>
    </div>
  );
};

HeaderMenu.propTypes = propTypes;
HeaderMenu.defaultProps = defaultProps;

export default compose(
  withStyles((theme) => ({
    icon: {
      color: theme.palette.common.white,
    },
  })),
  withRouter,
)(HeaderMenu);
