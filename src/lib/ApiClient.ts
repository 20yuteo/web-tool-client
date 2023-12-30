type RequestIF = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  body?: Record<string, unknown>; 
}

type ResponseIF = {
  ok: boolean;
}

export async function apiClient<Response>(request: RequestIF): Promise<Response & ResponseIF> {
  try {
    // const result = await fetch(`http://localhost:3000/dev${request.path}`, {
    const result = await fetch(`https://v4aw71i3fk.execute-api.ap-northeast-1.amazonaws.com/dev${request.path}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: request.method,
      body: JSON.stringify(request.body),
    });
  
    const res: Response = await result.json();
    return {
      ok: result.ok,
      res
    } as unknown as Response & ResponseIF;

  } catch {
    throw new Error("API Error");
  }
}