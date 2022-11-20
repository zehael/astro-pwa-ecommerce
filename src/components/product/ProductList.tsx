import { Col, Row } from "antd";
import type { FC } from "react";
import type { IProduct } from "../../types/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <Row gutter={[20, 20]}>
      {products.map((product) => (
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
