const API_BASE_URL = 'http://localhost:5000';

export async function fetchProjects() {
  const response = await fetch(`${API_BASE_URL}/api/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}
