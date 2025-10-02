import { Box, Paper, Stack, Typography, TextField, Button, Chip, Link } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { useState } from 'react';

export default function AuthForm({ role, mode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'signup') await signup({ role, email });
      else await login({ role, email });
      const to = `/${role}`;
      navigate(to, { replace: true, state: { from: location } });
    } finally {
      setLoading(false);
    }
  };

  const roleLabel = role.charAt(0).toUpperCase() + role.slice(1);
  const title = mode === 'signup' ? 'Sign up' : 'Sign in';
  const switchText = mode === 'signup' ? 'Already have an account? Sign in' : "Don't have an account? Sign up";
  const switchTo = mode === 'signup' ? `/${role}/login` : `/${role}/signup`;

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        p: 2
      }}
    >
      <Paper 
        elevation={4} 
        sx={{ 
          p: { xs: 3, md: 5 }, 
          width: '100%', 
          maxWidth: 500, 
          borderRadius: 3 
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight={800}>{title}</Typography>
          <Stack spacing={1}>
            <Typography variant="body2" color="text.secondary">Role</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip label={roleLabel} color="primary" />
              <Link component={RouterLink} to="/" underline="hover">Change role</Link>
            </Stack>
          </Stack>
          <Box component="form" onSubmit={onSubmit}>
            <Stack spacing={2}>
              <TextField 
                label="Email =(internship@gmail.com)" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                fullWidth 
              />
              <TextField 
                label="Password = (123456)" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                fullWidth 
              />
              <Button type="submit" variant="contained" disabled={loading} fullWidth>
                {loading ? (mode === 'signup' ? 'Creating...' : 'Signing in...') : title}
              </Button>
              <Link 
                component={RouterLink} 
                to={switchTo} 
                underline="hover" 
                textAlign="center"
                display="block"
              >
                {switchText}
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}