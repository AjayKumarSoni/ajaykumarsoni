import { Paper, Typography, Stack, TextField, Grid, Button } from '@mui/material';

export default function FacultySettings() {
  return (
    <Paper sx={{ p: 2.5 }}>
      <Typography variant="h6">Settings & Administration</Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}><TextField fullWidth label="Academic Calendar Start" type="date" InputLabelProps={{ shrink: true }} /></Grid>
        <Grid item xs={12} md={6}><TextField fullWidth label="Academic Calendar End" type="date" InputLabelProps={{ shrink: true }} /></Grid>
        <Grid item xs={12}><TextField fullWidth label="Internship Policies & Guidelines" multiline rows={4} /></Grid>
        <Grid item xs={12} md={6}><TextField fullWidth label="Email Template" placeholder="Interview invite, reminders..." /></Grid>
        <Grid item xs={12} md={6}><TextField fullWidth label="SMS Template" placeholder="Short reminders..." /></Grid>
        <Grid item xs={12}><TextField fullWidth label="ERP Integration Endpoint" placeholder="https://erp.example.com/api" /></Grid>
      </Grid>
      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        <Button color="success">Save</Button>
        <Button variant="outlined">Backup Data</Button>
        <Button variant="outlined">Export</Button>
      </Stack>
    </Paper>
  );
}
