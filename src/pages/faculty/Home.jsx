import { Paper, Typography, Grid, Stack, Button } from '@mui/material';

export default function FacultyHome() {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Overview</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {[
            { label: 'Students Enrolled', value: 240 },
            { label: 'Active Internships', value: 86 },
            { label: 'Without Internships', value: 34 },
            { label: 'Completion Rate', value: '78%' },
          ].map((s) => (
            <Grid item xs={12} sm={6} md={3} key={s.label}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="h4" fontWeight={700}>{s.value}</Typography>
                <Typography color="text.secondary">{s.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Quick Actions</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <Button>Assign Mentors</Button>
          <Button variant="outlined">View Progress</Button>
          <Button variant="outlined">Approve Reports</Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
