// src/api.js — local development
// We’ll switch this to your Render URL after deployment.
export const API_BASE = 'http://127.0.0.1:3000';

// GET /lessons  -> Array of lessons
export function fetchLessons() {
  return fetch(`${API_BASE}/lessons`).then(res => {
    if (!res.ok) throw new Error('Failed to load lessons');
    return res.json();
  });
}

// POST /orders  payload = { name, phone, items:[{ id, qty }] }
export function createOrder(payload) {
  return fetch(`${API_BASE}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(res => (res.ok ? res.json() : res.json().then(err => Promise.reject(err))));
}

// PUT /lessons/:id  body = { space }
export function updateLessonSpace(id, space) {
  return fetch(`${API_BASE}/lessons/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ space })
  }).then(res => (res.ok ? res.json() : res.json().then(err => Promise.reject(err))));
}
