import { getAuthToken } from "../utils";

let { API_URL } = process.env;

export async function getEntriesAPI() {
  const response = await fetch(`${API_URL}/api/entries`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export async function getEntryAPI(id) {
  const response = await fetch(`${API_URL}/api/entries/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export async function putEntryAPI(entry) {
  const id = entry.id;
  delete entry.id;

  const response = await fetch(`${API_URL}/api/entries/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  });
}

export async function deleteEntryAPI(id) {
  await fetch(`${API_URL}/api/entries/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Content-Type": "application/json",
    },
  });
}
