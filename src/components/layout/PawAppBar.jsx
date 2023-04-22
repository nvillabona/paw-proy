import * as React from 'react';
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../../assets/pawConnect-no-bg.png'
import useSecurity from '../../hooks/useSecurity';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import routes from '../../routes/routes';
import Cart from '../cart/Cart';

export default function PawAppBar() {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const [cartIsOpen, setCartIsOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { handleLogout } = useSecurity();
  const navigate = useNavigate();
  const location = useLocation()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDrawer = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleCloseDrawer();
    navigate(routes.profile.path)
  }

  const handleNavigate = (route) => {
    setDrawerIsOpen(false)
    navigate(route)
  }

  return (
    <Box sx={{ flexGrow: 1 }} className="pawAppBar">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerIsOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flex: 1 }}>
            <Link to={routes.dashboard.path}>
              <img src={Logo} className='logo-img' />
            </Link>
          </Box>
          <IconButton
            color="inherit"
            onClick={()=>setCartIsOpen(true)}
          >
            <ShoppingCartIcon />
          </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseDrawer}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
        </Toolbar>
        <Drawer
          variant="temporary"
          anchor="left"
          open={drawerIsOpen}
          onClose={() => setDrawerIsOpen(false)}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
          }}
          PaperProps={{
            sx: {
              backgroundColor: "primary.darker",
              color: "white.main"
            }
          }}
        >
          <Box sx={{
              backgroundColor: 'primary.main',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Link to={routes.dashboard.path}>
              <img src={Logo} style={{height: '4rem'}} />
            </Link>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                selected={location.pathname === routes.dashboard.path}
                onClick={() => handleNavigate(routes.dashboard.path)}
              >
                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                selected={location.pathname === routes.profile.path}
                onClick={() => handleNavigate(routes.profile.path)}
              >
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                selected={location.pathname === routes.messages.path}
                onClick={() => handleNavigate(routes.messages.path)}
              >
                <ListItemText primary='Messages' />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Cart isOpen={cartIsOpen} handleClose={()=>setCartIsOpen(false)}/>
      </AppBar>
    </Box>
  );
}