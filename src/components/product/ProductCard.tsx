import { Button, Card, Divider } from "antd";
import type { FC } from "react";
import type { IProduct } from "../../types/product";
import s from "./Product.module.scss";

interface ProductCardProdps {
  product: IProduct;
}

const ProductCard: FC<ProductCardProdps> = ({ product }) => {
  return (
    <Card
      className={s.card}
      bordered={false}
      cover={
         <img className={s.card__image} alt={product.title} src={product.image} />
      }
    >
      <Card.Meta title={product.title} />
     <div className={s.card__description}>
      {product.description}
     </div>
     <div className={s.card__actions}>
      <a href={`/product/${product.id}`}>
        <Button type='primary' block>$ {product.price} Buy</Button>
      </a>
     </div>
    </Card>
  );
};

export default ProductCard;
