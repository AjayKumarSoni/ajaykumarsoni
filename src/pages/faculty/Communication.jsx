import { Paper, Typography, Stack, TextField, List, ListItemButton, ListItemText, Divider, Box, Button } from '@mui/material';
import { useState } from 'react';

export default function CommunicationHub() {
  const [selected, setSelected] = useState(0);

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ height: { md: '75vh' } }}>
      <Paper sx={{ width: { xs: '100%', md: 320 }, p: 1.5, overflow: 'auto' }}>
        <TextField fullWidth size="small" placeholder="Search" />
        <List>
          {["Students","Companies","Coordinators"].map((t, i) => (
            <ListItemButton key={t} selected={selected===i} onClick={() => setSelected(i)}>
              <ListItemText primary={t} secondary="Last message preview..." />
            </ListItemButton>
          ))}
        </List>
      </Paper>

      <Paper sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">Discussion</Typography>
        </Box>
        <Divider />
        <Box sx={{ flex: 1, p: 2, overflow: 'auto' }}>
          <Stack spacing={1.5}>
            {[1,2,3].map((i) => (
              <Box key={i} sx={{ alignSelf: i%2? 'flex-start' : 'flex-end', maxWidth: '70%' }}>
                <Paper variant="outlined" sx={{ p: 1.5 }}>
                  <Typography variant="body2">Message {i}...</Typography>
                </Paper>
              </Box>
            ))}
          </Stack>
        </Box>
        <Divider />
        <Box sx={{ p: 1.5, display: 'flex', gap: 1 }}>
          <TextField fullWidth size="small" placeholder="Type a message" />
          <Button>Send</Button>
        </Box>
      </Paper>
    </Stack>
  );
}
