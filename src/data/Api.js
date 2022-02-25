import { getAuthToken } from "../utils";

let { API_URL } = process.env;

export async function getEntriesAPI() {
  const response = await fetch(`${API_URL}/entries`, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
