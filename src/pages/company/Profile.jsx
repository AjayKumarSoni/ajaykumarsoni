import { Paper, Typography, Stack, Grid, TextField, Button } from '@mui/material';

export default function CompanyProfile() {
  return (
    <Paper sx={{ p: 2.5 }}>
      <Typography variant="h6">Company Profile</Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}><TextField fullWidth label="Company Name" defaultValue="Your Company" /></Grid>
        <Grid item xs={12} md={6}><TextField fullWidth label="Industry" /></Grid>
        <Grid item xs={12}><TextField fullWidth label="Website" /></Grid>
        <Grid item xs={12}><TextField fullWidth label="About Us" multiline rows={4} /></Grid>
        <Grid item xs={12} md={6}><TextField fullWidth label="Office Locations" /></Grid>
        <Grid item xs={12} md={6}><TextField fullWidth label="Benefits" /></Grid>
        <Grid item xs={12} md={6}><TextField fullWidth label="Contact Person" /></Grid>
        <Grid item xs={12} md={6}><TextField fullWidth label="Verification Docs" placeholder="Upload link or description" /></Grid>
      </Grid>
      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        <Button color="success">Save</Button>
        <Button variant="outlined">Upload Logo</Button>
      </Stack>
    </Paper>
  );
}
