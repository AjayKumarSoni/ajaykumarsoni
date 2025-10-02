import { useState } from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Avatar, Divider, Badge, Button } from '@mui/material';
import { useAuth } from '../auth/AuthContext';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import DescriptionIcon from '@mui/icons-material/Description';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import InsightsIcon from '@mui/icons-material/Insights';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const drawerWidth = 260;

const navItems = [
  { label: 'Home', to: '/faculty', icon: <DashboardIcon /> },
  { label: 'Student Management', to: '/faculty/students', icon: <PeopleIcon /> },
  { label: 'Internship Monitoring', to: '/faculty/monitoring', icon: <PublicIcon /> },
  { label: 'Company Partnerships', to: '/faculty/partnerships', icon: <HandshakeIcon /> },
  { label: 'Reports & Approvals', to: '/faculty/reports', icon: <DescriptionIcon /> },
  { label: 'Credit Management', to: '/faculty/credits', icon: <CreditScoreIcon /> },
  { label: 'Analytics & Insights', to: '/faculty/analytics', icon: <InsightsIcon /> },
  { label: 'Training Management', to: '/faculty/training', icon: <MenuBookIcon /> },
  { label: 'Communication Hub', to: '/faculty/communication', icon: <ChatIcon /> },
  { label: 'Settings & Admin', to: '/faculty/settings', icon: <SettingsIcon /> },
];

export default function FacultyLayout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar sx={{ bgcolor: 'primary.main' }}>FAC</Avatar>
        <Typography variant="h6" fontWeight={700}>Faculty</Typography>
      </Box>
      <Divider />
      <List sx={{ flex: 1 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.to}
            component={NavLink}
            to={item.to}
            selected={pathname === item.to || (item.to === '/faculty' && pathname === '/faculty')}
            sx={{ my: 0.5, borderRadius: 2, '&.Mui-selected': { bgcolor: 'primary.main', color: 'primary.contrastText' }, '&.Mui-selected .MuiListItemIcon-root': { color: 'primary.contrastText' } }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography variant="caption" color="text.secondary">v0.1 • Faculty</Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="fixed" color="inherit" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setOpen(true)} sx={{ mr: 2, display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Faculty Dashboard</Typography>
          <IconButton onClick={() => navigate('notifications')}>
            <Badge color="error" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button size="small" onClick={() => { logout(); navigate('/'); }} sx={{ ml: 1 }}>Logout</Button>
          <Avatar sx={{ ml: 2 }}>FC</Avatar>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer variant="temporary" open={open} onClose={() => setOpen(false)} ModalProps={{ keepMounted: true }} sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}>
          {drawer}
        </Drawer>
        <Drawer variant="permanent" sx={{ display: { xs: 'none', md: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }} open>
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 3 }, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
