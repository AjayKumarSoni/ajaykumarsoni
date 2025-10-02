import { Paper, Typography, Stack } from '@mui/material';

export default function InternshipMonitoring() {
  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Internship Monitoring</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Real-time map and list view of student internships will be displayed here with filters for Active/Completed/Upcoming.
        </Typography>
      </Paper>
    </Stack>
  );
}
