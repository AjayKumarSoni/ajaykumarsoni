import { Paper, Typography, Stack, TextField, Button, Chip } from '@mui/material';
import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchApplications } from '../../services/company';
import SearchBar from '../../components/common/SearchBar';
import DataTable from '../../components/common/DataTable';
import ConfirmDialog from '../../components/common/ConfirmDialog';
import StatusBadge from '../../components/common/StatusBadge';
import { exportToCsv } from '../../utils/export';

export default function CompanyApplications() {
  const [q, setQ] = useState('');
  const [confirm, setConfirm] = useState({ open: false, name: '' });
  const [selectedIds, setSelectedIds] = useState([]);

  const { data: rows = [], isLoading } = useQuery({ queryKey: ['company-applications'], queryFn: fetchApplications });

  const columns = useMemo(() => ([
    { id: 'name', label: 'Name' },
    { id: 'college', label: 'College' },
    { id: 'cgpa', label: 'CGPA' },
    { id: 'skills', label: 'Skills Match', render: (r) => <Chip size="small" label={`${r.skills}%`} color="primary" /> },
    { id: 'applied', label: 'Applied' },
    { id: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
    { id: 'actions', label: 'Actions', align: 'right', render: (r) => (
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <Button size="small">Shortlist</Button>
        <Button size="small" variant="outlined" onClick={() => setConfirm({ open: true, name: r.name })}>Reject</Button>
        <Button size="small" variant="outlined">Schedule</Button>
      </Stack>
    ) },
  ]), []);

  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5, display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
        <SearchBar value={q} onChange={setQ} placeholder="Search by name/college" sx={{ maxWidth: 360, flex: 1 }} />
        <TextField size="small" label="Course" />
        <TextField size="small" label="CGPA" />
        <TextField size="small" label="Skills" />
        <Button onClick={() => exportToCsv('applications.csv', rows, ['name','college','cgpa','skills','applied','status'])}>Export CSV</Button>
      </Paper>

      <Paper sx={{ p: 1.5, display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography variant="body2" color="text.secondary">Selected: {selectedIds.length}</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <Button size="small" disabled={!selectedIds.length}>Bulk Shortlist</Button>
          <Button size="small" variant="outlined" disabled={!selectedIds.length} onClick={() => setConfirm({ open: true, name: `${selectedIds.length} candidates` })}>Bulk Reject</Button>
          <Button size="small" variant="outlined" disabled={!selectedIds.length}>Bulk Schedule</Button>
        </Stack>
      </Paper>

      <DataTable columns={columns} rows={rows} selectable onSelectionChange={setSelectedIds} />

      <ConfirmDialog
        open={confirm.open}
        title="Reject applicant?"
        content={`Are you sure you want to reject ${confirm.name}?`}
        confirmText="Reject"
        onClose={() => setConfirm({ open: false, name: '' })}
        onConfirm={() => setConfirm({ open: false, name: '' })}
      />
    </Stack>
  );
}
