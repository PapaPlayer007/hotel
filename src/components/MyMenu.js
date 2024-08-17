import React from 'react';
import { Menu, MenuItem } from '@mui/material';

const MyMenu = ({ anchorEl, open, handleClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      {[
        <MenuItem key="1" onClick={handleClose}>Profile</MenuItem>,
        <MenuItem key="2" onClick={handleClose}>My account</MenuItem>,
        <MenuItem key="3" onClick={handleClose}>Logout</MenuItem>
      ]}
    </Menu>
  );
};

export default MyMenu;
