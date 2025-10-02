import { Paper, Typography, Stack, Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchHiringFunnel } from '../../services/company';
import { ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';

export default function CompanyReports() {
  const { data = [], isLoading } = useQuery({ queryKey: ['hiring-funnel'], queryFn: fetchHiringFunnel });

  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Reports & Analytics</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Hiring funnel, time-to-hire, performance analytics, distribution, and skill gap analysis.
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button>Download Report</Button>
          <Button variant="outlined">Compare Periods</Button>
        </Stack>
      </Paper>

      <Paper sx={{ p: 2.5 }}>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>Hiring Funnel</Typography>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={isLoading ? [] : data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#1e88e5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Paper>
    </Stack>
  );
}
