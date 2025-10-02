import { Box, Paper, Typography, Stack, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Landing() {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');

  const goLogin = () => role && navigate(`/${role}/login`);
  const goSignup = () => role && navigate(`/${role}/signup`);

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
          <Typography variant="h4" fontWeight={800} textAlign="center">
            NEP Internship Platform
          </Typography>
          <Typography color="text.secondary" textAlign="center">
            Select your role to continue
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="landing-role">Role</InputLabel>
            <Select
              labelId="landing-role"
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value={'student'}>Student</MenuItem>
              <MenuItem value={'company'}>Company</MenuItem>
              <MenuItem value={'faculty'}>Faculty</MenuItem>
            </Select>
          </FormControl>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button 
              variant="contained" 
              onClick={goLogin}
              fullWidth
            >
              Login
            </Button>
            <Button 
              variant="outlined" 
              onClick={goSignup}
              fullWidth
            >
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}