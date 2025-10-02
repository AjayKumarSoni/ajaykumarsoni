export function exportToCsv(filename, rows, headers) {
  const processRow = (row) => headers.map(h => JSON.stringify(row[h] ?? '')).join(',');
  const csvContent = [headers.join(','), ...rows.map(processRow)].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
