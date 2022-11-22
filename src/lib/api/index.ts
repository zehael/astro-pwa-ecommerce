import type { IProduct } from "../../types/product";
import type { IAuthRespoonse, IProductResponse, IProductResponseOfOne } from "../../types/response";
import { fetchProductsQuery } from "./queries";

const apiUrl = import.meta.env.PUBLIC_API_HOST + '/api';

const get = (apiPath: string, token?: string) => {
  const url = apiUrl + apiPath;
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
  const url = apiUrl + apiPath;
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
  const resp = await get(`/products?${fetchProductsQuery}`);
  const data = (await resp.json()) as IProductResponse;
  return data.data;
}

export async function getProductById(id: number | string) {
  const resp = await get(`/products/${id}?${fetchProductsQuery}`);
  const data = (await resp.json()) as IProductResponseOfOne;
  return data.data;
}

export async function registerUser(userData: any) {
  const resp = await post("/auth/local/register", userData);
  return (await resp.json()) as IAuthRespoonse;
}

export async function authUser(userData: any) {
  const resp = await post("/auth/local", userData);
  return (await resp.json()) as IAuthRespoonse;
}
