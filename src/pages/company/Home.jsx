import { Paper, Typography, Grid, Stack, Chip, Button } from '@mui/material';

export default function CompanyHome() {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Overview</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {[
            { label: 'Active Postings', value: 4 },
            { label: 'Total Applications', value: 126 },
            { label: 'Shortlisted', value: 18 },
            { label: 'Active Interns', value: 6 },
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
          <Button>Post New Internship</Button>
          <Button variant="outlined">View Applications</Button>
          <Button variant="outlined">Review Logbooks</Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
