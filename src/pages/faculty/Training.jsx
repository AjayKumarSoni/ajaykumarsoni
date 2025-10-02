import { Paper, Typography, Stack, List, ListItem, ListItemText, Button } from '@mui/material';

export default function TrainingManagement() {
  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Training Management</Typography>
        <List>
          {[1,2,3].map((i) => (
            <ListItem key={i} secondaryAction={<Button size="small">Assign</Button>}>
              <ListItemText primary={`Course ${i}`} secondary="Department: CSE • Mandatory: Yes" />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Stack>
  );
}
