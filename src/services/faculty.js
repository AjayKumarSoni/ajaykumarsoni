// Mock faculty services. Replace with real axios calls later.

export async function fetchStudents(params = {}) {
  await new Promise((r) => setTimeout(r, 250));
  const list = Array.from({ length: 25 }).map((_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    roll: `2025CS${String(i + 1).padStart(3, '0')}`,
    department: ['CSE', 'ECE', 'ME'][i % 3],
    status: ['Active', 'Searching', 'Completed'][i % 3],
  }));
  return list;
}

export async function fetchPendingReports() {
  await new Promise((r) => setTimeout(r, 200));
  return Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    student: `Student ${i + 1}`,
    company: ['Acme', 'Globex', 'Initech'][i % 3],
    submittedOn: `2025-09-${String(20 + (i % 10)).padStart(2, '0')}`,
    status: 'Pending',
  }));
}

export async function fetchFacultyAnalytics() {
  await new Promise((r) => setTimeout(r, 180));
  return {
    distribution: [
      { dept: 'CSE', active: 46, completed: 18 },
      { dept: 'ECE', active: 22, completed: 12 },
      { dept: 'ME', active: 18, completed: 10 },
    ],
    modes: [
      { mode: 'Remote', count: 54 },
      { mode: 'Hybrid', count: 22 },
      { mode: 'Onsite', count: 20 },
    ],
  };
}
