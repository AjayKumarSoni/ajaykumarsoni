import { Paper, Typography, Stack, Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchPendingReports } from '../../services/faculty';
import DataTable from '../../components/common/DataTable';
import ConfirmDialog from '../../components/common/ConfirmDialog';
import { useState, useMemo } from 'react';

export default function FacultyReports() {
  const { data: rows = [], isLoading } = useQuery({ queryKey: ['faculty-pending-reports'], queryFn: fetchPendingReports });
  const [approve, setApprove] = useState({ open: false, name: '' });
  const [request, setRequest] = useState({ open: false, name: '' });

  const columns = useMemo(() => ([
    { id: 'student', label: 'Student' },
    { id: 'company', label: 'Company' },
    { id: 'submittedOn', label: 'Submitted On' },
    { id: 'status', label: 'Status' },
    { id: 'actions', label: 'Actions', align: 'right', render: (r) => (
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <Button size="small" onClick={() => setApprove({ open: true, name: r.student })}>Approve</Button>
        <Button variant="outlined" size="small" onClick={() => setRequest({ open: true, name: r.student })}>Request Changes</Button>
      </Stack>
    ) },
  ]), []);

  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Reports & Approvals</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Review auto-generated reports, provide feedback, and approve/reject.
        </Typography>
      </Paper>

      <DataTable columns={columns} rows={rows} />

      <ConfirmDialog
        open={approve.open}
        title="Approve report?"
        content={`Approve report for ${approve.name}?`}
        confirmText="Approve"
        onClose={() => setApprove({ open: false, name: '' })}
        onConfirm={() => setApprove({ open: false, name: '' })}
      />
      <ConfirmDialog
        open={request.open}
        title="Request modifications?"
        content={`Request modifications from ${request.name}?`}
        confirmText="Send Request"
        onClose={() => setRequest({ open: false, name: '' })}
        onConfirm={() => setRequest({ open: false, name: '' })}
      />
    </Stack>
  );
}
