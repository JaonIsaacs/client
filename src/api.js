const API_URL = "https://localhost:5000/api";

export async function apiRequest(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: "include", // send cookies
    headers: { "Content-Type": "application/json", ...(options.headers || {}) }
  });
  return res.json();
}
