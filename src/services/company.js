// Mock company services. Replace with real axios calls later.

export async function fetchApplications(params = {}) {
  await new Promise((r) => setTimeout(r, 300));
  const list = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    college: ['ABC Institute', 'XYZ University'][i % 2],
    cgpa: (7.5 + (i % 5) * 0.3).toFixed(1),
    skills: 65 + (i % 6) * 5,
    applied: `2025-10-${String(1 + (i % 9)).padStart(2, '0')}`,
    status: ['applied', 'shortlisted', 'interview', 'selected', 'rejected'][i % 5],
  }));
  return list;
}

export async function fetchHiringFunnel() {
  await new Promise((r) => setTimeout(r, 200));
  return [
    { stage: 'Applied', count: 240 },
    { stage: 'Shortlisted', count: 80 },
    { stage: 'Interviewed', count: 50 },
    { stage: 'Selected', count: 20 },
  ];
}

export async function fetchInterviews() {
  await new Promise((r) => setTimeout(r, 200));
  return Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    candidate: `Student ${i + 1}`,
    role: i % 2 ? 'Frontend Intern' : 'Data Analyst',
    date: `2025-10-${String(10 + i).padStart(2, '0')}`,
    time: `${10 + i}:00 AM`,
    mode: ['Zoom', 'Google Meet', 'Phone'][i % 3],
  }));
}

export async function fetchInterns() {
  await new Promise((r) => setTimeout(r, 200));
  return Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    tasks: 10 + i,
    attendance: `${90 - i}%`,
    rating: (4.5 - (i % 5) * 0.3).toFixed(1),
  }));
}
