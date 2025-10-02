import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Checkbox } from '@mui/material';
import { useState, useMemo } from 'react';

/*
columns: [{ id: 'name', label: 'Name', align: 'left', render?: (row) => node }]
rows: array of objects
*/
export default function DataTable({ columns = [], rows = [], size = 'small', dense = true, sx, selectable = false, onSelectionChange }) {
  const [selected, setSelected] = useState([]);

  const allIds = useMemo(() => rows.map((r, i) => r.id ?? i), [rows]);
  const allSelected = selected.length > 0 && selected.length === allIds.length;
  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleToggleAll = () => {
    const next = allSelected ? [] : allIds;
    setSelected(next);
    onSelectionChange && onSelectionChange(next);
  };

  const handleToggle = (id) => {
    const selectedIndex = selected.indexOf(id);
    let next = [];
    if (selectedIndex === -1) next = selected.concat(id);
    else next = [...selected.slice(0, selectedIndex), ...selected.slice(selectedIndex + 1)];
    setSelected(next);
    onSelectionChange && onSelectionChange(next);
  };

  return (
    <Paper sx={sx}>
      <Table size={dense ? 'small' : size}>
        <TableHead>
          <TableRow>
            {selectable && (
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && !allSelected}
                  checked={allSelected}
                  onChange={handleToggleAll}
                />
              </TableCell>
            )}
            {columns.map((c) => (
              <TableCell key={c.id} align={c.align || 'left'}>{c.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => {
            const id = row.id ?? idx;
            const selectedRow = isSelected(id);
            return (
              <TableRow key={id} hover selected={selectedRow}>
                {selectable && (
                  <TableCell padding="checkbox">
                    <Checkbox checked={selectedRow} onChange={() => handleToggle(id)} />
                  </TableCell>
                )}
                {columns.map((c) => (
                  <TableCell key={c.id} align={c.align || 'left'}>
                    {c.render ? c.render(row) : row[c.id]}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
