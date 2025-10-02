import { Box, Grid, Paper, Typography, Stack, Button, Chip, LinearProgress, Avatar, Divider } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function StudentHome() {
  const profileCompletion = 72;

  const stats = [
    { label: 'Applications', value: 12, icon: <WorkOutlineIcon color="primary" /> },
    { label: 'Interviews', value: 3, icon: <EventIcon color="secondary" /> },
    { label: 'Active', value: 1, icon: <TrendingUpIcon color="success" /> },
    { label: 'Completed', value: 2, icon: <DashboardIcon color="warning" /> },
  ];

  const QuickCard = ({ title, subtitle, actionLabel }) => (
    <Paper sx={{ p: 2.5 }}>
      <Typography variant="subtitle2" color="text.secondary">{subtitle}</Typography>
      <Typography variant="h6" sx={{ mt: 0.5 }}>{title}</Typography>
      <Button size="small" sx={{ mt: 1.5 }}>{actionLabel}</Button>
    </Paper>
  );

  return (
    <Stack spacing={3}>
      {/* Welcome & profile completion */}
      <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
        <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main' }}>ST</Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight={700}>Welcome back, Student!</Typography>
          <Typography color="text.secondary" sx={{ mt: 0.5 }}>Let’s keep your internship journey on track.</Typography>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">Profile completion</Typography>
            <Box sx={{ flex: 1 }}>
              <LinearProgress variant="determinate" value={profileCompletion} />
            </Box>
            <Chip label={`${profileCompletion}%`} color="primary" size="small" />
          </Stack>
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button variant="contained">Browse Internships</Button>
          <Button variant="outlined">Update Profile</Button>
          <Button variant="outlined" color="secondary">View Logbook</Button>
        </Stack>
      </Paper>

      {/* Quick stats */}
      <Grid container spacing={2}>
        {stats.map((s) => (
          <Grid item xs={12} sm={6} md={3} key={s.label}>
            <Paper sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
              {s.icon}
              <Box>
                <Typography variant="h5" fontWeight={700}>{s.value}</Typography>
                <Typography color="text.secondary">{s.label}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Recommendations */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2.5 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Recommended Internships</Typography>
              <Button size="small">View all</Button>
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              {[1,2,3].map((i) => (
                <Grid item xs={12} md={4} key={i}>
                  <Paper variant="outlined" sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography fontWeight={600}>Company {i}</Typography>
                    <Typography variant="body2" color="text.secondary">Frontend Intern • Remote</Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                      <Chip size="small" label="React" />
                      <Chip size="small" label="Tailwind" />
                      <Chip size="small" label="3 mo" />
                    </Stack>
                    <Button sx={{ mt: 1.5 }} size="small">Quick Apply</Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Notifications & deadlines */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2.5 }}>
            <Typography variant="h6">Deadlines & Notifications</Typography>
            <Divider sx={{ my: 2 }} />
            <Stack spacing={1.5}>
              {[1,2,3,4].map((i) => (
                <Stack key={i} direction="row" spacing={1.5}>
                  <Box sx={{ width: 8, bgcolor: i % 2 ? 'warning.main' : 'success.main', borderRadius: 2 }} />
                  <Box>
                    <Typography fontWeight={600} variant="body2">Reminder {i}</Typography>
                    <Typography variant="caption" color="text.secondary">Due in {i} days</Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
}
