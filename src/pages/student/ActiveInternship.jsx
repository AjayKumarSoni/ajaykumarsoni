import { Paper, Typography, Stack, Grid, TextField, Button, Divider, Chip } from '@mui/material';

export default function ActiveInternship() {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Current Internship</Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>Company ABC</Typography>
            <Typography color="text.secondary">Supervisor: John Doe • Duration: 12 weeks</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <Chip label="Days Completed: 24" />
              <Chip label="Remaining: 60" color="primary" variant="outlined" />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} justifyContent="flex-end">
              <Button>Submit Deliverable</Button>
              <Button variant="outlined">Attendance</Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2.5 }}>
            <Typography variant="h6">Daily/Weekly Logbook</Typography>
            <Divider sx={{ my: 2 }} />
            <Stack spacing={2}>
              <TextField type="date" label="Date" InputLabelProps={{ shrink: true }} />
              <TextField label="Hours Worked" />
              <TextField label="Tasks Completed" multiline rows={3} />
              <TextField label="Learnings" multiline rows={3} />
              <TextField label="Challenges" multiline rows={3} />
              <Stack direction="row" spacing={1}>
                <Button>Upload Samples</Button>
                <Button variant="outlined">Save Draft</Button>
                <Button color="success">Submit Entry</Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2.5 }}>
            <Typography variant="h6">Supervisor Feedback</Typography>
            <Divider sx={{ my: 2 }} />
            <Stack spacing={1.5}>
              {[1,2].map((i) => (
                <Stack key={i}>
                  <Typography fontWeight={600} variant="body2">Week {i}</Typography>
                  <Typography variant="body2" color="text.secondary">Good progress, focus on testing.</Typography>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
}
