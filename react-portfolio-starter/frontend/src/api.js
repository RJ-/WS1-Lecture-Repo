const API_BASE_URL = 'http://localhost:5002';

export async function fetchProjects() {
  const response = await fetch(`${API_BASE_URL}/api/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}

// export async function fetchProfile() {
//   const response = await fetch(`${API_BASE_URL}/api/profile`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch projects');
//   }
//   return response.json();
// }

// export async function fetchCertifications() {
//   const response = await fetch(`${API_BASE_URL}/api/certifications`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch projects');
//   }
//   return response.json();
// }