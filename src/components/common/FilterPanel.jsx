import { Paper, Stack, Button, Divider, Box } from '@mui/material';

export default function FilterPanel({ children, onClear, onApply, actions, sx }) {
  return (
    <Paper sx={{ p: 2, ...sx }}>
      <Stack spacing={2}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2 }}>
          {children}
        </Box>
        <Divider />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} justifyContent="flex-end">
          {actions}
          <Button variant="outlined" onClick={onClear}>Clear</Button>
          <Button onClick={onApply}>Apply</Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
