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

export async function deleteEntryAPI(id) {
  const response = await fetch(`${API_URL}/api/entries/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Content-Type": "application/json",
    },
  });
}
