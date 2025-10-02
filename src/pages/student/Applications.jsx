import { Paper, Typography, Tabs, Tab, Box, Stack, Button, Chip } from '@mui/material';
import { useState } from 'react';

const tabs = ['All', 'Applied', 'Shortlisted', 'Interview Scheduled', 'Selected', 'Rejected'];

export default function MyApplications() {
  const [value, setValue] = useState(0);

  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5 }}>
        <Tabs value={value} onChange={(_, v) => setValue(v)} variant="scrollable" scrollButtons="auto">
          {tabs.map((t) => (
            <Tab key={t} label={t} />
          ))}
        </Tabs>
      </Paper>

      {[...Array(5)].map((_, i) => (
        <Paper key={i} sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography fontWeight={600}>Frontend Intern @ Company {i + 1}</Typography>
            <Typography variant="body2" color="text.secondary">Applied → Under Review → Shortlisted → Interview → Final</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <Chip size="small" label="Interview 12 Oct, 3PM" color="primary" />
              <Chip size="small" label="Zoom Link" variant="outlined" />
            </Stack>
          </Box>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" color="error">Withdraw</Button>
            <Button>Open Thread</Button>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}
