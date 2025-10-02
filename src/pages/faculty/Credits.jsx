import { Paper, Typography, Stack, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

export default function CreditManagement() {
  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Credit Management</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          View internship hours and allocate credits per NEP framework. Integrate with ERP and maintain audit trail.
        </Typography>
      </Paper>
      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Supervisor Rating</TableCell>
              <TableCell>Final Grade</TableCell>
              <TableCell>Credits</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1,2,3].map((i) => (
              <TableRow key={i}>
                <TableCell>Student {i}</TableCell>
                <TableCell>{120 + i*10}</TableCell>
                <TableCell>{(4.0 - i*0.2).toFixed(1)}</TableCell>
                <TableCell>{['A','B','B+'][i-1] || 'A'}</TableCell>
                <TableCell>{i}</TableCell>
                <TableCell align="right"><Button size="small">Assign</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Stack>
  );
}
