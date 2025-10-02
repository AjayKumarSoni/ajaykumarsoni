import { Paper, Typography, Stack, List, ListItem, ListItemText, Button } from '@mui/material';

export default function CompanyPartnerships() {
  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Company Partnerships</Typography>
        <List>
          {[1,2,3].map((i) => (
            <ListItem key={i} secondaryAction={<Button size="small">Renew MoU</Button>}>
              <ListItemText primary={`Partner Company ${i}`} secondary="MoU valid till: 2026-03-31" />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Stack>
  );
}
