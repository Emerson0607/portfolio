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
import '@fontsource/space-grotesk/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import { colors, fonts } from '../theme/tokens';

const drawerWidth = 260;
const navItems = ['Home', 'About', 'Experience', 'Projects', 'Certificates'];

function DrawerAppBar(props) {
  const { window, onNavClick } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left', px: 3, pt: 3 }}>
        <Typography
          sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: '18px', color: colors.ink, cursor: 'pointer' }}
          onClick={() => onNavClick('Home')}
        >
          Emerson Martinez
        </Typography>
      </Box>
      <Divider sx={{ my: 2, borderColor: colors.line }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'left', px: 3 }} onClick={() => onNavClick(item)}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{ sx: { fontFamily: fonts.body, fontWeight: 500, color: colors.ink } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          background: colors.surface,
          borderBottom: `1px solid ${colors.line}`,
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto' }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: colors.ink }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            sx={{
              fontFamily: fonts.display,
              fontWeight: 700,
              fontSize: '17px',
              color: colors.ink,
              flexGrow: 1,
              cursor: 'pointer',
            }}
            onClick={() => onNavClick('Home')}
          >
            EM
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            {navItems.slice(1).map((item) => (
              <Button
                key={item}
                onClick={() => onNavClick(item)}
                sx={{
                  fontFamily: fonts.body,
                  color: colors.slate,
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: '15px',
                  borderRadius: '999px',
                  px: 2,
                  '&:hover': { color: colors.accent, backgroundColor: colors.accentSoft },
                }}
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
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: colors.surface },
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