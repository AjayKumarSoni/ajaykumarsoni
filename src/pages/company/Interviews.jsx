import { Paper, Typography, Stack, TextField, Button, Grid, Chip } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchInterviews } from '../../services/company';

export default function InterviewScheduler() {
  const { data = [], isLoading } = useQuery({ queryKey: ['interviews'], queryFn: fetchInterviews });

  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Interview Scheduler</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={4}><TextField fullWidth type="date" label="Date" InputLabelProps={{ shrink: true }} /></Grid>
          <Grid item xs={12} md={4}><TextField fullWidth label="Time" placeholder="e.g., 3:00 PM" /></Grid>
          <Grid item xs={12} md={4}><TextField fullWidth label="Mode" placeholder="Zoom/Meet/Phone" /></Grid>
        </Grid>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mt: 2 }}>
          <Button>Send Invite</Button>
          <Button variant="outlined">Reschedule</Button>
          <Button variant="outlined" color="error">Cancel</Button>
        </Stack>
      </Paper>

      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Upcoming Interviews</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {(isLoading ? Array.from({ length: 4 }) : data).map((it, idx) => (
            <Grid key={it?.id ?? idx} item xs={12} md={6}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography fontWeight={600}>{it?.candidate || 'Loading...'}</Typography>
                <Typography variant="body2" color="text.secondary">{it ? `${it.role}` : 'Fetching...'}</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  <Chip size="small" label={it?.date || '...'} />
                  <Chip size="small" label={it?.time || '...'} />
                  <Chip size="small" label={it?.mode || '...'} />
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Stack>
  );
}
