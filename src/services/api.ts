let token: string | null = null;

export const setToken = (t: string) => {
  token = t;
};

const baseUrl = "http://localhost:3000"; // ton back

export const api = {
  get: async (endpoint: string) => {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.json();
  },

  post: async (endpoint: string, body: any) => {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    });
    return res.json();
  },

  patch: async (endpoint: string, body: any) => {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    });
    return res.json();
  },

  delete: async (endpoint: string) => {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "DELETE",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.json();
  },
};
