import type { IProduct } from "../../types/product";

const apiHost = import.meta.env.API_URL;

const get = (apiPath: string) => {
  const url = apiHost + apiPath;
  console.log('[FETCH][POST]: ', url);
  return fetch(url, { headers: { Authoaration: "Bearer TOKEN" } }).then(
    (resp) => resp
  );
}

export function checkAuth() {
  return new Promise<boolean>((resolve) => {
    resolve(false);
  })
}

export async function getProducts() {
  try {
    const resp = await get("/products");
    return await resp.json() as IProduct[];
  } catch (e) {
    console.log(e);
  }
}
