import { Paper, Typography, Stack, TextField, Grid, Button } from '@mui/material';

export default function PostInternship() {
  return (
    <Paper sx={{ p: 2.5 }}>
      <Typography variant="h6">Post Internship</Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}><TextField fullWidth label="Job Title" /></Grid>
        <Grid item xs={12} md={6}><TextField fullWidth label="Work Mode" placeholder="Remote/Hybrid/Onsite" /></Grid>
        <Grid item xs={12}><TextField fullWidth label="Description" multiline rows={4} /></Grid>
        <Grid item xs={12}><TextField fullWidth label="Requirements" multiline rows={3} /></Grid>
        <Grid item xs={12} md={4}><TextField fullWidth label="Skills Needed" placeholder="React, SQL" /></Grid>
        <Grid item xs={12} md={4}><TextField fullWidth label="Duration" placeholder="e.g., 12 weeks" /></Grid>
        <Grid item xs={12} md={4}><TextField fullWidth label="Stipend" placeholder="e.g., 10k-15k" /></Grid>
        <Grid item xs={12} md={6}><TextField fullWidth label="Positions Available" /></Grid>
        <Grid item xs={12} md={6}><TextField fullWidth type="date" label="Application Deadline" InputLabelProps={{ shrink: true }} /></Grid>
      </Grid>
      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        <Button>Preview</Button>
        <Button variant="outlined">Save Draft</Button>
        <Button color="success">Publish</Button>
      </Stack>
    </Paper>
  );
}
