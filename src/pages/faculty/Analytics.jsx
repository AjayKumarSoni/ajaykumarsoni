import { Paper, Typography, Stack, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchFacultyAnalytics } from '../../services/faculty';
import { ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#1e88e5', '#8e24aa', '#2e7d32'];

export default function AnalyticsInsights() {
  const { data, isLoading } = useQuery({ queryKey: ['faculty-analytics'], queryFn: fetchFacultyAnalytics });

  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2.5 }}>
        <Typography variant="h6">Analytics & Insights</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Department statistics and internship mode distribution.
        </Typography>
      </Paper>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2.5 }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>Department-wise Internships</Typography>
            <div style={{ width: '100%', height: 320 }}>
              <ResponsiveContainer>
                <BarChart data={isLoading ? [] : data?.distribution || []} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dept" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="active" name="Active" fill="#1e88e5" radius={[6,6,0,0]} />
                  <Bar dataKey="completed" name="Completed" fill="#43a047" radius={[6,6,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2.5 }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>Internship Modes</Typography>
            <div style={{ width: '100%', height: 320 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Tooltip />
                  <Legend />
                  <Pie
                    data={isLoading ? [] : data?.modes || []}
                    dataKey="count"
                    nameKey="mode"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={3}
                    label
                  >
                    {(data?.modes || []).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
}
