import type { IProduct } from "./product";
import type { IUser } from "./user";

export interface IAuthRespoonse {
  jwt: string;
  user: IUser;
}

export interface IProductResponse {
  data: IProduct[];
}

export interface IProductResponseOfOne {
  data: IProduct;
}