import { Paper, Typography, Stack, List, ListItem, ListItemButton, ListItemText, Chip, Button } from '@mui/material';
import { useState } from 'react';

const seed = [
  { id: 1, title: 'Report pending approval', meta: 'Student 5 • 10m ago', read: false },
  { id: 2, title: 'Mentor assignment due', meta: 'CSE Dept • 2h ago', read: false },
  { id: 3, title: 'New partnership request', meta: 'Company XYZ • 1d ago', read: true },
];

export default function FacultyNotifications() {
  const [items, setItems] = useState(seed);
  const markAll = () => setItems(items.map(i => ({ ...i, read: true })));

  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Notifications</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <Button size="small" onClick={markAll}>Mark all as read</Button>
        </Stack>
      </Paper>
      <Paper>
        <List>
          {items.map((n) => (
            <ListItem
              key={n.id}
              secondaryAction={!n.read ? <Chip size="small" color="primary" label="New" /> : null}
              disablePadding
            >
              <ListItemButton selected={!n.read} onClick={() => setItems(items.map(i => i.id === n.id ? { ...i, read: true } : i))}>
                <ListItemText
                  primary={<Typography fontWeight={n.read ? 500 : 700}>{n.title}</Typography>}
                  secondary={<Typography variant="body2" color="text.secondary">{n.meta}</Typography>}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Stack>
  );
}
