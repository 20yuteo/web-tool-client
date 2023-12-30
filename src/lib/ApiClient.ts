type RequestIF = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  body?: Record<string, unknown>; 
}

export async function apiClient<Response>(request: RequestIF): Promise<Response> {
  const result = await fetch(`http://localhost:3000/dev${request.path}`, {
    method: request.method,
    body: JSON.stringify(request.body),
  });

  const res: Response = await result.json();
  return res;
}