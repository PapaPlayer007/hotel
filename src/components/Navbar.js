import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontFamily: 'Lobster, cursive' }}>
          Hotel & Restaurant
        </Typography>
        <div className="desktop-menu">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/menu">Menu</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <IconButton color="inherit" component={Link} to="/cart">
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          {user ? (
            <>
              <Typography variant="h6" style={{ marginLeft: '20px' }}>
                Welcome, {user.firstName}
              </Typography>
              <Button color="inherit" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/auth">Sign In</Button>
            </>
          )}
        </div>
        <div className="mobile-menu">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/about">About</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/menu">Menu</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/cart">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon /> Cart
              </Badge>
            </MenuItem>
            {user ? (
              <>
                <MenuItem onClick={handleMenuClose}>
                  Welcome, {user.firstName}
                </MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={handleMenuClose} component={Link} to="/auth">Sign In</MenuItem>
              </>
            )}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
