// Mock student services. Replace with real axios calls later.
// Example: import axios from 'axios';

export async function fetchInternships({ query = '', filters = {} }) {
  // simulate network
  await new Promise((r) => setTimeout(r, 300));
  const all = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    company: `Company ${i + 1}`,
    role: i % 2 ? 'Frontend Intern' : 'Data Analyst Intern',
    stipend: i % 2 ? '10k-15k' : '8k-12k',
    mode: ['Remote', 'Hybrid', 'Onsite'][i % 3],
    tags: i % 2 ? ['React', 'Tailwind'] : ['SQL', 'Python'],
  }));
  const q = query.toLowerCase();
  return all.filter((x) => !q || x.company.toLowerCase().includes(q) || x.role.toLowerCase().includes(q));
}
