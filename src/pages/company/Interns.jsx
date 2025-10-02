import { Paper, Typography, Stack, Button, Chip } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchInterns } from '../../services/company';
import DataTable from '../../components/common/DataTable';

export default function InternManagement() {
  const { data: rows = [], isLoading } = useQuery({ queryKey: ['company-interns'], queryFn: fetchInterns });

  const columns = [
    { id: 'name', label: 'Intern' },
    { id: 'tasks', label: 'Tasks Assigned' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'rating', label: 'Rating', render: (r) => <Chip size="small" label={r.rating} /> },
    { id: 'actions', label: 'Actions', align: 'right', render: () => (
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <Button size="small" variant="outlined">View Logbooks</Button>
        <Button size="small">Feedback</Button>
      </Stack>
    ) },
  ];

  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Active Interns</Typography>
      </Paper>
      <DataTable columns={columns} rows={rows} />
    </Stack>
  );
}
