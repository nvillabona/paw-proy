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
import Logo from '../../assets/pawConnect-no-bg.png'
import useSecurity from '../../hooks/useSecurity';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import routes from '../../routes/routes';

export default function PawAppBar() {
  const [drawerIsOpen, setDrawingIsOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { handleLogout } = useSecurity();
  const navigate = useNavigate();
  const location = useLocation()

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleClose();
    navigate(routes.profile.path)
  }

  return (
    <Box sx={{ flexGrow: 1 }} className="pawAppBar">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawingIsOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flex: 1 }}>
            <Link to={routes.dashboard.path}>
              <img src={Logo} className='logo-img' />
            </Link>
          </Box>
          {auth && (
            <div>
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
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
        <Drawer
          variant="temporary"
          anchor="left"
          open={drawerIsOpen}
          onClose={() => setDrawingIsOpen(false)}
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
                onClick={() => navigate(routes.dashboard.path)}
              >
                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                selected={location.pathname === routes.profile.path}
                onClick={() => navigate(routes.profile.path)}
              >
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </Box>
  );
}