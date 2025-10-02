import { Paper, Typography, Grid, Stack, Chip, Button, LinearProgress } from '@mui/material';

export default function TrainingHub() {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Browse Courses</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {["Resume Writing","Excel Basics","Communication","DSA for Interns"].map((c, i) => (
            <Grid item xs={12} md={6} key={c}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography fontWeight={600}>{c}</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  <Chip size="small" label="Beginner" />
                  <Chip size="small" label={`${(i+1)*15}% completed`} />
                </Stack>
                <LinearProgress value={(i+1)*15} variant="determinate" sx={{ mt: 1 }} />
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  <Button size="small">Continue</Button>
                  <Button size="small" variant="outlined">View</Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">My Enrolled Courses</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Track progress and download certificates.</Typography>
      </Paper>
    </Stack>
  );
}
