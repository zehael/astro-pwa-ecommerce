import { SendOutlined } from "@ant-design/icons";
import { Button, Card, Divider } from "antd";
import type { FC } from "react";
import type { IProduct } from "../../types/product";
import s from "./Product.module.scss";

interface ProductCardProdps {
  product: IProduct;
}

const ProductCard: FC<ProductCardProdps> = ({ product }) => {
  const imgPath =
    import.meta.env.PUBLIC_API_HOST +
    product.attributes.image.data?.attributes.url;
  return (
    <Card
      className={s.card}
      bordered={false}
      cover={
        <img
          className={s.card__image}
          alt={product.attributes.title}
          src={imgPath}
        />
      }
    >
      <Card.Meta title={product.attributes.title} />
      <div className={s.card__description}>
        {product.attributes.description}
      </div>
      <div className={s.card__actions}>
        <a href={`/product/${product.id}`}>
          <Button type="primary" block>
            $ {product.attributes.price} Buy
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default ProductCard;
