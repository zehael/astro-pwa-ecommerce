import type { IProduct } from "../../types/product";
import type { IAuthRespoonse } from "../../types/response";

const apiHost = import.meta.env.PUBLIC_API_URL;

const get = (apiPath: string, token?: string) => {
  const url = apiHost + apiPath;
  console.log("[FETCH][GET]: ", url);

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }

  console.log('headers for fetch', headers);


  return fetch(url, { headers }).then((resp) => resp);
};

const post = (apiPath: string, body: any, token?: string) => {
  const url = apiHost + apiPath;
  console.log("[FETCH][POST]: ", url);

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }

  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  }).then((resp) => resp);
};

export function checkAuth() {
  return new Promise<boolean>((resolve) => {
    resolve(false);
  });
}

export async function getProducts(): Promise<IProduct[]> {
  const resp = await get("/products");
  return (await resp.json()) as IProduct[];
}

export async function registerUser(userData: any) {
  const resp = await post("/auth/local/register", userData);
  return (await resp.json()) as IAuthRespoonse;
}

export async function authUser(userData: any) {
  const resp = await post("/auth/local", userData);
  return (await resp.json()) as IAuthRespoonse;
}
