import { Paper, Stack, TextField, Button, Chip } from '@mui/material';
import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchStudents } from '../../services/faculty';
import SearchBar from '../../components/common/SearchBar';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { exportToCsv } from '../../utils/export';

export default function StudentManagement() {
  const [q, setQ] = useState('');
  const { data: rows = [], isLoading } = useQuery({ queryKey: ['faculty-students'], queryFn: fetchStudents });

  const columns = useMemo(() => ([
    { id: 'name', label: 'Name' },
    { id: 'roll', label: 'Roll No' },
    { id: 'department', label: 'Department' },
    { id: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
    { id: 'actions', label: 'Actions', align: 'right', render: () => (
      <Button size="small">View</Button>
    ) },
  ]), []);

  const filtered = rows.filter(r => !q || r.name.toLowerCase().includes(q.toLowerCase()) || r.roll.toLowerCase().includes(q.toLowerCase()));

  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
        <SearchBar value={q} onChange={setQ} placeholder="Search by name/roll" sx={{ minWidth: 260, flex: 1 }} />
        <TextField size="small" label="Department" />
        <TextField size="small" label="Semester" />
        <TextField size="small" label="Internship Status" />
        <Button onClick={() => exportToCsv('students.csv', filtered, ['name','roll','department','status'])}>Export</Button>
      </Paper>
      <DataTable columns={columns} rows={filtered} />
    </Stack>
  );
}
