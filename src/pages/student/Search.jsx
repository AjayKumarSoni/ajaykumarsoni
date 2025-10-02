import { Grid, Typography, Stack, TextField, Button, ToggleButtonGroup, ToggleButton, Chip } from '@mui/material';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchInternships } from '../../services/student';
import SearchBar from '../../components/common/SearchBar';
import FilterPanel from '../../components/common/FilterPanel';

export default function InternshipSearch() {
  const [query, setQuery] = useState('');
  const { data = [], isLoading } = useQuery({
    queryKey: ['internships', { q: query }],
    queryFn: () => fetchInternships({ query }),
  });
  return (
    <Stack spacing={2}>
      <SearchBar value={query} onChange={setQuery} onSearch={() => { /* trigger query */ }} placeholder="Search internships (e.g., React, Data Analyst)" />

      <FilterPanel onClear={() => {}} onApply={() => {}}>
        <TextField label="Location" size="small" />
        <TextField label="Domain" size="small" />
        <TextField label="Duration" size="small" />
        <TextField label="Stipend range" size="small" />
        <TextField label="Company rating" size="small" />
        <TextField label="Work mode" size="small" />
        <Stack direction="row" spacing={1}>
          <Chip label="Remote" size="small" />
          <Chip label="Hybrid" size="small" />
          <Chip label="Onsite" size="small" />
        </Stack>
      </FilterPanel>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Results</Typography>
        <ToggleButtonGroup size="small" exclusive>
          <ToggleButton value="grid">Grid</ToggleButton>
          <ToggleButton value="list">List</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Grid container spacing={2}>
        {(isLoading ? Array.from({ length: 6 }) : data).map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={item?.id ?? i}>
            <div style={{ background: 'white', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 12, padding: 16 }}>
              <Typography fontWeight={600}>{item?.company || 'Loading...'}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item ? `${item.role} • ${item.stipend} • ${item.mode}` : 'Fetching...'}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                {(item?.tags ?? ['...']).map((t, idx) => (
                  <Chip key={idx} size="small" label={t} />
                ))}
              </Stack>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <Button size="small" disabled={!item}>Quick Apply</Button>
                <Button size="small" variant="outlined" disabled={!item}>Save</Button>
              </Stack>
            </div>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
