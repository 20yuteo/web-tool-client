type RequestIF = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  body?: Record<string, unknown>;
  headers?: HeadersInit;
};

type ResponseIF = {
  ok: boolean;
};

const apiURL = import.meta.env.VITE_API_URL || "http://localhost:3000/dev";

export async function apiClient<Response>(
  request: RequestIF
): Promise<Response & ResponseIF> {
  try {
    const result = await fetch(`${apiURL}${request.path}`, {
      headers: {
        "Content-Type": "application/json",
        ...request.headers,
      },
      mode: "cors",
      method: request.method,
      body: JSON.stringify(request.body),
    });

    const res: Response = await result.json();
    return {
      ok: result.ok,
      res,
    } as unknown as Response & ResponseIF;
  } catch {
    throw new Error("API Error");
  }
}
