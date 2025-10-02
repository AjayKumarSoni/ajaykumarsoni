import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { Box, Paper, Stack, Typography, TextField, Button, Chip, Link } from '@mui/material';
import { useState, useMemo } from 'react';

export default function RoleLogin() {
  const { role: roleParam } = useParams();
  const role = useMemo(() => (['student','company','faculty'].includes(roleParam) ? roleParam : 'student'), [roleParam]);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate(`/${role}`, { replace: true });
    }, 400);
  };

  const roleLabel = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', bgcolor: 'background.default', p: 2 }}>
      <Paper sx={{ p: 4, width: '100%', maxWidth: 420 }}>
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight={800}>Sign in</Typography>
          <Typography variant="body2" color="text.secondary">Role</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip label={roleLabel} color="primary" />
            <Link component={RouterLink} to="/" underline="hover">Change role</Link>
          </Stack>
          <Box component="form" onSubmit={onSubmit}>
            <Stack spacing={2}>
              <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required fullWidth />
              <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required fullWidth />
              <Button type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</Button>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
