import { Paper, Typography, Grid, TextField, Stack, Button, Chip, Divider } from '@mui/material';

export default function Profile() {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Personal Information</Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Name" defaultValue="Student Name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Email" defaultValue="student@example.com" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Phone" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="College" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Department" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Semester" />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={1}>
              <Button>Upload Resume</Button>
              <Button variant="outlined">Resume Builder</Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Skills & Projects</Typography>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" spacing={1}>
          <Chip label="React" />
          <Chip label="Node.js" />
          <Chip label="SQL" />
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button>Add Skill</Button>
          <Button variant="outlined">Add Project</Button>
        </Stack>
      </Paper>

      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Links & Preferences</Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="LinkedIn" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="GitHub" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Portfolio" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Preferred Locations" />
          </Grid>
        </Grid>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button color="success">Save Changes</Button>
          <Button variant="outlined">Change Password</Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
