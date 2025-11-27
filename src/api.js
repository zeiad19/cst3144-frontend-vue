// src/api.js

// TODO: change this to your Render/AWS URL when deployed
const API_BASE_URL = "http://localhost:3000";

/**
 * GET /lessons
 */
export function fetchLessons() {
  return fetch(`${API_BASE_URL}/lessons`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch lessons");
      }
      return response.json();
    });
}

/**
 * GET /search?query=...
 * Returns filtered lessons from the backend.
 */
export function searchLessons(query) {
  const url = `${API_BASE_URL}/search?query=${encodeURIComponent(query)}`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to search lessons");
    }
    return response.json();
  });
}

/**
 * POST /orders
 * orderData: { name, phone, items: [{ id, qty }] }
 */
export function createOrder(orderData) {
  return fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  }).then(async (response) => {
    if (!response.ok) {
      try {
        const errBody = await response.json();
        throw errBody;
      } catch (e) {
        throw { error: "Failed to create order" };
      }
    }
    return response.json();
  });
}

/**
 * PUT /lessons/:id
 * body: { space: number }
 */
export function updateLessonSpace(id, space) {
  return fetch(`${API_BASE_URL}/lessons/${encodeURIComponent(id)}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ space }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to update lesson");
    }
    return response.json();
  });
}
