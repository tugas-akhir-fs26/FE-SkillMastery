import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(window.innerWidth >= theme.breakpoints.values.md);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = React.useState('/');

  React.useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const handleResize = () => {
    setOpen(window.innerWidth >= theme.breakpoints.values.md);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} anchor="left">
        <h1 className="logo-title" style={{ display: 'flex', justifyContent: 'center' }}>
          {open ? (
            <>
              <span style={{ color: '#0460d9' }}>Skill</span>
              <span style={{ color: '#000000' }}>Mastery</span>
            </>
          ) : (
            <>
              <span style={{ color: '#0460d9' }}>S</span>
              <span style={{ color: '#000000' }}>M</span>
            </>
          )}
        </h1>
        <List>
          <ListItem
            disablePadding
            sx={{
              display: 'block',
            }}
            onClick={() => {
              navigate('/dashboard-mentor');
            }}
          >
            <ListItemButton
              selected={activeItem === '/dashboard-mentor'}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <HomeIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              ></HomeIcon>
              <ListItemText primary="Beranda" sx={{ opacity: open ? 1 : 0, display: 'flex', justifyContent: 'center' }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate('/course-guru');
            }}
          >
            <ListItemButton
              selected={activeItem === '/course-guru'}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ArticleIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              ></ArticleIcon>
              <ListItemText primary="Kursus" sx={{ opacity: open ? 1 : 0, display: 'flex', justifyContent: 'center' }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate('/forum');
            }}
          >
            <ListItemButton
              selected={activeItem === '/forum'}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ForumIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              ></ForumIcon>
              <ListItemText primary="Forum" sx={{ opacity: open ? 1 : 0, display: 'flex', justifyContent: 'center' }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate('/setting');
            }}
          >
            <ListItemButton
              selected={activeItem === '/setting'}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <SettingsIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              ></SettingsIcon>
              <ListItemText primary="Pengaturan" sx={{ opacity: open ? 1 : 0, display: 'flex', justifyContent: 'center' }} />
            </ListItemButton>
          </ListItem>
        </List>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
        </DrawerHeader>
      </Drawer>
    </Box>
  );
}
