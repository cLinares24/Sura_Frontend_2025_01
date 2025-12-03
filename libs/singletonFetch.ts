const API_URL = 'https://medicicolbackend.onrender.com'

type methods = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const apiFetch = async (endpoint: string, method: methods, body?: any) => {
  const headerOptions: any = {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  }

  if (method === 'POST' || method === 'PUT') {
    headerOptions.body = JSON.stringify(body)
  }

  const response = await fetch(`${API_URL}${endpoint}`, headerOptions)

  const data = await response.json()

  // 👇 si es login y el backend devuelve access_token, lo guardamos en cookies
  if (data.access_token) {
    document.cookie = `access_token=${data.access_token}; path=/; max-age=3600; secure; samesite=strict`
  }

  return data
}
