export interface IProduct {
  id: number;
  attributes: {
    title: string;
    price: number;
    image: {
      data: IImage | null;
    };
    description: string;
  };
}

export interface IImage {
  id: number;
  attributes: {
    url: string;
  };
}
