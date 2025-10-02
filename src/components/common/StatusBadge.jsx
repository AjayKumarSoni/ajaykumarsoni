import { Chip } from '@mui/material';

const colorMap = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
  default: 'default',
  applied: 'info',
  shortlisted: 'warning',
  interview: 'primary',
  selected: 'success',
  rejected: 'error',
};

export default function StatusBadge({ status = 'default', label }) {
  const key = String(status).toLowerCase();
  const color = colorMap[key] || 'default';
  return <Chip size="small" label={label || status} color={color} variant={color === 'default' ? 'outlined' : 'filled'} />;
}
