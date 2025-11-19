// Simple API helper (no axios; promises only)
export const API_BASE = (location.hostname.endsWith('github.io') || location.protocol === 'https:')
  ? 'https://YOUR-BACKEND.onrender.com'   // replace after deploy
  : 'http://127.0.0.1:3000';

export function fetchLessons() {
  return fetch(`${API_BASE}/lessons`)
    .then(res => {
      if (!res.ok) throw new Error('Failed to load lessons');
      return res.json();
    });
}
