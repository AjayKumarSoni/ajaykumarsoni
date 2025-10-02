import { Paper, Stack, Typography, Box } from '@mui/material';

export default function AppCard({ title, subtitle, action, children, sx }) {
  return (
    <Paper sx={{ p: 2.5, ...sx }}>
      {(title || action || subtitle) && (
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.5 }}>
          <Box>
            {title && <Typography variant="h6">{title}</Typography>}
            {subtitle && <Typography variant="body2" color="text.secondary">{subtitle}</Typography>}
          </Box>
          {action && <Box>{action}</Box>}
        </Stack>
      )}
      {children}
    </Paper>
  );
}
