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
    const result = await fetch(`https://wta.meet-app.link${request.path}`, {
    // const result = await fetch(`https://ntsrfhf53c.execute-api.ap-northeast-1.amazonaws.com/dev${request.path}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://wtc.meet-app.link",
      },
      mode: "cors",
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