import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Button';
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
  // cellDetails: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  // }).isRequired,
  handleModalOpen: PropTypes.func.isRequired,
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
  handleModalOpen,
}) => {
  const handleCellHistoryReportClick = () => {
    handleMenuClose();
    // history.push(`/cells/${cellDetails.name}/home/cell-history-report`);
    handleModalOpen();
  };
  return (
    <div>
      <Fab
        onClick={(event) => {
          handleMenuOpen(event);
        }}
        className={classes.icon}
        size="small"
        variant="text"
      >
        <MoreVertIcon />
      </Fab>
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
      padding: 0,
      marginLeft: -theme.spacing.unit * 3,
    },
  })),
  withRouter,
)(HeaderMenu);
