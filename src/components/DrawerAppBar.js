import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects'];

function DrawerAppBar(props) {
  const { window, onNavClick } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}  onClick={() => onNavClick('Home')}>
          Emerson Martinez
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} onClick={() => onNavClick(item)}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: '#FDFDFD',
          boxShadow: '0px 2px 2px -2px rgba(0,0,0,0.1)', // Bottom-only box shadow
        }}
      >
        <Toolbar>
          <IconButton
            color="#1C2D55"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: '#1C2D55',
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              ml: '70px',
              fontSize: '1rem',
              letterSpacing: '1em',
              cursor: 'pointer', // Add cursor pointer
            }}
            onClick={() => onNavClick('Home')} // Navigate to Home
          >
            <Typography
              component="span"
              sx={{
                color: '#1C2D55',
                fontWeight: 700,
                fontSize: '24px',
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              EM
            </Typography>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 8 }}>
            {navItems.map((item, index) => (
              <Button
                key={item}
                sx={{
                  color: '#1C2D55',
                  fontWeight: 400,
                  textTransform: 'none',
                  fontSize: '16px',
                  mr: index < navItems.length - 1 ? 2 : 0, // Add bottom margin except for the last item
                }}
                onClick={() => onNavClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  onNavClick: PropTypes.func.isRequired,
};

export default DrawerAppBar;
