import { Paper, Typography, Stack, Grid, Button, Chip } from '@mui/material';

export default function ReportsCertificates() {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Completed Internships</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {[1,2].map((i) => (
            <Grid key={i} item xs={12} md={6}>
              <Paper variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Stack>
                  <Typography fontWeight={600}>Company {i}</Typography>
                  <Typography variant="body2" color="text.secondary">Jan - Mar 2025 • 12 weeks</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Chip size="small" label="Rating: 4.5" />
                    <Chip size="small" label="Credits: 4" />
                  </Stack>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                  <Button size="small">Download Report</Button>
                  <Button size="small" variant="outlined">Certificate (QR)</Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Badges & Social</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <Chip label="React" />
          <Chip label="Communication" />
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button>Share on LinkedIn</Button>
          <Button variant="outlined">Copy Link</Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
